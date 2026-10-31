import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

const MotionDiv = motion.div

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS send error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax Typography */}
      <MotionDiv
        style={{ y }}
        className="absolute inset-x-0 top-12 pointer-events-none z-0 flex justify-center"
      >
        <div className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap font-['Impact','Arial_Black',sans-serif]">
          Contact
        </div>
      </MotionDiv>

      {/* Front Red Card Container */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl md:rounded-tl-[3rem] shadow-2xl relative z-10"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-black/20 text-white border border-white/20 hover:bg-black/40 transition-colors"
            >
              DM on Instagram
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-black/20 text-white border border-white/20 hover:bg-black/40 transition-colors"
            >
              Email Directly
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left Inputs */}
            <div className="flex flex-col space-y-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                placeholder="First Name *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 focus:border-white focus:outline-none text-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 focus:border-white focus:outline-none text-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Email Address *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 focus:border-white focus:outline-none text-white transition-colors"
              />
            </div>

            {/* Right Message */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/70 focus:border-white focus:outline-none text-white transition-colors resize-none min-h-[140px] w-full"
              />
            </div>
          </div>

          {/* Bottom Controls & Notes */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-xs text-white/90">
              <input
                type="checkbox"
                required
                className="mt-0.5 rounded-xs accent-black"
              />
              <span>
                I agree to allow my contact details to be used to respond to this inquiry.
              </span>
            </label>

            {/* Response Time Note */}
            <p className="text-xs text-white/80">
              Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
            </p>

            {/* Urgent Inquiries Mailto Link */}
            <p className="text-xs text-white/80">
              For urgent inquiries, email me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline font-bold text-white hover:text-black transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
              .
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-3 border shadow-lg ${
                  status === 'sending'
                    ? 'bg-black/40 text-white/60 border-white/20 cursor-wait'
                    : status === 'success'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/20'
                      : status === 'error'
                        ? 'bg-red-950 text-white border-red-700'
                        : 'bg-black text-white border-black hover:bg-white hover:text-[#ff2a2a] group cursor-pointer active:scale-95'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'success' && 'Sent Successfully ✓'}
                {status === 'error' && 'Failed — Try Again'}
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 stroke-current fill-none group-hover:translate-x-1 transition-transform"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
