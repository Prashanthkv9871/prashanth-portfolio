import { FaFolderOpen } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            title: "eTMF - Electronic Trial Master File",
            duration: "Jan 2025 - Jan 2026",
            highlight: "Enterprise Document Management",
            description: [
                "Architected a clinical trial document system with complex RBAC permissions.",
                "Streamlined workflows for document upload and real-time status tracking.",
                "Integrated secure .NET API services with Nuxt 3 and Pinia state management."
            ],
            technologies: ["Nuxt JS", "Pinia", "Tailwind CSS", ".NET", "MSSQL"]
        },
        {
            title: "Dezigncode CRM",
            duration: "Dec 2022 - Dec 2024",
            highlight: "Cross-platform Interior Design ERP",
            description: [
                "Engineered a dual-platform CRM for lead management and customer tracking.",
                "Developed a shared component library for both Web (React) and Mobile (React Native).",
                "Optimized data fetching and synchronization using Zustand."
            ],
            technologies: ["React JS", "React Native", "Zustand", "Laravel", "MySQL"]
        },
        {
            title: "Address Health Revamp",
            duration: "Mar 2022 - Sep 2022",
            highlight: "Performance-focused Health Records",
            description: [
                "Modernized health record management with a focus on core web vitals.",
                "Implemented complex student data validation forms and UI performance audits.",
                "Utilized Next.js for SSR to improve SEO and initial load speeds."
            ],
            technologies: ["Next JS", "Redux", "Tailwind CSS", "PHP", "MySQL"]
        },
    ];

    return (
        <section id="projects" className="px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
                <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-3">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="glass group relative p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all duration-500 bg-white/[0.02]"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-emerald-500/10 rounded-xl">
                                <FaFolderOpen className="text-2xl text-emerald-400" />
                            </div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-tighter">
                                {project.duration}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-emerald-400/80 text-sm font-medium mb-4 italic">
                            {project.highlight}
                        </p>

                        <ul className="space-y-3 mb-8">
                            {project.description?.map((desc, idx) => (
                                <li key={idx} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                    <span className="text-emerald-500 mt-1.5 shrink-0">•</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300 font-medium hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};