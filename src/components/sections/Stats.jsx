import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { stats } from '../../data'

function AnimatedCounter({ value, suffix, running }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!running) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = value / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [running, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section
      id="stats"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(79,140,255,0.06) 0%, rgba(123,97,255,0.06) 100%)',
        borderTop: '1px solid rgba(79,140,255,0.1)',
        borderBottom: '1px solid rgba(79,140,255,0.1)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(79,140,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group"
            >
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-black font-display mb-2"
                style={{
                  background: 'linear-gradient(135deg, #4F8CFF, #00E5FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} running={inView} />
              </div>
              <div className="text-sm font-medium uppercase tracking-wider" style={{ color: '#B8C2D9' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
