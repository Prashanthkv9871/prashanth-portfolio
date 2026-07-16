import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-white">Prashanth K V</h2>

            <p className="mt-4 leading-7 text-gray-400">
              Frontend Developer with 3.7 years of experience building
              responsive and scalable web and mobile applications using React,
              React Native, Next, Vue, Nuxt, TypeScript, and modern frontend
              technologies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-sky-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Connect With Me
            </h3>

            <div className="mt-5 flex gap-4">
              <a
                href="https://github.com/Prashanthkv9871"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/prashanth-k-v-028181199"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/kvprashanth987"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500 hover:text-white"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="https://instagram.com/prashanthkvp987"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="mailto:kvprashanth987@gmail.com"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500 hover:text-white"
              >
                <MdEmail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
          © {year} Prashanth K V. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
