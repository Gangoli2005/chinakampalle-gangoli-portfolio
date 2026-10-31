import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

const MotionPath = motion.path

function TagCard({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const progressPixels = latest * containerRect.height
    setIsActive(progressPixels >= cardTopRelativeToContainer + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-colors duration-700 select-none ${className} ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.35)]'
          : 'bg-white shadow-xl border border-gray-100'
      }`}
    >
      {/* Punched Hole Circle */}
      <div className="w-5 h-5 rounded-full mx-auto my-2 border-2 border-dashed border-gray-300 bg-white/40" />

      {/* Inner Rounded Panel */}
      <div
        className={`rounded-[1.5rem] mt-8 p-8 min-h-[220px] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-900'
        }`}
      >
        <div>
          <span className="text-4xl font-serif italic mb-2 block select-none">
            {number}
          </span>
          <h3 className="text-2xl font-black mb-2 leading-tight">
            {title}
          </h3>
        </div>
        <p className={`text-sm leading-relaxed ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopD = 'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  const cardConfigs = [
    {
      className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] text-gray-900"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-50 text-[#ff2a2a] border border-red-200 mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900">
              {skillsContent.heading}
            </h2>
            {/* Hand-Drawn Arrow SVG */}
            <svg
              className="absolute -bottom-6 -right-6 w-8 h-8 text-[#ff2a2a] fill-none stroke-current"
              strokeWidth={2.5}
              viewBox="0 0 20 20"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-8">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop SVG Path Layers */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* 1. Faint Guide Path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          {/* 2. Mask Layer with Spring PathLength */}
          <mask id="path-mask">
            <MotionPath
              d={desktopD}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>
          {/* 3. Real Animated Dashed Path */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile SVG Path Layers */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          {/* 1. Faint Guide Path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          {/* 2. Mobile Mask */}
          <mask id="path-mask-mobile">
            <MotionPath
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          {/* 3. Real Dashed Path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => {
            const config = cardConfigs[idx] || cardConfigs[0]
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosType={config.aosType}
                aosDelay={config.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Hand-Written End Note */}
        <p className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none">
          {skillsContent.endText}
        </p>
      </div>
    </section>
  )
}
