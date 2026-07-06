'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { sendEnquiry, type EnquiryState } from '@/app/actions/send-enquiry'

const initialState: EnquiryState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-accent transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending…' : 'Send Enquiry'}
    </button>
  )
}

export function QuickEnquiryForm() {
  const [state, formAction] = useActionState(sendEnquiry, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  // Reset the fields after a successful submission.
  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <form ref={formRef} action={formAction} className="space-y-4" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          aria-label="Your Name"
          placeholder="Your Name *"
          className="px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          name="email"
          aria-label="Your Email (optional)"
          placeholder="Your Email (optional)"
          className="px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <input
        type="tel"
        name="phone"
        required
        aria-label="Phone Number"
        placeholder="Phone Number *"
        className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <textarea
        name="requirements"
        required
        aria-label="Your Requirements"
        placeholder="Your Requirements *"
        rows={4}
        className="w-full px-4 py-3 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {state.status !== 'idle' && (
        <div
          role="status"
          className={`flex items-start gap-2 rounded px-4 py-3 text-sm ${
            state.status === 'success'
              ? 'bg-primary/10 text-primary'
              : 'bg-destructive/10 text-destructive'
          }`}
        >
          {state.status === 'success' ? (
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
          )}
          <span>{state.message}</span>
        </div>
      )}

      <SubmitButton />
      <p className="text-xs text-muted-foreground text-center">
        Fields marked with <span className="text-primary">*</span> are required.
      </p>
    </form>
  )
}
