"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../shared/Container";
import FileExplorer from "../Projects/FileExplorer";
import Terminal from "../Projects/Terminal";
import { projects } from "../Projects/ProjectData";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <section
            id="projects"
            className="relative py-36"
        >
            <Container>

                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >

                    <p className="mb-4 uppercase tracking-[0.35em] text-[#F7BD53]">
                        Featured Projects
                    </p>

                    <h2 className="text-5xl font-black">

                        Things I&apos;ve
                        <span className="bg-gradient-to-r from-[#006E59] to-[#F7BD53] bg-clip-text text-transparent">
                            {" "}Built
                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F9FDFD]/65">

                        Explore some of my AI, Machine Learning and Full-Stack
                        applications. Select a project from the explorer to
                        view its details.

                    </p>

                </motion.div>

                {/* Main Layout */}

                <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

                    <FileExplorer
                        selected={selectedProject.id}
                        onSelect={(id) =>
                            setSelectedProject(
                                projects.find((project) => project.id === id)!
                            )
                        }
                    />

                    <Terminal project={selectedProject} />

                </div>

            </Container>
        </section>
    );
}