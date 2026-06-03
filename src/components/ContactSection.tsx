'use client'

import { FormEvent, useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = Object.fromEntries(fd.entries()) as Record<string, string>

    if (!data.name || !data.email) {
      alert('Please fill in all required fields.')
      return
    }

    setStatus('sending')
    try {
      await fetch('https://formsubmit.co/ajax/info@atlantisclinic.ae', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          service: data.service || 'Not specified',
          message: data.message || 'No message',
          _subject: 'New inquiry from ' + data.name,
        }),
      })
      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 2500)
    } catch {
      alert('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  const btnText = status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'
  const btnStyle = status === 'sent' ? { background: '#2D8B4E' } : undefined

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header animate-on-scroll">
          <div className="section-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            <span>Contact</span> <span className="text-accent">Us</span>
          </h2>
          <p className="section-description">Ready to start your journey? Reach out to us today.</p>
        </div>

        <div className="contact__grid">
          <form className="contact__form animate-on-scroll" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="c-name">Full Name</label>
              <input type="text" id="c-name" name="name" placeholder="Your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="c-email">Email Address</label>
              <input type="email" id="c-email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="c-phone">Phone Number</label>
              <input type="tel" id="c-phone" name="phone" placeholder="+971 XX XXX XXXX" />
            </div>
            <div className="form-group">
              <label htmlFor="c-service">Service Interested In</label>
              <select id="c-service" name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="general">General Dentistry</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="implants">Dental Implants</option>
                <option value="aesthetics">Facial Aesthetics</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" name="message" rows={4} placeholder="Tell us how we can help you..." />
            </div>
            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === 'sending'}
              style={btnStyle}
            >
              {btnText}
            </button>
          </form>

          <div className="contact__info animate-on-scroll">
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>58b Jumeira St - Jumeirah<br />Jumeirah 1 - Dubai, UAE</p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+971 4 547 9754<br />+971 54 204 0220</p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>info@atlantisclinic.ae</p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon – Sun: 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
