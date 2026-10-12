import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
}

export default function Section({
    children,
    id,
}: SectionProps) {
    return (
        <section
            id={id}
            className="relative py-28 md:py-36"
        >
            {children}
        </section>
    );
}