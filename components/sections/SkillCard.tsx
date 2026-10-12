"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillCard({
    title,
    skills,
}: SkillCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{
                duration: .25,
            }}
            className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      "
        >

            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

            <h3 className="mb-6 text-xl font-bold">
                {title}
            </h3>

            <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (

                    <span
                        key={skill}
                        className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            text-gray-300
            transition
            hover:border-blue-400
            hover:text-white
            "
                    >
                        {skill}
                    </span>

                ))}

            </div>

        </motion.div>
    );
}