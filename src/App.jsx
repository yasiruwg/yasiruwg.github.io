import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Loader from './components/ui/Loader'
import BackToTop from './components/ui/BackToTop'

import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Stats from './components/sections/Stats'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Stats />
            <Education />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  )
}
