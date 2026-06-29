import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { skills } from '../../data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        tag="Skills"
        title="Technical Arsenal"
        subtitle="Tools and technologies I wield to build games and interactive experiences."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-6 rounded-2xl cursor-default transition-shadow"
            style={{
              background: '#141B2D',
              border: '1px solid rgba(79,140,255,0.1)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'rgba(79,140,255,0.1)' }}
              >
                {skill.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-sm">{skill.category}</h3>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    background: 'rgba(79,140,255,0.07)',
                    border: '1px solid rgba(79,140,255,0.15)',
                    color: '#B8C2D9',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79,140,255,0.18)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = 'rgba(79,140,255,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(79,140,255,0.07)'
                    e.currentTarget.style.color = '#B8C2D9'
                    e.currentTarget.style.borderColor = 'rgba(79,140,255,0.15)'
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
