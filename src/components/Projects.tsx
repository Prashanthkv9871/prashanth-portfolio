const Projects = () => {
    const projects = [
        {
            title: "eTMF - Electronic Trial Master File",
            duration: "Jan 2025 - Jan 2026",
            description: [
                "Built a document management system for clinical trials",
                "Implemented RBAC permission - based UI rendering",
                "Developed document upload, workflow, and status tracking",
                "Integrated secure authentication and API services"
            ],
            technologies: "Nuxt JS, Tailwind CSS, .NET Framework, MSSQL"
        },
        {
            title: "Dezigncode CRM (Web and Mobile app)",
            duration: "Dec 2022 - Dec 2024",
            description: [
                "Built CRM system for interior design businesses",
                "Developed lead management and customer tracking features",
                "Created reusable UI components for web and mobile",
            ],
            technologies: "React JS, React Native, Tailwind CSS, PHP Laravel, MySQL"
        },
        {
            title: "Address health revamp",
            duration: "Mar 2022 - Sep 2022",
            description: [
                "Revamped health record management system",
                "Improved UI performance and usability",
                "Implemented forms and validation for student health data",
            ],
            technologies: "Next JS, Tailwind CSS, PHP Laravel, MySQL"
        },
    ];

    return (
        <section className="py-16 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <div key={i} className="bg-gray-800 p-6 rounded-xl">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-base">Duration: {project.duration}</span>
                        <ul className="list-disc px-4">
                            {project.description?.map((desc) => (
                                <li key={desc} className="text-gray-400 mt-2">
                                    {desc}
                                </li>
                            ))}
                        </ul>

                        <p className="mt-3 text-gray-400"><span className="font-bold">Technologies:</span> {" "}
                            {project.technologies}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;