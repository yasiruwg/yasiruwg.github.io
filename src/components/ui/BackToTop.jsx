import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
            boxShadow: '0 4px 20px rgba(79,140,255,0.4)',
          }}
          aria-label="Back to top"
        >
          <HiArrowUp size={18} color="#fff" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
