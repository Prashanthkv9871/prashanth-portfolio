import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`fixed w-full top-0 left-0 z-100 transition-all duration-300 bg-[#0a0a0a] border-b border-white/5 py-5`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                <a href="#home" className="text-2xl font-black tracking-tighter text-white group">
                    Prashanth<span className="text-emerald-500 group-hover:animate-pulse">.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors duration-300 tracking-wide"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* Visual indicator for 'Available for work' */}
                    <li className="pl-4 border-l border-white/10">
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Available</span>
                        </div>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-gray-300"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                >
                    {open ? <IoClose /> : <IoMenu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {open &&
                <div className={`w-full h-[90vh] fixed top-16 bg-[#0a0a0a] z-10 transition-transform duration-500 md:hidden`}>
                    <ul className="flex flex-col items-center justify-center h-full gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-2xl font-bold text-gray-200 hover:text-emerald-500"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </nav>
    );
};