'use client'

import { FormEvent, useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [charCount, setCharCount] = useState(0)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = Object.fromEntries(fd.entries()) as Record<string, string>
    if (!data.name || !data.email) { alert('Please fill in name and email.'); return }
    setStatus('sending')
    try {
      await fetch('https://formsubmit.co/ajax/info@atlantisclinic.ae', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name, email: data.email,
          phone: data.phone || 'Not provided',
          best_time: data.best_time || 'Any time',
          message: data.needs || 'No message',
          _subject: 'New inquiry from ' + data.name,
        }),
      })
      setStatus('sent')
      form.reset()
      setCharCount(0)
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      alert('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <section className="bg-sepia py-20" id="contact">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        <div className="bg-white rounded-[24px] grid grid-cols-2 md:grid-cols-1 overflow-hidden min-h-[600px]">

          <div className="p-[52px_48px] flex flex-col gap-0">
            <h2 className="font-heading text-[2rem] font-extrabold text-ink mb-2">
              <span className="text-accent">Contact</span> Us
            </h2>
            <p className="text-[15px] text-muted mb-8">provide a brief summary of your needs and we&apos;ll support you</p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ct-name" className="text-sm font-semibold text-ink">Name</label>
                  <input
                    id="ct-name"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                    className="px-4 py-3 border-[1.5px] border-stroke rounded-[10px] text-[15px] text-ink bg-white outline-none font-[inherit] transition-colors focus:border-brown"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ct-email" className="text-sm font-semibold text-ink">Email</label>
                  <input
                    id="ct-email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    className="px-4 py-3 border-[1.5px] border-stroke rounded-[10px] text-[15px] text-ink bg-white outline-none font-[inherit] transition-colors focus:border-brown"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ct-phone" className="text-sm font-semibold text-ink">Phone</label>
                  <input
                    id="ct-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone"
                    className="px-4 py-3 border-[1.5px] border-stroke rounded-[10px] text-[15px] text-ink bg-white outline-none font-[inherit] transition-colors focus:border-brown"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ct-time" className="text-sm font-semibold text-ink">Best time to reach you</label>
                  <select
                    id="ct-time"
                    name="best_time"
                    defaultValue="any"
                    className="select-styled px-4 py-3 border-[1.5px] border-stroke rounded-[10px] text-[15px] text-ink bg-white outline-none font-[inherit] transition-colors focus:border-brown"
                  >
                    <option value="any">Any time</option>
                    <option value="morning">Morning (9am–12pm)</option>
                    <option value="afternoon">Afternoon (12pm–5pm)</option>
                    <option value="evening">Evening (5pm–9pm)</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ct-needs" className="text-sm font-semibold text-ink">About your needs</label>
                <textarea
                  id="ct-needs"
                  name="needs"
                  placeholder="Tell us what you need (optional)"
                  rows={4}
                  maxLength={500}
                  onChange={e => setCharCount(e.target.value.length)}
                  className="px-4 py-3 border-[1.5px] border-stroke rounded-[10px] text-[15px] text-ink bg-white outline-none font-[inherit] transition-colors focus:border-brown resize-y min-h-[110px]"
                />
                <span className="text-[13px] text-muted text-right">{charCount}/500</span>
              </div>
              <button
                type="submit"
                className={`btn-pill self-start mt-1${status === 'sent' ? ' bg-[#2D8B4E]' : ''}`}
                disabled={status === 'sending'}
              >
                <span>{status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          <div className="flex flex-col border-l border-stroke">
            <div className="flex-1 relative min-h-[360px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d55.2630387!3d25.2319362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEzJzU1LjAiTiA1NcKwMTUnNDYuOSJF!5e0!3m2!1sen!2sae!4v1700000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atlantis Clinic Location"
                className="w-full h-full border-0 block"
              />
              <a
                href="https://maps.app.goo.gl/xyBBtZf3sFhwu11RA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 flex items-center gap-2 bg-white px-[14px] py-2 rounded-full text-sm font-medium text-ink no-underline shadow-md z-10 hover:shadow-lg"
              >
                <span>View on Google Maps</span>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
            <div className="px-7 py-6 flex flex-col gap-[14px] border-t border-stroke">
              <div className="flex items-center gap-3 text-[15px] text-ink">
                <span className="w-9 h-9 rounded-lg bg-coral/10 flex items-center justify-center shrink-0 text-coral">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <span>+971 502509511</span>
              </div>
              <div className="flex items-center gap-3 text-[15px] text-ink">
                <span className="w-9 h-9 rounded-lg bg-coral/10 flex items-center justify-center shrink-0 text-coral">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                </span>
                <span>ana.javelidze@atlantisgeo.ae</span>
              </div>
              <div className="flex items-center gap-3 text-[15px] text-ink">
                <span className="w-9 h-9 rounded-lg bg-coral/10 flex items-center justify-center shrink-0 text-coral">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </span>
                <span>V008 Jumeirah 1, Dubai</span>
              </div>
              <div className="flex items-center gap-3 text-[15px] text-ink">
                <span className="w-9 h-9 rounded-lg bg-coral/10 flex items-center justify-center shrink-0 text-coral">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
                <span>Mon - Friday, 10:00 - 18:00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
