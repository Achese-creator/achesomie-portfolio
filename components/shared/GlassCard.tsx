import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export default function GlassCard({
    children,
    className,
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl",
                "shadow-[0_8px_40px_rgba(0,0,0,0.25)]",
                "transition-all duration-300",
                "hover:-translate-y-2",
                "hover:border-blue-500/40",
                "hover:bg-white/10",
                className
            )}
        >
            {children}
        </div>
    );
}