import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { SiNuxt } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <BsTypescript className="text-[#3178C6]" /> },
        { name: "React JS", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Next JS", icon: <RiNextjsFill className="text-white" /> }, // White looks better on dark for Next
        { name: "React Native", icon: <TbBrandReactNative className="text-[#61DAFB]" /> },
        { name: "Vue JS", icon: <FaVuejs className="text-[#4FC08D]" /> },
        { name: "Nuxt JS", icon: <SiNuxt className="text-[#00DC82]" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-[#38B2AC]" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> }
    ];

    return (
        <section id="skills" className="px-6 max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
                <p className="text-gray-400">The tools and technologies I use to bring ideas to life.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group flex flex-col items-center justify-center gap-3 p-6 bg-white/2 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                            {skill.icon}
                        </div>
                        <span className="text-xs font-medium tracking-wide text-gray-400 group-hover:text-white transition-colors">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};