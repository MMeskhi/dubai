'use client'

import { FormEvent, useState } from 'react'

export default function ContactPageForm() {
  const [charCount, setCharCount] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const d = Object.fromEntries(fd.entries()) as Record<string, string>

    if (!d.name || !d.email) {
      alert('Please fill in all required fields.')
      return
    }

    setStatus('sending')
    try {
      await fetch('https://formsubmit.co/ajax/info@atlantisclinic.ae', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: d.name,
          email: d.email,
          phone: d.phone || 'Not provided',
          time: d.time || 'Any time',
          needs: d.needs || 'No details',
          _subject: 'New contact from ' + d.name,
        }),
      })
      setStatus('sent')
      form.reset()
      setCharCount(0)
      setTimeout(() => setStatus('idle'), 2500)
    } catch {
      alert('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <form className="contact-page__form" onSubmit={handleSubmit}>
      <div className="contact-page__form-row">
        <div className="contact-page__field">
          <label className="contact-page__label" htmlFor="cp-name">Name</label>
          <input className="contact-page__input" type="text" id="cp-name" name="name" placeholder="Enter name" required />
        </div>
        <div className="contact-page__field">
          <label className="contact-page__label" htmlFor="cp-email">Email</label>
          <input className="contact-page__input" type="email" id="cp-email" name="email" placeholder="Enter email" required />
        </div>
      </div>

      <div className="contact-page__form-row">
        <div className="contact-page__field">
          <label className="contact-page__label" htmlFor="cp-phone">Phone</label>
          <input className="contact-page__input" type="tel" id="cp-phone" name="phone" placeholder="Enter phone" />
        </div>
        <div className="contact-page__field">
          <label className="contact-page__label" htmlFor="cp-time">Best time to reach you</label>
          <select className="contact-page__select" id="cp-time" name="time">
            <option value="anytime">Any time</option>
            <option value="morning">Morning (9:00 - 12:00)</option>
            <option value="afternoon">Afternoon (12:00 - 15:00)</option>
            <option value="evening">Evening (15:00 - 18:00)</option>
          </select>
        </div>
      </div>

      <div className="contact-page__field">
        <label className="contact-page__label" htmlFor="cp-needs">About your needs</label>
        <textarea
          className="contact-page__textarea"
          id="cp-needs"
          name="needs"
          placeholder="Tell us what you need (optional)"
          maxLength={500}
          onChange={e => setCharCount(e.target.value.length)}
        />
        <span className="contact-page__char-count"><span>{charCount}</span>/500</span>
      </div>

      <div className="contact-page__actions">
        <button
          type="submit"
          className="contact-page__submit"
          disabled={status === 'sending'}
          style={status === 'sent' ? { background: '#2D8B4E' } : undefined}
        >
          <span>{status === 'sent' ? 'Message Sent!' : status === 'sending' ? 'Sending...' : 'Send Message'}</span>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
        </button>
        <label className="contact-page__terms">
          <input type="checkbox" name="terms" required />
          <span>I agree to the terms &amp; conditions</span>
        </label>
      </div>
    </form>
  )
}
