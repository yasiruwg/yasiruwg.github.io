import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'
import Button from '../ui/Button'

// ── Particle canvas background ─────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    const count = Math.min(80, Math.floor(window.innerWidth / 14))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.6 ? '#4F8CFF' : Math.random() > 0.5 ? '#7B61FF' : '#00E5FF',
      })
    }

    // Floating geometric shapes
    const shapes = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 30 + Math.random() * 60,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.004,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      type: i % 3, // 0=diamond, 1=hexagon, 2=triangle
      alpha: 0.04 + Math.random() * 0.04,
      color: ['#4F8CFF', '#7B61FF', '#00E5FF'][i % 3],
    }))

    const drawShape = (shape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.strokeStyle = shape.color
      ctx.globalAlpha = shape.alpha
      ctx.lineWidth = 1.5
      ctx.beginPath()
      if (shape.type === 0) {
        // Diamond
        ctx.moveTo(0, -shape.size)
        ctx.lineTo(shape.size * 0.6, 0)
        ctx.lineTo(0, shape.size)
        ctx.lineTo(-shape.size * 0.6, 0)
        ctx.closePath()
      } else if (shape.type === 1) {
        // Hexagon
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i
          i === 0
            ? ctx.moveTo(Math.cos(a) * shape.size, Math.sin(a) * shape.size)
            : ctx.lineTo(Math.cos(a) * shape.size, Math.sin(a) * shape.size)
        }
        ctx.closePath()
      } else {
        // Triangle
        ctx.moveTo(0, -shape.size)
        ctx.lineTo(shape.size * 0.87, shape.size * 0.5)
        ctx.lineTo(-shape.size * 0.87, shape.size * 0.5)
        ctx.closePath()
      }
      ctx.stroke()
      ctx.restore()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(79,140,255,${0.04 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })

      // Shapes
      shapes.forEach((s) => {
        drawShape(s)
        s.x += s.vx
        s.y += s.vy
        s.rotation += s.rotationSpeed
        if (s.x < -100) s.x = canvas.width + 100
        if (s.x > canvas.width + 100) s.x = -100
        if (s.y < -100) s.y = canvas.height + 100
        if (s.y > canvas.height + 100) s.y = -100
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────
export default function Hero() {
  const specialties = [
    'Unity', 'C#', 'Mobile Games', 'Hyper Casual Games',
    'HTML5 Games', 'Gameplay Programming', 'Real-time Systems',
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Animated canvas BG */}
      <ParticleCanvas />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(79,140,255,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            background: 'rgba(0,229,255,0.08)',
            border: '1px solid rgba(0,229,255,0.2)',
            color: '#00E5FF',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black tracking-tight text-white mb-4"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
        >
          Yasiru Wijenayake
        </motion.h1>

        {/* Sub-role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg font-medium mb-2"
          style={{ color: '#B8C2D9' }}
        >
          Software Engineer · 6+ Years Professional Experience
        </motion.p>

        {/* Specializing in */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 mb-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#4F8CFF' }}>
            Specializing in
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {specialties.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.07 }}
                className="px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(79,140,255,0.08)',
                  border: '1px solid rgba(79,140,255,0.2)',
                  color: '#B8C2D9',
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Button
            variant="primary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload size={16} />
            Download Resume
          </Button>
          <Button
            variant="outline"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button
            variant="ghost"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FiMail size={15} />
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#4F8CFF66' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ color: '#4F8CFF' }}
        >
          <HiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
