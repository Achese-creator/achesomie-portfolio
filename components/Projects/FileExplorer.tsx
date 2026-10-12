"use client";

import { motion } from "framer-motion";
import { projects } from "./ProjectData";

interface FileExplorerProps {
    selected: string;
    onSelect: (id: string) => void;
}

export default function FileExplorer({
    selected,
    onSelect,
}: FileExplorerProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-blue-400">
                AI Project Lab
            </p>

            <div className="space-y-2">
                {projects.map((project) => (
                    <motion.button
                        key={project.id}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(project.id)}
                        className={`flex w-full items-center rounded-xl px-4 py-3 text-left transition-all duration-300 ${selected === project.id
                                ? "border border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-lg shadow-blue-500/10"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                    >
                        <span className="mr-3 text-lg">📁</span>

                        <span className="font-mono text-sm">
                            {project.name}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}