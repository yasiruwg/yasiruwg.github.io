import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { socials } from '../../data'

const socialLinks = [
  { icon: FiGithub, href: socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${socials.email}`, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 px-4 sm:px-6 lg:px-8"
      style={{
        borderTop: '1px solid rgba(79,140,255,0.1)',
        background: 'rgba(11,15,25,0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <span className="font-display font-bold gradient-text text-lg">Yasiru Wijenayake</span>
          <p className="text-xs mt-0.5" style={{ color: '#B8C2D960' }}>
            Unity Game Developer · Software Engineer
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(79,140,255,0.08)',
                border: '1px solid rgba(79,140,255,0.15)',
                color: '#B8C2D9',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4F8CFF'
                e.currentTarget.style.borderColor = 'rgba(79,140,255,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B8C2D9'
                e.currentTarget.style.borderColor = 'rgba(79,140,255,0.15)'
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: '#B8C2D960' }}>
          © {year} Yasiru Wijenayake. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
