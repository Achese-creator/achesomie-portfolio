import { ReactNode } from "react";

interface GradientTextProps {
    children: ReactNode;
}

export default function GradientText({
    children,
}: GradientTextProps) {
    return (
        <span className="bg-gradient-to-r from-[#006E59] via-[#F9FDFD] to-[#F7BD53] bg-clip-text text-transparent">
            {children}
        </span>
    );
}