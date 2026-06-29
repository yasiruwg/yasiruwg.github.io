import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{
            background: 'rgba(79,140,255,0.12)',
            border: '1px solid rgba(79,140,255,0.25)',
            color: '#4F8CFF',
          }}
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg max-w-2xl mx-auto"
          style={{ color: '#B8C2D9' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
