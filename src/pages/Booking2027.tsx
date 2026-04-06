import { useState } from 'react';
import SEO from "@/components/SEO";

const DARK    = '#1C2B1E';
const MID     = '#3A5C3E';
const SAGE    = '#EAF0EA';
const CREAM   = '#FDF8F2';
const GOLD    = '#8B6914';
const LINE    = '#C8D8C8';
const MUTED   = '#666666';
const SUBTLE  = '#999999';

const packages = [
  { label: '2-Day Weekday', price: '$5,000', value: '2-Day Weekday ($5,000)' },
  { label: '3-Day Weekend', price: '$6,500', value: '3-Day Weekend ($6,500)' },
  { label: '5-Day Weekend', price: '$7,500', value: '5-Day Weekend ($7,500)' },
];

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.1rem', display: 'flex', flexDirection: 'column' }}>
      <label style={{ fontSize: '0.72rem', fontWeight: 600, color: MID,
        letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.28rem',
        fontFamily: 'Georgia, serif', lineHeight: 1.4, flex: 1 }}>
        {label}
        {hint && <span style={{ fontWeight: 400, fontStyle: 'italic', textTransform: 'none',
          color: SUBTLE, letterSpacing: 0, fontSize: '0.7rem', marginLeft: '0.4rem' }}>{hint}</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: '100%', background: '#f8fbf8', border: 'none',
  borderBottom: `1.5px solid ${LINE}`, borderRadius: 0,
  padding: '0.38rem 0.1rem', fontFamily: 'Georgia, serif',
  fontSize: '0.95rem', color: '#222', outline: 'none',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical' as const, minHeight: '5rem',
  padding: '0.4rem 0.2rem', lineHeight: 1.6,
};

function TextInput({ name, value, onChange, type = 'text' }: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string }) {
  return <input type={type} name={name} value={value} onChange={onChange} style={inputStyle} />;
}

function TextArea({ name, value, onChange }: { name: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return <textarea name={name} value={value} onChange={onChange} style={textareaStyle} />;
}

function CheckGroup({ label, hint, name, options, value, onChange }: { label: string; hint?: string; name: string; options: string[]; value: string; onChange: (name: string, value: string) => void }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: MID,
        letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem',
        fontFamily: 'Georgia, serif', lineHeight: 1.5 }}>
        {label}
        {hint && <span style={{ fontWeight: 400, fontStyle: 'italic', textTransform: 'none',
          color: SUBTLE, letterSpacing: 0, fontSize: '0.7rem', marginLeft: '0.4rem' }}>{hint}</span>}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.4rem' }}>
        {options.map(opt => (
          <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem',
            fontSize: '0.95rem', color: '#222', cursor: 'pointer', fontFamily: 'Georgia, serif' }}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(name, opt)}
              style={{ accentColor: MID, width: 14, height: 14, cursor: 'pointer' }}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: DARK, color: 'white', fontFamily: 'Georgia, serif',
      fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
      padding: '0.5rem 1rem 0.5rem 1.1rem', marginBottom: '1.1rem',
      borderLeft: `4px solid ${GOLD}` }}>
      {children}
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: SAGE, border: `1px solid ${LINE}`, borderRadius: 3,
      padding: '0.75rem 1rem', fontStyle: 'italic', fontSize: '0.85rem',
      color: MUTED, lineHeight: 1.65, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>
      {children}
    </div>
  );
}

function Grid({ cols = 2, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: '0 1.5rem', alignItems: 'end' }}>
      {children}
    </div>
  );
}

const initialState = {
  client1Name: '', client2Name: '', client1Phone: '', client2Phone: '',
  email: '', address: '', city: '', province: '', postal: '',
  contactPref: '', contactEmail: '', contactPhone: '',
  eventDate: '', backupDate: '', eventType: '', eventTypeOther: '',
  package: '', checkinDate: '', checkoutDate: '',
  guestCount: '', totalGuestCount: '', over80: '', over80Count: '', overnightGuests: '', tents: '', rvs: '',
  contact1Name: '', contact1Role: '', contact1Phone: '',
  contact2Name: '', contact2Role: '', contact2Phone: '',
  activities: '', activitiesDetail: '', drones: '', structures: '', structuresDetail: '',
  pets: '', dj: '', caterer: '', generator: '', powerOther: '',
  fireworks: '', fireworksBudget: '',
  heardAbout: '', vision: '', photoPermission: '', anythingElse: '',
};

