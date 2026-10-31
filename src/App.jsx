import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif] flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechnicalSkills />
        <Projects />
        <Internships />
        <Leadership />
        <SoftSkills />
      </main>
      <Footer />
    </div>
  )
}
