"use client";

import { useEffect, useState } from "react";

interface Props {
    command: string;
}

export default function TypingCommand({ command }: Props) {
    const [text, setText] = useState("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setText(command.slice(0, i));
            i++;

            if (i > command.length) {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [command]);

    return (
        <p className="font-mono text-[#F7BD53]">
            {text}
            <span className="animate-pulse">█</span>
        </p>
    );
}