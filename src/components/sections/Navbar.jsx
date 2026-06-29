import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '../../data'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = useScrollProgress()
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-[60] origin-left"
        style={{
          scaleX: progress / 100,
          background: 'linear-gradient(90deg, #4F8CFF, #00E5FF)',
          width: '100%',
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 backdrop-blur-xl'
            : 'py-5'
        }`}
        style={{
          background: scrolled ? 'rgba(11,15,25,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(79,140,255,0.1)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-display font-bold text-lg tracking-tight cursor-pointer"
          >
            <span className="gradient-text">YW</span>
            <span className="text-white opacity-60 text-sm font-normal ml-2 hidden sm:inline">Portfolio</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#B8C2D9] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md"
                      style={{ background: 'rgba(79,140,255,0.15)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  {link.label}
                </motion.button>
              )
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Mobile menu btn */}
            <motion.button
              onClick={() => setMobileOpen((p) => !p)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg text-[#B8C2D9] hover:text-white transition-colors cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.05)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 md:hidden px-4 py-4"
            style={{
              background: 'rgba(11,15,25,0.97)',
              borderBottom: '1px solid rgba(79,140,255,0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium text-[#B8C2D9] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
