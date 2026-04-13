import { FaRegEye } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-svh flex flex-col justify-center items-center text-center px-4 pt-20 md:pt-24  overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-medium tracking-wider text-green-400 uppercase bg-green-500/10 border border-green-500/20 rounded-full animate-fade-in">
                    Available for New Opportunities
                </span>

                <h1 className="text-3xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                    Hi, I'm <span className="text-green-500">Prashanth K V</span> 👋
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    A <span className="text-white font-medium">Senior Frontend Developer</span> specializing in building high-performance, scalable web and mobile applications with modern UI/UX.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/prashanth-portfolio/Prashanth_KV_Resume.pdf"
                        download
                        className="group flex items-center gap-2 px-8 py-4 bg-green-500 text-black font-bold rounded-xl transition-all duration-300 hover:bg-green-400 hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
                    >
                        Download Resume
                        <MdOutlineFileDownload size={24} className="group-hover:animate-bounce" />
                    </a>

                    <a
                        href="/prashanth-portfolio/Prashanth_KV_Resume.pdf"
                        target="_blank"
                        className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:border-green-500 hover:text-green-500"
                    >
                        View Resume <FaRegEye size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};