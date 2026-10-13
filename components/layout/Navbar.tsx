"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "../shared/Container";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#102A25]/85 backdrop-blur-2xl"
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}

        <Link href="/" className="group" aria-label="Home">

          <h2 className="text-xl font-black tracking-tight">

            <span className="bg-gradient-to-r from-[#F7BD53] via-[#F9FDFD] to-[#F7BD53] bg-clip-text text-transparent transition duration-300 group-hover:brightness-125">

              Achesomie

            </span>

          </h2>

        </Link>

        {/* Desktop Nav */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="group relative text-sm font-medium text-[#F9FDFD]/75 transition hover:text-[#F7BD53]"
            >

              {item.name}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-0
                  rounded-full
                  bg-gradient-to-r
                  from-[#006E59]
                  to-[#F7BD53]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

            </a>

          ))}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Resume */}

          <a
            href="/YifieyehAcheseIntern_1page.pdf"
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[#F7BD53]/30
              bg-[#F7BD53]
              px-5
              py-2
              text-sm
              font-semibold
              text-[#102A25]
              shadow-lg
              shadow-black/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-black/30
              md:flex
            "
          >
            <FileText size={16} />
            View CV
          </a>

          <a
            href="/YifieyehAcheseIntern_1page.pdf"
            download="Achesomie-Yifieyeh-Resume.pdf"
            aria-label="Download resume PDF"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-[#F7BD53]/30 px-3 py-2 text-sm font-semibold text-[#F9FDFD] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7BD53]/10 hover:text-[#F7BD53]"
          >
            Download CV
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/Achese-creator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              p-2.5
              text-[#F9FDFD]/80
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#F7BD53]/60
              hover:text-[#F7BD53]
              hover:shadow-[0_0_20px_rgba(247,189,83,.2)]
            "
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/maverickhoodie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              p-2.5
              text-[#F9FDFD]/80
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#F7BD53]/60
              hover:text-[#F7BD53]
              hover:shadow-[0_0_20px_rgba(247,189,83,.2)]
            "
          >
            <FaLinkedin size={18} />
          </a>

          {/* Mobile Menu */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-2.5
              text-[#F9FDFD]
              backdrop-blur
              transition
              hover:border-[#F7BD53]/60
              lg:hidden
            "
          >
            <Menu size={22} />
          </button>

          {menuOpen && (
            <div className="absolute right-4 top-20 z-40 w-56 rounded-lg border border-white/10 bg-[#102A25]/95 p-4 shadow-lg lg:hidden">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#F9FDFD]/80 hover:text-[#F7BD53]"
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="/YifieyehAcheseIntern_1page.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#F7BD53]/30 px-3 py-2 text-sm font-semibold text-[#F7BD53]"
                >
                  <FileText size={14} />
                  View CV
                </a>

                <a
                  href="/YifieyehAcheseIntern_1page.pdf"
                  download="Achesomie-Yifieyeh-Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-[#F7BD53]/30 bg-[#F7BD53] px-3 py-2 text-sm font-semibold text-[#102A25] transition-colors hover:bg-[#F9D58A]"
                >
                  <FileText size={14} />
                  Download CV
                </a>

                <div className="flex gap-2 mt-2">
                  <a href="https://github.com/Achese-creator" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md p-2 text-[#F9FDFD]/80 hover:text-[#F7BD53]">
                    <FaGithub size={18} />
                  </a>
                  <a href="https://linkedin.com/in/maverickhoodie" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-[#F9FDFD]/80 hover:text-[#F7BD53]">
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </nav>
            </div>
          )}

        </div>

      </Container>
    </motion.header>
  );
}
