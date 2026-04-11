import { FaRegEye } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold">
                Hi, I'm Prashanth K V 👋
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-300">
                Frontend Developer with 3.6+ years of experience
                <br /> <br />
                I build scalable web & mobile applications with modern UI/UX
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-3">
                <a href="/prashanth-portfolio/Prashanth_KV_Resume.pdf" download className="flex items-center gap-2  px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600">
                    Download Resume <MdOutlineFileDownload size={24} />
                </a>
                <a href="/prashanth-portfolio/Prashanth_KV_Resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600">
                    View Resume <FaRegEye size={20} />
                </a>
            </div>
        </section>
    );
};

export default Hero;