'use client'

import { FormEvent, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  'focus:border-primary-500 focus:ring-primary-500 bg-forest-bg-light dark:bg-forest-bg-dark block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 dark:border-gray-700 dark:text-gray-100'

const labelClass =
  'text-forest-text-light dark:text-forest-text-dark mb-1 block text-sm font-medium'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error')
      setError('Please fill out all three fields.')
      return
    }
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error')
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      })
      const data = await response.json()

      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
      setError('Something went wrong sending your message.')
    }
  }

  if (status === 'success') {
    return (
      <p
        role="status"
        className="text-primary-600 dark:text-primary-400 mx-auto w-full max-w-md text-base font-medium"
      >
        Thanks! I'll get back to you soon.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex w-full max-w-md flex-col gap-4 text-left"
    >
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error} You can also{' '}
          <a href={`mailto:${siteMetadata.email}`} className="underline">
            email me directly
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 rounded-md px-4 py-2 text-sm font-medium text-white focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
