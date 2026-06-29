import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary: 'text-white',
    outline: 'border text-white hover:text-white',
    ghost: 'text-[#B8C2D9] hover:text-white',
  }

  const styles = {
    primary: {
      background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
      boxShadow: '0 4px 20px rgba(79,140,255,0.3)',
    },
    outline: {
      border: '1px solid rgba(79,140,255,0.4)',
      background: 'transparent',
    },
    ghost: { background: 'transparent' },
  }

  const Comp = motion.button

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${variants[variant]} ${className}`}
        style={styles[variant]}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <Comp
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      style={styles[variant]}
      {...props}
    >
      {children}
    </Comp>
  )
}
