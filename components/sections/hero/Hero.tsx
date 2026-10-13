"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../../shared/Container";
import AnimatedBackground from "../../shared/AnimatedBackground";
import {
    SiPython,
    SiReact,
    SiNodedotjs,
    SiTensorflow,
} from "react-icons/si";
import AIOrb from "./AIOrb";
import { useChat } from "@/components/context/ChatContext";



export default function Hero() {
    const { openChat } = useChat();
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
            <AnimatedBackground />

            <Container className="grid min-h-screen items-center gap-20 lg:grid-cols-2">
                {/* Left Side */}
                <div className="space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                    >
                        <div className="inline-flex items-center rounded-full border border-[#006E59]/30 bg-[#006E59]/10 px-4 py-2 backdrop-blur">
                            <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#006E59]">
                                AI • Machine Learning • Full Stack
                            </span>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                    >
                        <h1 className="text-6xl font-black leading-none md:text-7xl xl:text-8xl">
                            Achesomie
                            <br />
                            <span className="bg-gradient-to-r from-[#006E59] via-[#F9FDFD] to-[#006E59] bg-clip-text text-transparent animate-gradientShift">
                                Goni Yifieyeh
                            </span>
                        </h1>
                    </motion.div>

                    {/* Tagline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.35,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="max-w-3xl text-2xl font-semibold text-[#F9FDFD]/85 md:text-3xl"
                    >
                        Engineering AI solutions that solve meaningful problems.
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.5,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="max-w-2xl text-lg leading-8 text-[#F9FDFD]/65"
                    >
                        Building intelligent software powered by AI, machine learning,
                        and modern full-stack engineering to solve meaningful real-world
                        problems.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.65,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="flex flex-wrap gap-5"
                    >
                        <a
                            href="#projects"
                            aria-label="View Projects"
                            className="group relative flex items-center gap-2 rounded-xl bg-[#F7BD53] px-7 py-3 font-semibold text-[#102A25] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-black/30"
                        >
                            View Projects <ArrowRight className="h-4 w-4" />
                            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-20 transition" />
                        </a>

                        <a
                            href="#contact"
                            aria-label="Contact Me"
                            className="rounded-xl bg-[#F7BD53] px-7 py-3 font-semibold text-[#102A25] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-105"
                        >
                            Let&apos;s Talk
                        </a>

                        <button
                            onClick={openChat}
                            aria-label="Ask me about my projects"
                            className="flex items-center gap-2 rounded-xl bg-[#F7BD53] px-7 py-3 font-semibold text-[#102A25] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-105"
                        >
                            <MessageCircle className="h-4 w-4" /> Ask My AI
                        </button>
                    </motion.div>

                    {/* Tech Stack Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.8,
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="flex flex-wrap items-center gap-6 pt-8 text-4xl"
                    >
                        <SiPython
                            className="text-[#3776AB] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                            title="Python"
                        />

                        <SiReact
                            className="text-[#61DAFB] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                            title="React"
                        />

                        <SiNodedotjs
                            className="text-[#5FA04E] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                            title="Node.js"
                        />

                        <SiTensorflow
                            className="text-[#FF6F00] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                            title="TensorFlow"
                        />
                    </motion.div>
                </div>

                {/* Right Side Globe */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                    }}
                    className="hidden items-center justify-center lg:flex"
                >
                    <AIOrb />
                </motion.div>
            </Container>
        </section>
    );
}
