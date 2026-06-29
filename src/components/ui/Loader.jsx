import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: '#0B0F19' }}
    >
      {/* Logo mark */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="font-display font-black text-5xl gradient-text mb-8 select-none"
      >
        YW
      </motion.div>

      {/* Progress bar */}
      <div
        className="w-48 h-0.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(79,140,255,0.15)' }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="h-full rounded-full origin-left"
          style={{ background: 'linear-gradient(90deg, #4F8CFF, #00E5FF)' }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xs tracking-widest uppercase"
        style={{ color: '#B8C2D960' }}
      >
        Loading
      </motion.p>
    </motion.div>
  )
}
