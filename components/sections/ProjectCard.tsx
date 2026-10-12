"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
    title: string;
    description: string;
    image: string;
    stack: string[];
    live: string;
    github: string;
    featured?: boolean;
}

export default function ProjectCard({
    title,
    description,
    image,
    stack,
    live,
    github,
    featured,
}: Props) {
    return (
        <Tilt
            glareEnable
            glareMaxOpacity={0.2}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            className={featured ? "lg:col-span-2" : ""}
        >
            <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.25 }}
                className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        "
            >
                {/* Image */}

                <div className="overflow-hidden">

                    <img
                        src={image}
                        alt={title}
                        className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                </div>

                {/* Content */}

                <div className="space-y-6 p-8">

                    <div>

                        <h3 className="text-3xl font-bold">
                            {title}
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            {description}
                        </p>

                    </div>

                    {/* Tech */}

                    <div className="flex flex-wrap gap-3">

                        {stack.map((tech) => (

                            <span
                                key={tech}
                                className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1
                text-sm
                text-blue-300
                "
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                    {/* Buttons */}

                    <div className="flex gap-4">

                        <a
                            href={live}
                            target="_blank"
                            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:scale-105
              "
                        >
                            Live Demo

                            <ArrowUpRight size={18} />

                        </a>

                        <a
                            href={github}
                            target="_blank"
                            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              transition
              hover:bg-white/10
              "
                        >
                            <FaGithub size={18} />

                            GitHub

                        </a>

                    </div>

                </div>

            </motion.div>
        </Tilt>
    );
}