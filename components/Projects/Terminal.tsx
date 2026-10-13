"use client";

import { motion, AnimatePresence } from "framer-motion";
import TypingCommand from "./TypingCommand";
import { useChat } from "@/components/context/ChatContext";


interface Project {
    id: string;
    name: string;
    title: string;
    image: string;
    description: string;
    highlights: string[];
    stack: string[];
    github: string;
    demo: string;
}

interface TerminalProps {
    project: Project;
}

export default function Terminal({ project }: TerminalProps) {
    const { openChat } = useChat();
    return (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#102A25]/90 shadow-2xl backdrop-blur-xl">

            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-[#F9FDFD]/45">
                    ~/portfolio/projects
                </span>

            </div>

            <AnimatePresence mode="wait">

                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8 p-8"
                >

                    {/* Fake Terminal Command */}
                    <TypingCommand
                        command={`$ cat ${project.name}README.md`}
                    />

                    {/* Project Image */}

                    <div className="mx-auto max-w-5xl">

                        <div className="rounded-t-2xl border border-white/10 bg-[#303030] px-6 py-3">

                            <div className="flex gap-2">

                                <div className="h-3 w-3 rounded-full bg-red-500" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                <div className="h-3 w-3 rounded-full bg-green-500" />

                            </div>

                        </div>

                        <div className="overflow-hidden border-x border-white/10">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full transition duration-700 hover:scale-105"
                            />

                        </div>

                        <div className="h-5 rounded-b-full bg-[#303030]" />

                    </div>

                    {/* Title */}

                    <h2 className="text-4xl font-black">
                        {project.title}
                    </h2>

                    {/* Description */}

                    <p className="max-w-3xl leading-8 text-[#F9FDFD]/65">
                        {project.description}
                    </p>

                    {/* Project Highlights */}

                    <div>

                        <h3 className="mb-4 text-xl font-semibold">
                            Project Highlights
                        </h3>

                        <div className="grid gap-3 md:grid-cols-2">

                            {project.highlights?.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-xl border border-[#F7BD53]/20 bg-[#F7BD53]/5 p-4"
                                >

                                    ✓ {item}

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Tech Stack */}

                    <div className="flex flex-wrap gap-3">

                        {project.stack.map((tech) => (

                            <span
                                key={tech}
                                className="
                  rounded-full
                  border
                  border-[#F7BD53]/30
                  bg-[#F7BD53]/10
                  px-4
                  py-2
                  text-sm
                  text-[#F7BD53]
                "
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4">

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                transition
                hover:border-[#F7BD53]
                hover:bg-white/10
              "
                        >
                            GitHub
                        </a>

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                    rounded-xl
                    bg-gradient-to-r
                    from-[#F7BD53]
                    to-[#F7BD53]
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:scale-105
                  "
                            >
                                Live Demo →
                            </a>
                        )}

                    </div>

                    <div className="mt-10 rounded-2xl border border-[#F7BD53]/30 bg-[#F7BD53]/5 p-6">

                        <h3 className="mb-2 text-lg font-semibold text-[#F7BD53]">
                            Ask My Portfolio
                        </h3>

                        <p className="text-[#F9FDFD]/65">
                            Curious about how this project works? Ask my AI assistant about
                            the architecture, technologies, implementation, or technical decisions
                            behind this project.
                        </p>

                        <button
                            onClick={openChat}
                            className="mt-4 rounded-lg bg-[#F7BD53] px-5 py-2 font-semibold text-[#102A25] transition hover:scale-105"
                        >
                            Ask the AI →
                        </button>

                    </div>

                </motion.div>

            </AnimatePresence>

        </div>
    );

}