"use client";

import { motion } from "framer-motion";

export default function AboutCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-10
      backdrop-blur-xl
      "
        >

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F7BD53]/20 blur-3xl" />

            <div className="space-y-8">

                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#006E59] to-[#F7BD53] text-4xl font-black">
                    AG
                </div>

                <div>

                    <h3 className="text-3xl font-bold">
                        Achesomie Goni Yifieyeh
                    </h3>

                    <p className="mt-2 text-gray-400">
                        AI Engineer & Full Stack Developer
                    </p>

                </div>

                <div className="space-y-4">

                    <Info
                        title="Location"
                        value="Nigeria 🇳🇬"
                    />

                    <Info
                        title="Education"
                        value="B.Sc. Biochemistry"
                    />

                    <Info
                        title="Focus"
                        value="AI • ML • Full Stack"
                    />

                    <Info
                        title="Status"
                        value="Open to Opportunities"
                    />

                </div>

            </div>

        </motion.div>
    );
}

function Info({
    title,
    value,
}: {
    title: string;
    value: string;
}) {

    return (

        <div className="flex justify-between border-b border-white/10 pb-3">

            <span className="text-gray-500">
                {title}
            </span>

            <span className="font-medium">
                {value}
            </span>

        </div>

    )

}