"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    SiPython,
    SiReact,
    SiNextdotjs,
    SiTensorflow,
    SiFastapi,
    SiLangchain,
} from "react-icons/si";

const techs = [
    {
        icon: SiPython,
        color: "#3776AB",
        x: 0,
        y: -170,
    },
    {
        icon: SiReact,
        color: "#61DAFB",
        x: 150,
        y: -70,
    },
    {
        icon: SiNextdotjs,
        color: "#ffffff",
        x: 150,
        y: 90,
    },
    {
        icon: SiTensorflow,
        color: "#FF6F00",
        x: 0,
        y: 170,
    },
    {
        icon: SiFastapi,
        color: "#009688",
        x: -150,
        y: 90,
    },
    {
        icon: SiLangchain,
        color: "#00C389",
        x: -150,
        y: -70,
    },
];

const packets = techs.map((tech) => ({
    x: tech.x,
    y: tech.y,
}));

export default function AIOrb() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-250, 250], [10, -10]), {
        stiffness: 120,
        damping: 20,
    });

    const rotateY = useSpring(useTransform(mouseX, [-250, 250], [-10, 10]), {
        stiffness: 120,
        damping: 20,
    });

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const resetMouse = () => {
        mouseX.set(0);
        mouseY.set(0);
    };
    return (
        <motion.div
            className="relative flex h-[550px] w-[550px] items-center justify-center"
            style={{
                rotateX,
                rotateY,
                transformPerspective: 1200,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMouse}
        >
            {/* Background Glow */}
            <div className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
            <div className="absolute h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />
            {Array.from({ length: 35 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-300/60"
                    style={{
                        width: 2,
                        height: 2,
                        left: `${(i * 37) % 100}%`,
                        top: `${(i * 53) % 100}%`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 2, 1],
                    }}
                    transition={{
                        duration: 3 + (i % 5),
                        repeat: Infinity,
                        delay: i * 0.1,
                    }}
                />
            ))}

            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[360px] w-[360px]"
            >
                <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-400 blur-sm" />
            </motion.div>
            {/* Outer Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[420px] w-[420px] rounded-full border border-white/10"
            />

            {/* Inner Ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute h-[300px] w-[300px] rounded-full border border-blue-500/20"
            />

            {/* Center Core */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 360],
                    boxShadow: [
                        "0 0 40px rgba(59,130,246,.5)",
                        "0 0 90px rgba(139,92,246,.9)",
                        "0 0 40px rgba(59,130,246,.5)",
                    ],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 backdrop-blur-xl"

            >
                <div className="
absolute
left-3
top-3
h-5
w-5
rounded-full
bg-white/30
blur-sm
" />
                <div className="relative flex flex-col items-center">
                    <span className="text-2xl font-black tracking-[0.3em] text-white">
                        AI
                    </span>

                    <span className="mt-1 text-[10px] uppercase tracking-[0.45em] text-blue-200">
                        Intelligence
                    </span>
                </div>
            </motion.div>

            {/* Neural Connections */}
            <svg
                className="absolute h-full w-full overflow-visible"
                viewBox="-275 -275 550 550"
            >
                {techs.map((tech, index) => (
                    <motion.line
                        key={index}
                        x1="0"
                        y1="0"
                        x2={tech.x}
                        y2={tech.y}
                        stroke="url(#gradient)"
                        strokeWidth="1.5"
                        opacity="0.35"
                        animate={{
                            opacity: [0.15, 0.5, 0.15],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                        }}
                    />
                ))}

                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Moving Data Packets */}
            {
                packets.map((packet, index) => (
                    <motion.div
                        key={`packet-${index}`}
                        className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                        initial={{
                            x: packet.x,
                            y: packet.y,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            x: [packet.x, 0],
                            y: [packet.y, 0],
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1, 1, 0.5],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatDelay: 0.8,
                            delay: index * 0.35,
                            ease: "easeInOut",
                        }}
                    />
                ))
            }

            {/* Tech Nodes */}
            {
                techs.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                x: tech.x,
                                y: tech.y,
                            }}
                            animate={{
                                y: [tech.y, tech.y - 12, tech.y],
                            }}
                            transition={{
                                duration: 4 + index,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="
                        group
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:border-blue-400/40
                        hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
                        ">
                                <Icon
                                    size={30}
                                    style={{
                                        color: tech.color,
                                    }}
                                />
                            </div>
                        </motion.div>
                    );
                })
            }

            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
        </motion.div>
    );
}