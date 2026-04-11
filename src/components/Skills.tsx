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

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3 color="#1572B6" /> },
        { name: "JavaScript", icon: <IoLogoJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <BsTypescript color="#3178C6" /> },
        { name: "React JS", icon: <FaReact color="#61DAFB" /> },
        { name: "Next JS", icon: <RiNextjsFill color="#000000" /> },
        { name: "React Native", icon: <TbBrandReactNative color="#61DAFB" /> },
        { name: "Vue JS", icon: <FaVuejs color="#4FC08D" /> },
        { name: "Nuxt JS", icon: <SiNuxt color="#00DC82" /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill color="#38B2AC" /> },
        { name: "GitHub", icon: <FaGithub color="#181717" /> }
    ];

    return (
        <section className="py-16 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="flex items-center gap-1 px-4 py-2 bg-gray-800 rounded-lg"
                    >
                        {skill.icon} {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;