import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'
import { experience } from '../../data'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        tag="Experience"
        title="Professional Journey"
        subtitle="Building real products used by real people — from indie hyper casual to national television."
      />

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-px hidden sm:block"
          style={{ background: 'linear-gradient(to bottom, #4F8CFF33, #7B61FF33, transparent)' }}
        />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative sm:pl-16"
            >
              {/* Timeline dot */}
              <div
                className="hidden sm:flex absolute left-4 top-6 w-5 h-5 rounded-full items-center justify-center -translate-x-1/2 z-10"
                style={{ background: '#0B0F19', border: `2px solid ${job.color}` }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: job.color }} />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 sm:p-8 rounded-2xl"
                style={{
                  background: '#141B2D',
                  border: '1px solid rgba(79,140,255,0.1)',
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{job.role}</h3>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-sm" style={{ color: job.color }}>
                        {job.company}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{
                          background: `${job.color}18`,
                          color: job.color,
                          border: `1px solid ${job.color}30`,
                        }}
                      >
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-sm font-medium shrink-0 px-3 py-1 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#B8C2D9',
                    }}
                  >
                    {job.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((h, hi) => (
                    <motion.li
                      key={hi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: hi * 0.05 }}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: '#B8C2D9' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ background: job.color }}
                      />
                      {h}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
