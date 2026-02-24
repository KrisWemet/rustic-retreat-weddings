import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { paymentAmount, bookingId } = await req.json()

    if (!paymentAmount || !bookingId) {
      throw new Error('paymentAmount and bookingId are required')
    }

    const SQUARE_ACCESS_TOKEN = Deno.env.get('SQUARE_ACCESS_TOKEN')
    
    if (!SQUARE_ACCESS_TOKEN) {
      throw new Error('SQUARE_ACCESS_TOKEN is not configured')
    }

    const SQUARE_LOCATION_ID = Deno.env.get('SQUARE_LOCATION_ID')

    const idempotencyKey = crypto.randomUUID()
    
    // Prepare Square API Quick Pay request
    const squarePayload: any = {
      idempotency_key: idempotencyKey,
      quick_pay: {
        name: `Payment for Booking ${bookingId}`,
        price_money: {
          amount: Math.round(Number(paymentAmount) * 100), // Convert dollars to cents
          currency: 'CAD', // Defaulting to CAD for Rustic Retreat in Alberta
        },
      }
    }

    if (SQUARE_LOCATION_ID) {
      squarePayload.quick_pay.location_id = SQUARE_LOCATION_ID
    }

    const response = await fetch('https://connect.squareup.com/v2/online-checkout/payment-links', {
      method: 'POST',
      headers: {
        'Square-Version': '2024-01-18',
        'Authorization': `Bearer ${SQUARE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(squarePayload),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Square API error response:', data)
      throw new Error(`Square API Error: ${data?.errors?.[0]?.detail || 'Unknown error'}`)
    }

    return new Response(
      JSON.stringify({ url: data.payment_link.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Edge function error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