export default function Booking2027() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheck = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setStatus('submitting');
    try {
      // Convert form state to FormData for Formspree
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        formData.append(key, form[key as keyof typeof form]);
      });

      const res = await fetch('https://formspree.io/f/xwvwajyy', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <SEO
          title="2027 Booking Form - Rustic Retreat Weddings"
          description="Complete your 2027 wedding booking questionnaire for Rustic Retreat."
          noindex={true}
        />
        <div style={{ minHeight: '100vh', background: '#e8e4dc', display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ background: CREAM, maxWidth: 520, width: '100%', textAlign: 'center',
            padding: '3rem 2.5rem', boxShadow: '0 8px 48px rgba(28,43,30,0.18)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌿</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: DARK,
              fontSize: '1.6rem', marginBottom: '0.8rem' }}>Thank you!</h2>
            <p style={{ fontFamily: 'Georgia, serif', color: MUTED, lineHeight: 1.7, fontSize: '0.95rem' }}>
              We've received your questionnaire and will prepare your contract shortly.
              We'll be in touch soon to confirm next steps.
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: MID,
              marginTop: '1.5rem', fontSize: '1rem' }}>We can't wait to celebrate with you!</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="2027 Booking Form - Rustic Retreat Weddings"
        description="Complete your 2027 wedding booking questionnaire for Rustic Retreat."
        noindex={true}
      />
      <div style={{ minHeight: '100vh', background: '#e8e4dc', padding: '2rem 1rem',
        fontFamily: 'Georgia, serif' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', background: CREAM,
          boxShadow: '0 8px 48px rgba(28,43,30,0.18)' }}>

          {/* HEADER */}
          <div style={{ background: DARK, padding: '2rem 2.5rem 0', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2rem',
              color: 'white', letterSpacing: '0.04em', lineHeight: 1.2 }}>
              RUSTIC RETREAT
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.88rem',
              color: GOLD, letterSpacing: '0.04em', marginTop: '0.3rem' }}>
              Rural Wedding &amp; Special Events Facility
            </div>
            <div style={{ height: 2, background: GOLD, marginTop: '1rem', marginBottom: '0.75rem' }} />
            <div style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: 'white',
              letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.88rem',
              paddingBottom: '1.4rem' }}>
              2027 Booking Questionnaire
            </div>
          </div>

          <div style={{ padding: '1.8rem 2.5rem 2rem' }}>
            <div style={{ background: SAGE, border: `1px solid ${LINE}`, borderLeft: `3px solid ${MID}`,
              borderRadius: 3, padding: '0.9rem 1.1rem', fontStyle: 'italic', fontSize: '0.88rem',
              color: MUTED, lineHeight: 1.65, marginBottom: '1.6rem' }}>
              Thank you for your interest in Rustic Retreat! Please complete this questionnaire so we
              can prepare your contract and confirm your booking details. Your dates are not confirmed
              until your contract is signed and the initial deposit has been received.
            </div>

            {/* 1. YOUR DETAILS */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>1 · Your Details</SectionHeader>
              <Grid>
                <Field label="Client 1 — Full Legal Name"><TextInput name="client1Name" value={form.client1Name} onChange={handleChange} /></Field>
                <Field label="Client 2 — Full Legal Name"><TextInput name="client2Name" value={form.client2Name} onChange={handleChange} /></Field>
                <Field label="Client 1 — Phone Number"><TextInput name="client1Phone" value={form.client1Phone} onChange={handleChange} type="tel" /></Field>
                <Field label="Client 2 — Phone Number"><TextInput name="client2Phone" value={form.client2Phone} onChange={handleChange} type="tel" /></Field>
              </Grid>
              <Field label="Primary Contact Email Address"><TextInput name="email" value={form.email} onChange={handleChange} type="email" /></Field>
              <Field label="Mailing Address (Street)"><TextInput name="address" value={form.address} onChange={handleChange} /></Field>
              <Grid cols={3}>
                <Field label="City"><TextInput name="city" value={form.city} onChange={handleChange} /></Field>
                <Field label="Province"><TextInput name="province" value={form.province} onChange={handleChange} /></Field>
                <Field label="Postal Code"><TextInput name="postal" value={form.postal} onChange={handleChange} /></Field>
              </Grid>
              <CheckGroup label="Preferred Contact Method" name="contactPref"
                options={['Text message', 'Email']} value={form.contactPref} onChange={handleCheck} />
              {form.contactPref === 'Text message' && (
                <Field label="Best Phone Number for Texts">
                  <TextInput name="contactPhone" value={form.contactPhone} onChange={handleChange} type="tel" />
                </Field>
              )}
              {form.contactPref === 'Email' && (
                <Field label="Best Email Address">
                  <TextInput name="contactEmail" value={form.contactEmail} onChange={handleChange} type="email" />
                </Field>
              )}
            </div>

            {/* 2. YOUR EVENT */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>2 · Your Event</SectionHeader>
              <Grid>
                <Field label="Wedding / Event Date" hint="DD/MM/YYYY"><TextInput name="eventDate" value={form.eventDate} onChange={handleChange} /></Field>
                <Field label="Second-choice Date" hint="optional — DD/MM/YYYY"><TextInput name="backupDate" value={form.backupDate} onChange={handleChange} /></Field>
              </Grid>
              <CheckGroup label="Event Type" name="eventType"
                options={['Weekend Wedding Celebration', 'Elopement', 'Other']}
                value={form.eventType} onChange={handleCheck} />
              <Field label="If other, please describe"><TextInput name="eventTypeOther" value={form.eventTypeOther} onChange={handleChange} /></Field>
            </div>

            {/* 3. PACKAGE */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>3 · Package &amp; Access</SectionHeader>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.6rem', marginBottom: '1.4rem' }}>
                {packages.map((pkg, i) => (
                  <div key={pkg.value}
                    onClick={() => handleCheck('package', pkg.value)}
                    style={{ background: form.package === pkg.value ? DARK : SAGE,
                      border: `2px solid ${form.package === pkg.value ? GOLD : LINE}`,
                      borderRadius: 4, padding: '0.75rem 1rem',
                      cursor: 'pointer', transition: 'all 0.15s',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      gridColumn: i === packages.length - 1 ? '1 / -1' : undefined }}>
                    <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '0.82rem',
                      color: form.package === pkg.value ? 'white' : DARK }}>
                      {pkg.label}
                    </span>
                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', fontWeight: 600,
                      color: form.package === pkg.value ? GOLD : MID }}>
                      {pkg.price}
                    </span>
                  </div>
                ))}
              </div>
              <Grid>
                <Field label="Check-In Date" hint="DD/MM/YYYY">
                  <input type="date" name="checkinDate" value={form.checkinDate} onChange={handleChange}
                    style={{ ...inputStyle, colorScheme: 'light' }} />
                </Field>
                <Field label="Check-Out Date" hint="DD/MM/YYYY">
                  <input type="date" name="checkoutDate" value={form.checkoutDate} onChange={handleChange}
                    style={{ ...inputStyle, colorScheme: 'light' }} />
                </Field>
              </Grid>
            </div>

            {/* 4. GUEST COUNTS */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>4 · Guest Counts</SectionHeader>
              <NoteBox>The venue accommodates up to 80 ceremony &amp; reception guests (hard cap 100). Overnight camping is included for up to 60 guests, 12 tents, and 8 RVs. Children under 2 do not count toward the guest total. Guests beyond the included allowances are warmly welcome — overage fees will apply and will be outlined in your contract.</NoteBox>
              <Field label="Estimated Ceremony & Reception Guest Count" hint="children under 2 do not count">
                <TextInput name="guestCount" value={form.guestCount} onChange={handleChange} />
              </Field>
              <Field label="Total Estimated Guest Count" hint="all guests on property including overnight campers">
                <TextInput name="totalGuestCount" value={form.totalGuestCount} onChange={handleChange} />
              </Field>
              <CheckGroup label="Are you expecting more than 80 ceremony/reception guests?" name="over80"
                options={['Yes', 'No — we expect 80 or under', 'Not sure yet']} value={form.over80} onChange={handleCheck} />
              {form.over80 === 'Yes' && (
                <Field label="Approximately how many guests total?">
                  <TextInput name="over80Count" value={form.over80Count} onChange={handleChange} />
                </Field>
              )}
              <Field label="Estimated Number of Overnight Camping Guests"><TextInput name="overnightGuests" value={form.overnightGuests} onChange={handleChange} /></Field>
              <Grid>
                <Field label="Estimated Number of Tents"><TextInput name="tents" value={form.tents} onChange={handleChange} /></Field>
                <Field label="Estimated Number of RVs on Property"><TextInput name="rvs" value={form.rvs} onChange={handleChange} /></Field>
              </Grid>
            </div>

            {/* 5. ON-SITE CONTACTS */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>5 · On-Site Contacts</SectionHeader>
              <NoteBox>Please designate two trusted people who will act as your on-site contacts on the day of your wedding. These are the people our team will reach out to — so you can stay fully present in your moment.</NoteBox>
              <Grid>
                <Field label="Contact 1 — Full Name"><TextInput name="contact1Name" value={form.contact1Name} onChange={handleChange} /></Field>
                <Field label="Relationship / Role" hint="e.g. MOH, Best Man, Parent"><TextInput name="contact1Role" value={form.contact1Role} onChange={handleChange} /></Field>
              </Grid>
              <Field label="Contact 1 — Phone Number"><TextInput name="contact1Phone" value={form.contact1Phone} onChange={handleChange} type="tel" /></Field>
              <div style={{ borderTop: `1px solid ${LINE}`, margin: '0.4rem 0 1.2rem' }} />
              <Grid>
                <Field label="Contact 2 — Full Name"><TextInput name="contact2Name" value={form.contact2Name} onChange={handleChange} /></Field>
                <Field label="Relationship / Role"><TextInput name="contact2Role" value={form.contact2Role} onChange={handleChange} /></Field>
              </Grid>
              <Field label="Contact 2 — Phone Number"><TextInput name="contact2Phone" value={form.contact2Phone} onChange={handleChange} type="tel" /></Field>
            </div>

            {/* 6. ACTIVITIES */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>6 · Activities &amp; Special Requests</SectionHeader>
              <CheckGroup label="Are you planning any special guest activities on the property?"
                hint="e.g. paintball, inflatables, axe throwing — all require advance Venue approval"
                name="activities" options={['Yes (describe below)', 'No', 'Not sure yet']}
                value={form.activities} onChange={handleCheck} />
              {form.activities === 'Yes (describe below)' && (
                <Field label="Describe activity, participants & vendors involved">
                  <TextInput name="activitiesDetail" value={form.activitiesDetail} onChange={handleChange} />
                </Field>
              )}
              <CheckGroup label="Will any vendors or guests be bringing drones / aerial photography equipment?"
                name="drones" options={['Yes', 'No', 'Not sure yet']}
                value={form.drones} onChange={handleCheck} />
              <CheckGroup label="Do you have any temporary structures to install?"
                hint="e.g. rental tent/canopy — all require Venue approval"
                name="structures" options={['Yes (describe below)', 'No', 'Not sure yet']}
                value={form.structures} onChange={handleCheck} />
              {form.structures === 'Yes (describe below)' && (
                <Field label="Approximate size and type">
                  <TextInput name="structuresDetail" value={form.structuresDetail} onChange={handleChange} />
                </Field>
              )}
              <CheckGroup label="Do you have pets attending?"
                hint="cabin stays only — $50 pet cleaning fee applies"
                name="pets" options={['Yes', 'No', 'Not sure yet']}
                value={form.pets} onChange={handleCheck} />
            </div>

            {/* 7. POWER & VENDORS */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>7 · Power &amp; Vendors</SectionHeader>
              <NoteBox>Rustic Retreat operates on solar power. All electrical requirements must be disclosed in advance. A Power Requirements Form will be sent approximately 3 months before your event.</NoteBox>
              <CheckGroup label="Are you hiring a DJ or live band?" name="dj"
                hint="Venue Bluetooth speakers &amp; microphones are available at no additional charge"
                options={['Yes — hiring a DJ', 'Yes — live band', 'No — using Venue speakers', 'Not sure yet']} value={form.dj} onChange={handleCheck} />
              <CheckGroup label="Are you hiring a caterer?" name="caterer"
                options={['Yes', 'No', 'Self-catered', 'Pot luck', 'Not sure yet']} value={form.caterer} onChange={handleCheck} />
              <CheckGroup label="Do you anticipate needing a generator?"
                hint="Venue-owned generators available as add-on — must be arranged in advance"
                name="generator" options={['Yes', 'No', 'Not sure yet']}
                value={form.generator} onChange={handleCheck} />
              <Field label="Other vendors or items requiring power?" hint="e.g. photo booth, neon sign, projector, coffee station">
                <TextInput name="powerOther" value={form.powerOther} onChange={handleChange} />
              </Field>
            </div>

            {/* 8. FIREWORKS */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>8 · Fireworks Interest</SectionHeader>
              <NoteBox>Fireworks displays are arranged exclusively through Rustic Retreat, subject to any active Fire Ban. Guest-supplied fireworks, sky lanterns, or pyrotechnics of any kind are strictly prohibited. This section is for interest only — no commitment required here.</NoteBox>
              <CheckGroup label="Are you interested in a private fireworks display?" name="fireworks"
                options={["Yes — I'm interested", 'No — not interested', 'Maybe — tell me more']}
                value={form.fireworks} onChange={handleCheck} />
              <Field label="Approximate budget" hint="optional — $100 ≈ 1 min of show time; $250 non-refundable service fee also applies">
                <TextInput name="fireworksBudget" value={form.fireworksBudget} onChange={handleChange} />
              </Field>
            </div>

            {/* 9. ABOUT YOU */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>9 · A Bit About You</SectionHeader>
              <p style={{ fontStyle: 'italic', color: SUBTLE, fontSize: '0.85rem', marginBottom: '0.9rem' }}>
                This section is entirely optional — just for us to get to know you a little before we connect!
              </p>
              <Field label="How did you hear about Rustic Retreat?">
                <TextInput name="heardAbout" value={form.heardAbout} onChange={handleChange} />
              </Field>
              <Field label="Tell us a little about your vision for your day" hint="share as much or as little as you like">
                <TextArea name="vision" value={form.vision} onChange={handleChange} />
              </Field>
              <CheckGroup label="Photo & Story Permission"
                hint="If you share photos with us after your event, do you give Rustic Retreat permission to share your love story and use your images on our website, in future advertising, and on social media?"
                name="photoPermission"
                options={['Yes — happy to share', 'No — prefer privacy', 'Not sure yet']}
                value={form.photoPermission} onChange={handleCheck} />
            </div>

            {/* 10. ANYTHING ELSE */}
            <div style={{ marginBottom: '1.6rem' }}>
              <SectionHeader>10 · Anything Else?</SectionHeader>
              <Field label="Any questions for us, or anything else you'd like us to know?">
                <TextArea name="anythingElse" value={form.anythingElse} onChange={handleChange} />
              </Field>
            </div>

            {/* SUBMIT */}
            {status === 'error' && (
              <div style={{ background: '#fff0f0', border: '1px solid #f0c0c0', borderRadius: 3,
                padding: '0.8rem 1rem', marginBottom: '1rem', color: '#900', fontStyle: 'italic',
                fontSize: '0.88rem' }}>
                Something went wrong sending your form. Please try again or email us directly at rusticretreatalberta@gmail.com.
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={status === 'submitting'}
              style={{ width: '100%', background: status === 'submitting' ? MID : DARK,
                color: 'white', border: 'none', padding: '0.95rem',
                fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1rem',
                letterSpacing: '0.06em', cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s' }}>
              {status === 'submitting' ? 'Sending…' : 'Submit Questionnaire →'}
            </button>
          </div>

          {/* CLOSING */}
          <div style={{ background: DARK, borderTop: `3px solid ${GOLD}`,
            padding: '1.4rem 2rem', textAlign: 'center' }}>
            <p style={{ color: '#B8CCB8', fontStyle: 'italic', fontSize: '0.88rem',
              lineHeight: 1.65, marginBottom: '0.4rem' }}>
              Once we receive your completed questionnaire, we will prepare your contract and reach out to confirm next steps.
            </p>
            <span style={{ fontStyle: 'italic', fontSize: '1rem', color: 'white' }}>
              We can't wait to celebrate with you!
            </span>
          </div>

          {/* FOOTER */}
          <div style={{ background: DARK, borderTop: `2px solid ${GOLD}`,
            padding: '0.7rem 2rem', textAlign: 'center' }}>
            <p style={{ fontStyle: 'italic', fontSize: '0.78rem', color: '#7A9A7A', letterSpacing: '0.04em' }}>
              Shannon Ouimet &nbsp;·&nbsp; rusticretreatalberta@gmail.com &nbsp;·&nbsp; (780) 210-6252
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
