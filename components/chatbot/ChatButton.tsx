"use client";

import { motion } from "framer-motion";

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function ChatButton({
    isOpen,
    onClick,
}: ChatButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{
                scale: 1.08,
            }}
            whileTap={{
                scale: 0.95,
            }}
            animate={{
                y: [0, -6, 0],
                boxShadow: [
                    "0 0 20px rgba(59,130,246,.30)",
                    "0 0 45px rgba(99,102,241,.55)",
                    "0 0 20px rgba(59,130,246,.30)",
                ],
            }}
            transition={{
                y: {
                    repeat: Infinity,
                    duration: 3,
                },
                boxShadow: {
                    repeat: Infinity,
                    duration: 3,
                },
            }}
            className="
fixed
bottom-8
right-8
z-[999]
flex
h-25
w-25 
items-center
justify-center
rounded-full
bg-gradient-to-br
from-blue-600
via-cyan-500
to-purple-600
text-white
backdrop-blur-xl
"
        >
            <div className="relative">

                <div className="relative flex h-15 w-15 items-center justify-center rounded-full bg-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wide">
                        Click here to chat
                    </span>
                </div>
            </div>
        </motion.button>
    );
}