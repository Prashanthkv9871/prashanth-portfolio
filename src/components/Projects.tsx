const Projects = () => {
    const projects = [
        {
            title: "E-commerce App",
            desc: "Product variants, sharing & revenue system",
        },
        {
            title: "Task Dashboard",
            desc: "Manage tasks with overdue tracking",
        },
    ];

    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <div key={i} className="bg-gray-800 p-6 rounded-xl">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-gray-400 mt-2">{project.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;