export default function Experience() {
  const experiences = [
    {
      period: "2022 December — 2026 Janaury",
      role: "Senior Software Engineer",
      company: "Vhypotenuse",
      description:
        "Leading frontend architecture for scalable web and mobile applications. Focused on building reusable component libraries and optimizing cross-platform performance using React Native and Nuxt.",
      technologies: ["React JS", "React Native", "Vue JS", "Nuxt JS", "TypeScript", "Zustand", "Pinia"],
      current: false,
    },
    {
      period: "2022 March — 2022 September",
      role: "Frontend Developer",
      company: "Zysk Technologies",
      description: "Developed responsive UI components and integrated complex APIs. Focused on SEO optimization and performance auditing for client-facing applications.",
      technologies: ["React JS", "Redux", "Next JS", "Tailwind CSS"],
      current: false,
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container flex flex-col justify-center items-center mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-8 md:mb-20 text-center">
          <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white leading-tight">
            Experience that <span className="font-serif italic font-normal text-emerald-400/90">speaks volumes.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A timeline of my professional growth, from building pixel-perfect UIs to architecting complex frontend ecosystems.
          </p>
        </div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative grid md:grid-cols-2 gap-8 items-start">

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 bg-emerald-500 rounded-full -translate-x-1/2 ring-4 ring-[#0a0a0a] z-20 transition-transform hover:scale-125">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <div className="glass group p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-500 bg-white/[0.02] backdrop-blur-sm">
                      <span className="text-sm text-emerald-400 font-mono tracking-tighter">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-gray-300 font-medium mb-4">{exp.company}</p>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 mt-6 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        {exp.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest rounded-md text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};