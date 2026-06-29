import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiSmartphone, FiMonitor } from 'react-icons/fi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'

const highlights = [
  { icon: FiCpu, label: 'Unity & C#', desc: 'Deep expertise in Unity engine and C# systems architecture' },
  { icon: FiSmartphone, label: 'Mobile Games', desc: 'Shipped commercial games played by real audiences' },
  { icon: FiMonitor, label: 'Live Broadcasts', desc: 'Real-time systems powering national television broadcasts' },
  { icon: FiCode, label: 'HTML5 Games', desc: '60+ games built for web portals with PixiJS & JavaScript' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        tag="About Me"
        title="Crafting Interactive Worlds"
        subtitle="From mobile arcades to live national TV — I build experiences that engage."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#B8C2D9' }}>
            I'm a <span className="text-white font-semibold">Software Engineer and Unity Game Developer</span> with
            over 6 years of professional experience building commercial games, interactive tools, and
            real-time visualization systems.
          </p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#B8C2D9' }}>
            At <span className="text-white font-semibold">IMI Games</span>, I've shipped 60+ HTML5 hyper casual
            games, built branded advergames, and engineered{' '}
            <span className="text-white font-semibold">real-time Unity visualization systems</span> that powered
            national TV broadcasts — live results for the Hiru Election and weekly live scoring for Hiru Star.
          </p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#B8C2D9' }}>
            Before that, at <span className="text-white font-semibold">Arimac</span>, I built HTML5 web games,
            collaborated with designers and artists to craft polished experiences, and grew from intern to
            full-time engineer through self-driven learning and real-world delivery.
          </p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#B8C2D9' }}>
            I'm passionate about{' '}
            <span className="text-white font-semibold">gameplay programming, real-time systems,</span> and
            the intersection of interactive media and live entertainment. I believe great games are
            built from precise engineering, not just creative intuition.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 pt-2">
            {[
              { n: '6+', l: 'Years' },
              { n: '60+', l: 'Games' },
              { n: '2', l: 'Studios' },
            ].map(({ n, l }) => (
              <div key={l}>
                <div className="text-2xl font-bold font-display gradient-text">{n}</div>
                <div className="text-xs font-medium uppercase tracking-wide" style={{ color: '#B8C2D9' }}>{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-xl cursor-default"
              style={{
                background: '#141B2D',
                border: '1px solid rgba(79,140,255,0.12)',
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: 'rgba(79,140,255,0.12)' }}
              >
                <Icon size={20} color="#4F8CFF" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">{label}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#B8C2D9' }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
