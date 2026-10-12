"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const prompts = [
    "💬 Ask about CoastCast",
    "💬 Tell me about his AI projects",
    "💬 Explain his ML experience",
    "💬 Show me his best project",
    "💬 Why AI Engineering?",
];

export default function PromptBubble() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % prompts.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-28 right-28 z-[997]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="
          rounded-full
          border
          border-white/10
          bg-[#111827]/90
          px-5
          py-3
          text-sm
          text-gray-300
          shadow-xl
          backdrop-blur-xl
          "
                >
                    {prompts[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}