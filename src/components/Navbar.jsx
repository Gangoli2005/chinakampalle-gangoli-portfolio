import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  const navBgClass = isOpen
    ? 'bg-[#ff2a2a] py-4 shadow-xl'
    : isScrolled
      ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
      : 'bg-transparent py-6'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Logo */}
        <a href="#" className="text-white text-2xl font-black tracking-wide">
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Centre Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-white/80 hover:text-white font-medium transition-colors py-1"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right Hire Me Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg py-2 border-b border-white/20 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-white text-[#ff2a2a] font-bold py-3 rounded-full hover:bg-black hover:text-white transition-all shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
