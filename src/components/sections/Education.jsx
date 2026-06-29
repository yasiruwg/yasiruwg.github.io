import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import { education } from '../../data'

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        tag="Education"
        title="Academic Background"
        subtitle="The foundation behind the craft."
      />

      <div className="flex justify-center">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="max-w-lg w-full p-8 rounded-2xl text-center"
            style={{
              background: '#141B2D',
              border: '1px solid rgba(79,140,255,0.12)',
            }}
          >
            {/* Logo / Icon */}
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 overflow-hidden"
              style={{ background: 'rgba(79,140,255,0.08)', border: '1px solid rgba(79,140,255,0.12)' }}
            >
              {edu.logo ? (
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-3xl">{edu.icon}</span>
              )}
            </div>

            {/* Degree */}
            <h3 className="font-display font-bold text-white text-xl mb-1">{edu.degree}</h3>

            {/* Field */}
            <p className="font-medium mb-3" style={{ color: '#4F8CFF' }}>
              {edu.field}
            </p>

            {/* Divider */}
            <div
              className="w-12 h-px mx-auto mb-3"
              style={{ background: 'rgba(79,140,255,0.3)' }}
            />

            {/* Institution */}
            <p className="text-sm" style={{ color: '#B8C2D9' }}>
              {edu.institution}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
