import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeading from '../ui/SectionHeading'
import Tag from '../ui/Tag'
import { projects } from '../../data'

const categories = ['All', 'Unity', 'HTML5']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        tag="Projects"
        title="Featured Work"
        subtitle="Commercial games and real-time systems shipped to real audiences."
      />

      {/* Filter tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
            style={
              filter === cat
                ? {
                    background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
                    color: '#fff',
                    boxShadow: '0 4px 16px rgba(79,140,255,0.3)',
                  }
                : {
                    background: 'rgba(79,140,255,0.06)',
                    border: '1px solid rgba(79,140,255,0.15)',
                    color: '#B8C2D9',
                  }
            }
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Cards grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}

function ProjectCard({ project }) {
  const Wrapper = project.liveUrl ? motion.a : motion.article

  return (
    <Wrapper
      layout
      {...(project.liveUrl ? {
        href: project.liveUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      } : {})}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: '#141B2D',
        border: '1px solid rgba(79,140,255,0.1)',
      }}
    >
      {/* Image / placeholder */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
          borderBottom: '1px solid rgba(79,140,255,0.08)',
        }}
      >
        {project.video ? (
          <video
            src={project.video}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-6xl z-10 select-none"
            >
              {project.icon}
            </motion.div>
          </>
        )}

        {/* Category badge */}
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            background: `${project.color}22`,
            border: `1px solid ${project.color}44`,
            color: project.color,
            backdropFilter: 'blur(8px)',
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-[#4F8CFF] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#B8C2D9' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #4F8CFF, #7B61FF)',
                color: '#fff',
              }}
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          ) : (
            <span
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: '#B8C2D960',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <FiExternalLink size={13} /> Private
            </span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-white/10"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#B8C2D9',
              }}
            >
              <FiGithub size={13} /> GitHub
            </a>
          ) : (
            <span
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: '#B8C2D960',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <FiGithub size={13} /> Private
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
