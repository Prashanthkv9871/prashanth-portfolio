export default function About() {
    return (
        <section id="about" className="flex flex-col gap-6 py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white">
                About Me
            </h2>

            <div className="space-y-4 max-w-2xl mx-auto">
                <p className="text-gray-300 text-lg leading-relaxed">
                    I am a <span className="text-emerald-400 font-medium">Senior Frontend Developer</span> with
                    over 3.6 years of experience architecting scalable web and mobile ecosystems
                    using <span className="text-white">React, Vue, and Nuxt.</span>
                </p>

                <p className="text-gray-400 text-base md:text-lg italic">
                    "I specialize in bridging the gap between complex backend logic and
                    seamless, high-performance user experiences."
                </p>
            </div>
        </section>
    );
};
