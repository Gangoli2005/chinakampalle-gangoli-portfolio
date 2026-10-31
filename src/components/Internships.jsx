import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white border border-white/15">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white leading-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 font-bold text-xs tracking-wider mt-1 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
              Skills Gained:
            </p>
            <ul className="space-y-1.5 text-xs text-white/80 list-disc list-inside">
              {intern.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, i) => (
              <span
                key={i}
                className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/10 text-white/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  return (
    <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Inverted Torn Paper SVG Divider at Top Edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[1px] rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a] block"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative Pulsing Black Star Bottom-Left */}
      <svg
        className="absolute bottom-10 left-10 w-8 h-8 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 text-sm md:text-base max-w-2xl mx-auto">
          Hands-on internships and practical industry experience applying data analytics to business problems.
        </p>
      </div>

      {/* Grid of Internship Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {internshipsList && internshipsList.map((intern, index) => (
          <InternshipCard
            key={intern.organization + index}
            intern={intern}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
