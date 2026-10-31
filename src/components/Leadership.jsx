import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 last:mb-0 w-full">
      {/* Red Glowing Dot Marker */}
      <div className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.8)] border-2 border-black z-20" />

      {/* Even Index: Left Card on desktop */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            data-aos-delay={index * 100}
            className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] transition-all duration-300">
              {item.badge && (
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-red-600/10 text-[#ff2a2a] border border-red-500/20 mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors mb-1">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs text-red-400 font-semibold mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          {/* Spacer on Right */}
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        /* Odd Index: Right Card on desktop */
        <>
          {/* Spacer on Left */}
          <div className="hidden md:block md:w-[45%]" />
          <div
            data-aos="fade-left"
            data-aos-delay={index * 100}
            className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] transition-all duration-300">
              {item.badge && (
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-red-600/10 text-[#ff2a2a] border border-red-500/20 mb-3">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors mb-1">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs text-red-400 font-semibold mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-Paper SVG Divider at Top Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[1px] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#ff2a2a] block"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-600/10 text-[#ff2a2a] border border-red-500/20 mb-4">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Leadership & Engagement
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
          Community leadership, student club coordination, and collaborative initiatives driving engagement.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Continuous Center Gradient Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col">
          {leadershipList.map((item, index) => (
            <LeadershipItem key={item.title + index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
