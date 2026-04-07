import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 left-0 bg-[#0f0c29]/90 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold text-green-400">
                    Prashanth
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-300">
                    <li className="hover:text-green-400 cursor-pointer">Home</li>
                    <li className="hover:text-green-400 cursor-pointer">About</li>
                    <li className="hover:text-green-400 cursor-pointer">Skills</li>
                    <li className="hover:text-green-400 cursor-pointer">Projects</li>
                    <li className="hover:text-green-400 cursor-pointer">Contact</li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#0f0c29] px-6 pb-4">
                    <ul className="flex flex-col gap-4 text-gray-300">
                        <li className="hover:text-green-400">Home</li>
                        <li className="hover:text-green-400">About</li>
                        <li className="hover:text-green-400">Skills</li>
                        <li className="hover:text-green-400">Projects</li>
                        <li className="hover:text-green-400">Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;