"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import SkillCard from "../sections/SkillCard";

const skillGroups = [
    {
        title: "AI & Machine Learning",
        skills: [
            "Python",
            "Scikit-learn",
            "TensorFlow",
            "Keras",
            "XGBoost",
            "Pandas",
            "NumPy",
            "LangChain",
            "RAG",
            "Prompt Engineering",
            "LLMs",
        ],
    },
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "JavaScript",
            "HTML5",
            "CSS3",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express",
            "REST APIs",
        ],
    },
    {
        title: "Databases & Tools",
        skills: [
            "SQLite",
            "FAISS",
            "Git",
            "GitHub",
            "VS Code",
            "Jupyter",
            "Streamlit",
            "Vercel",
            "Render",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-36"
        >
            <Container>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: .7,
                    }}
                    className="mb-20 text-center"
                >

                    <p className="mb-4 uppercase tracking-[0.35em] text-blue-400">
                        Skills
                    </p>

                    <h2 className="text-5xl font-black">

                        Technologies I
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Work With
                        </span>

                    </h2>

                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">

                    {skillGroups.map((group) => (

                        <SkillCard
                            key={group.title}
                            title={group.title}
                            skills={group.skills}
                        />

                    ))}

                </div>

            </Container>
        </section>
    );
}