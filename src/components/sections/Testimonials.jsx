import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

// Placeholder testimonials — replace with real data when available
const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Lead Producer',
    company: 'Studio Name',
    avatar: 'AC',
    text: 'Yasiru delivered consistently polished games under tight deadlines. His ability to architect clean, maintainable Unity systems set a high standard for the whole team.',
    stars: 5,
    color: '#4F8CFF',
  },
  {
    name: 'Maria Santos',
    role: 'Art Director',
    company: 'Agency Name',
    avatar: 'MS',
    text: 'Working with Yasiru was seamless. He translated complex design specs into interactive experiences with minimal back-and-forth. Excellent communicator.',
    stars: 5,
    color: '#7B61FF',
  },
  {
    name: 'David Park',
    role: 'Technical Director',
    company: 'Company Name',
    avatar: 'DP',
    text: 'The real-time broadcast systems Yasiru built were mission-critical. They ran flawlessly during live national broadcasts with zero downtime. Outstanding engineering.',
    stars: 5,
    color: '#00E5FF',
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        tag="Testimonials"
        title="What People Say"
        subtitle="Feedback from colleagues and collaborators."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl flex flex-col gap-4"
            style={{
              background: '#141B2D',
              border: '1px solid rgba(79,140,255,0.1)',
            }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: t.stars }).map((_, si) => (
                <FiStar key={si} size={14} fill="#4F8CFF" color="#4F8CFF" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm leading-relaxed flex-1" style={{ color: '#B8C2D9' }}>
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
              >
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs" style={{ color: '#B8C2D9' }}>
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs mt-6" style={{ color: '#B8C2D960' }}>
        * Placeholder testimonials — real endorsements coming soon
      </p>
    </SectionWrapper>
  )
}
