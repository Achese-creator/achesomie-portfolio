"use client";

import { motion, AnimatePresence } from "framer-motion";

interface WelcomeBubbleProps {
    show: boolean;
    onOpen: () => void;
}

export default function WelcomeBubble({
    show,
    onOpen,
}: WelcomeBubbleProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, x: 80, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 80, scale: 0.9 }}
                    transition={{ duration: 0.45 }}
                    className="
          fixed
          bottom-28
          right-8
          z-[998]
          w-[320px]
          rounded-3xl
          border
          border-blue-500/20
          bg-[#0B0F19]/95
          p-5
          shadow-2xl
          backdrop-blur-xl
          "
                >
                    <p className="text-lg font-bold text-white">
                        👋 Hi, I'm Achesomie's AI Assistant
                    </p>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                        Ask me anything about:
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                        <li>• AI Projects</li>
                        <li>• Machine Learning</li>
                        <li>• Experience</li>
                        <li>• Skills</li>
                        <li>• Education</li>
                    </ul>

                    <button
                        onClick={onOpen}
                        className="
            mt-6
            w-full
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            py-3
            font-semibold
            text-white
            transition
            hover:scale-[1.02]
            "
                    >
                        Try Me
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}