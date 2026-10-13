"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-36"
        >
            <Container>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl"
                >

                    <p className="mb-4 uppercase tracking-[0.35em] text-[#F7BD53]">
                        Contact
                    </p>

                    <h2 className="text-5xl font-black">
                        Let&apos;s Build Something Amazing
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                        I&apos;m always interested in AI engineering and machine learning opportunities. Whether it&apos;s an internship,
                        collaboration, or freelance project, I&apos;d love to hear from you.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <a
                            href="mailto:yifieyeha@gmail.com"
                            className="rounded-xl bg-[#F7BD53] px-8 py-4 font-semibold text-[#102A25] transition hover:scale-105"
                        >
                            Email Me
                        </a>

                        <a
                            href="https://github.com/Achese-creator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 transition hover:bg-white/10"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/maverickhoodie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 transition hover:bg-white/10"
                        >
                            LinkedIn
                        </a>

                    </div>

                </motion.div>

            </Container>
        </section>
    );
}