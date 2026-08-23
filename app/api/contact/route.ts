import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const message = body.message?.trim() ?? ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: 'All three fields are required.' },
      { status: 400 }
    )
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json(
      { ok: false, error: 'Contact form is not configured.' },
      { status: 500 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    // Resend's shared test sender - works with no domain setup. Swap for
    // an address on a verified domain (https://resend.com/domains) once
    // one's set up, e.g. 'Portfolio <contact@brentsmith.dev>'.
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: siteMetadata.email,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ ok: false, error: 'Failed to send message.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
