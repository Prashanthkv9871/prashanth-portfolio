const Skills = () => {
    const skills = ["React", "Vue", "Nuxt", "Tailwind", "Node.js", "MongoDB"];

    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-gray-800 rounded-lg"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;