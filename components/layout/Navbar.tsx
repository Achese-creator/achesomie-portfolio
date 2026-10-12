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
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0F19]/60 backdrop-blur-2xl"
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}

        <Link href="/" className="group" aria-label="Home">

          <h2 className="text-xl font-black tracking-tight">

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent transition duration-300 group-hover:brightness-125">

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
              className="group relative text-sm font-medium text-gray-300 transition hover:text-white"
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
                  from-blue-400
                  to-purple-500
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
              border-blue-500/20
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              px-5
              py-2
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-blue-500/50
              md:flex
            "
          >
            <FileText size={16} />
            Resume
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
              text-gray-300
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400/40
              hover:text-white
              hover:shadow-[0_0_20px_rgba(59,130,246,.35)]
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
              text-gray-300
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-400/40
              hover:text-white
              hover:shadow-[0_0_20px_rgba(59,130,246,.35)]
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
              text-white
              backdrop-blur
              transition
              hover:border-blue-500/40
              lg:hidden
            "
          >
            <Menu size={22} />
          </button>

          {menuOpen && (
            <div className="absolute right-4 top-20 z-40 w-56 rounded-lg border border-white/10 bg-[#0B0F19]/90 p-4 shadow-lg lg:hidden">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="/YifieyehAcheseIntern_1page.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-blue-500/20 px-3 py-2 text-sm font-semibold text-white"
                >
                  <FileText size={14} />
                  Resume
                </a>

                <div className="flex gap-2 mt-2">
                  <a href="https://github.com/Achese-creator" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md p-2 text-gray-300 hover:text-white">
                    <FaGithub size={18} />
                  </a>
                  <a href="https://linkedin.com/in/maverickhoodie" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-gray-300 hover:text-white">
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