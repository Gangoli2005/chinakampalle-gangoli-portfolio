import { projects, socialLinks } from '../data/portfolioData'

function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship
  const borderGradientClass = isFlagship
    ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60 shadow-[0_0_30px_rgba(255,42,42,0.15)]'
    : 'bg-white/10 hover:bg-white/20'

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${borderGradientClass}`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 flex flex-col justify-between h-full">
        <div>
          {/* Optional Badge */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-600/10 text-[#ff2a2a] border border-red-500/20 mb-4 w-fit">
              {project.badge}
            </span>
          )}

          {/* Header Row: Big Number & Title */}
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-4xl md:text-5xl font-black text-white/10 font-serif italic select-none shrink-0">
              {project.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed my-4">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-red-600/20 hover:border-red-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
            >
              <GitHubIcon className="w-4 h-4 fill-current" />
              <span>GitHub</span>
            </a>
          )}

          {project.links?.demo && project.links.demo.trim() !== '' ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold bg-[#ff2a2a] text-white hover:bg-red-600 transition-all duration-200 shadow-md shadow-red-500/20"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon className="w-4 h-4 stroke-current fill-none" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold bg-white/5 border border-white/10 text-white/40 cursor-not-allowed select-none"
            >
              <span>Demo Coming Soon</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Section Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-600/10 text-[#ff2a2a] border border-red-500/20 mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Work that speaks for itself
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
          A showcase of real-world data analytics solutions, interactive dashboards, and business insights.
        </p>
      </div>

      {/* Project Cards Stack */}
      <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto mb-16 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || project.number}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>

      {/* Explore All Repositories CTA */}
      {socialLinks.github && (
        <div className="text-center relative z-10" data-aos="fade-up">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-black text-sm uppercase tracking-wider hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 shadow-xl active:scale-95 group"
          >
            <GitHubIcon className="w-5 h-5 fill-current" />
            <span>Explore All My Repositories</span>
            <svg
              className="w-4 h-4 stroke-current fill-none group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      )}
    </section>
  )
}
