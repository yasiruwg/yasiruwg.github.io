import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { socials } from '../../data'

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: socials.email,
    href: `mailto:${socials.email}`,
    color: '#4F8CFF',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/yasiru-lakmal-5a3160197',
    href: socials.linkedin,
    color: '#7B61FF',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/yasiruwg',
    href: socials.github,
    color: '#00E5FF',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: socials.location,
    href: null,
    color: '#4F8CFF',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Opens default mail client with pre-filled content
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    const body = encodeURIComponent(
      `Hi Yasiru,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest,\n${form.name}`
    )
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setTimeout(() => setSent(false), 4000)
    }, 800)
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        tag="Contact"
        title="Let's Build Together"
        subtitle="Open to full-time roles, freelance projects, and interesting collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed" style={{ color: '#B8C2D9' }}>
            Whether you're a studio looking for a Unity developer, an agency needing HTML5 game expertise,
            or have an interesting real-time project — I'd love to hear from you.
          </p>

          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                    style={{
                      background: '#141B2D',
                      border: '1px solid rgba(79,140,255,0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${item.color}44`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(79,140,255,0.1)'
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}18` }}
                    >
                      <item.icon size={18} color={item.color} />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: item.color }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-white group-hover:text-[#4F8CFF] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: '#141B2D',
                      border: '1px solid rgba(79,140,255,0.1)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}18` }}
                    >
                      <item.icon size={18} color={item.color} />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: item.color }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-white">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-4 p-6 sm:p-8 rounded-2xl"
          style={{
            background: '#141B2D',
            border: '1px solid rgba(79,140,255,0.1)',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1.5 uppercase tracking-wide" style={{ color: '#B8C2D9' }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#B8C2D940] outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(79,140,255,0.15)',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#4F8CFF')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(79,140,255,0.15)')}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5 uppercase tracking-wide" style={{ color: '#B8C2D9' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#B8C2D940] outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(79,140,255,0.15)',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#4F8CFF')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(79,140,255,0.15)')}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5 uppercase tracking-wide" style={{ color: '#B8C2D9' }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#B8C2D940] outline-none transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(79,140,255,0.15)',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#4F8CFF')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(79,140,255,0.15)')}
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1.5 uppercase tracking-wide" style={{ color: '#B8C2D9' }}>
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[#B8C2D940] outline-none transition-all duration-200 resize-none"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(79,140,255,0.15)',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#4F8CFF')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(79,140,255,0.15)')}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading || sent}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
            style={{
              background: sent
                ? 'linear-gradient(135deg, #00C853, #00E5FF)'
                : 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
              boxShadow: '0 4px 20px rgba(79,140,255,0.3)',
            }}
          >
            {sent ? (
              <><FiCheck size={16} /> Message Sent!</>
            ) : loading ? (
              <span className="opacity-70">Opening mail client...</span>
            ) : (
              <><FiSend size={16} /> Send Message</>
            )}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
