import { ReactNode } from "react";

interface GradientTextProps {
    children: ReactNode;
}

export default function GradientText({
    children,
}: GradientTextProps) {
    return (
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            {children}
        </span>
    );
}