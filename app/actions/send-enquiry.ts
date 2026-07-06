'use server'

import { Resend } from 'resend'
import { siteConfig } from '@/lib/site-config'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

/** Basic email shape check (email is optional, so only validated when present). */
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export async function sendEnquiry(
  _prevState: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = (formData.get('name') as string | null)?.trim() ?? ''
  const email = (formData.get('email') as string | null)?.trim() ?? ''
  const phone = (formData.get('phone') as string | null)?.trim() ?? ''
  const requirements = (formData.get('requirements') as string | null)?.trim() ?? ''

  // Server-side validation — Name, Phone & Requirements are mandatory; Email optional.
  if (!name || !phone || !requirements) {
    return {
      status: 'error',
      message: 'Please fill in your name, phone number and requirements.',
    }
  }

  if (email && !isValidEmail(email)) {
    return {
      status: 'error',
      message: 'Please enter a valid email address, or leave it blank.',
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY is not set — cannot send enquiry email.')
    return {
      status: 'error',
      message: 'Sorry, we could not send your enquiry right now. Please call or WhatsApp us instead.',
    }
  }

  try {
    const resend = new Resend(apiKey)

    // Once a domain is verified at resend.com/domains, set RESEND_FROM_EMAIL
    // (e.g. "enquiry@bajrangplywood.com") to deliver to any inbox.
    // Until then we fall back to Resend's shared test address, which can only
    // send to the Resend account owner's own email address.
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    const { error } = await resend.emails.send({
      from: `${siteConfig.brandName} Website <${fromEmail}>`,
      to: [siteConfig.enquiryEmail],
      replyTo: email || undefined,
      subject: `New Enquiry from ${name} — ${siteConfig.brandName}`,
      text: [
        'New Quick Enquiry submitted from the website:',
        '',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || 'Not provided'}`,
        '',
        'Requirements:',
        requirements,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New Quick Enquiry</h2>
          <p style="margin: 0 0 4px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 4px;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p style="margin: 0 0 4px;"><strong>Email:</strong> ${email ? escapeHtml(email) : 'Not provided'}</p>
          <p style="margin: 16px 0 4px;"><strong>Requirements:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(requirements)}</p>
        </div>
      `,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return {
        status: 'error',
        message: 'Sorry, something went wrong sending your enquiry. Please try again or contact us directly.',
      }
    }

    return {
      status: 'success',
      message: 'Thank you! Your enquiry has been sent. We will get back to you shortly.',
    }
  } catch (err) {
    console.log('[v0] sendEnquiry exception:', err)
    return {
      status: 'error',
      message: 'Sorry, something went wrong sending your enquiry. Please try again or contact us directly.',
    }
  }
}

/** Escapes HTML special characters to keep the email body safe. */
function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
