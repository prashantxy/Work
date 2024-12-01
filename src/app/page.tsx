import Hero from './components/hero'
import Summary from './components/summary'
import SkillsShowcase from './components/skill'
import Projects from './components/projects'
import CompetitiveProgramming from './components/compe'
import Contact from './components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <Hero />
      <Summary />
      <SkillsShowcase />
      <Projects />
      <CompetitiveProgramming />
      <Contact />
    </main>
  )
}

