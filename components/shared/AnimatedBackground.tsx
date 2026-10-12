"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Blue Glow */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]"
            />

            {/* Purple Glow */}
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute right-[-120px] bottom-[-80px] h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[140px]"
            />

            {/* Center Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
            />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                    backgroundSize: "48px 48px",
                }}
            />
        </div>
    );
}