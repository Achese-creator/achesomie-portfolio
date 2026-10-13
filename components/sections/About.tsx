"use client";

import { motion } from "framer-motion";
import AboutCard from "../sections/AboutCard";
import Container from "../shared/Container";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-36"
        >
            <Container>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mb-20 text-center"
                >

                    <p className="mb-4 uppercase tracking-[0.35em] text-[#F7BD53]">
                        About Me
                    </p>

                    <h2 className="text-5xl font-black">
                        Building Intelligent
                        <span className="bg-gradient-to-r from-[#006E59] to-[#F7BD53] bg-clip-text text-transparent">
                            {" "}AI Systems
                        </span>
                    </h2>

                </motion.div>

                <div className="grid gap-16 lg:grid-cols-2">

                    <AboutCard />

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                        className="space-y-8"
                    >

                        <p className="text-lg leading-8 text-gray-400">

                            I&apos;m an AI & Machine Learning Engineer with a background in
                            Biochemistry from Rivers State University. My transition into
                            technology was driven by curiosity about how intelligent systems
                            can solve real-world problems.

                        </p>

                        <p className="text-lg leading-8 text-gray-400">

                            Through hands-on projects, bootcamps, and continuous learning,
                            I&apos;ve built production-ready AI applications ranging from
                            predictive machine learning systems to full-stack AI solutions
                            powered by modern LLMs.

                        </p>

                        <p className="text-lg leading-8 text-gray-400">

                            Today, I enjoy designing AI-powered software that blends machine
                            learning, backend engineering, and intuitive user experiences.

                        </p>

                    </motion.div>

                </div>

            </Container>
        </section>
    );
}