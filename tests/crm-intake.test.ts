import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/crm-inquiry.ts'
import { bookingQuestionnaireLead } from '../src/lib/crm-intake.ts'

type Result = { status: number; body: unknown }
function response() {
  const result: Result = { status: 0, body: null }
  const res = {
    status(code: number) { result.status = code; return res },
    json(body: unknown) { result.body = body; return res },
  }
  return { res, result }
}
const payload = { submissionId: 'site-1', partner1FirstName: 'Alex', email: 'alex@example.com', preferredContact: 'email', weddingDate: 'Summer 2027' }

test('booking questionnaire maps into a lead without losing the requested date', () => {
  const mapped = bookingQuestionnaireLead({ client1Name: 'Alex', client2Name: 'Sam', email: 'alex@example.com', client1Phone: '780-555-0101', eventDate: '14/08/2027', totalGuestCount: '85', contactPref: 'Text message', package: '5-Day Weekend' }, 2027, 'site-2')
  assert.equal(mapped.weddingDate, '14/08/2027')
  assert.equal(mapped.partner2FirstName, 'Sam')
  assert.equal(mapped.preferredContact, 'text')
  assert.match(mapped.message, /5-Day Weekend/)
})

test('questionnaire preserves the chosen contact address and does not invent a preference', () => {
  const email = bookingQuestionnaireLead({ email: 'primary@example.com', contactEmail: 'preferred@example.com', contactPref: 'Email' }, 2027, 'email-choice')
  assert.equal(email.email, 'primary@example.com')
  assert.equal(email.preferredEmail, 'preferred@example.com')
  assert.equal(email.preferredContact, 'email')
  const missing = bookingQuestionnaireLead({ email: 'primary@example.com', contactPref: '' }, 2027, 'no-choice')
  assert.equal(missing.preferredContact, '')
})

test('server forwards a valid submission with the secret only in its RPC call', async () => {
  process.env.CRM_SUPABASE_URL = 'https://crm.example.test'
  process.env.CRM_SUPABASE_SERVICE_ROLE_KEY = 'server-secret'
  const originalFetch = globalThis.fetch
  let called = false
  globalThis.fetch = async (url, options) => {
    called = true
    assert.equal(url, 'https://crm.example.test/rest/v1/rpc/import_website_inquiry')
    assert.equal((options?.headers as Record<string, string>).apikey, 'server-secret')
    const sent = JSON.parse(String(options?.body))
    assert.equal(sent.payload.weddingDate, 'Summer 2027')
    assert.equal(sent.request_ip_hash.length, 64)
    return new Response('"lead-id"', { status: 200 })
  }
  try {
    const { res, result } = response()
    await handler({ method: 'POST', headers: { origin: 'https://rustic.example.test', host: 'rustic.example.test', 'x-forwarded-for': '203.0.113.5' }, body: payload }, res)
    assert.equal(result.status, 200)
    assert.deepEqual(result.body, { accepted: true })
    assert.equal(called, true)
  } finally { globalThis.fetch = originalFetch }
})

test('server rejects a cross-origin or malformed submission before reaching the CRM', async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = async () => { throw new Error('CRM must not be called') }
  try {
    const cross = response()
    await handler({ method: 'POST', headers: { origin: 'https://other.example.test', host: 'rustic.example.test' }, body: payload }, cross.res)
    assert.equal(cross.result.status, 403)
    const invalid = response()
    await handler({ method: 'POST', headers: { origin: 'https://rustic.example.test', host: 'rustic.example.test' }, body: { ...payload, email: 123 } }, invalid.res)
    assert.equal(invalid.result.status, 400)
  } finally { globalThis.fetch = originalFetch }
})
