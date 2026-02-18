import { NextRequest, NextResponse } from 'next/server'

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!APPS_SCRIPT_URL) {
      console.error('APPS_SCRIPT_URL is not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Forward to Google Apps Script
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Apps Script error:', text)
      return NextResponse.json({ error: 'Upstream error' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Submit error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
