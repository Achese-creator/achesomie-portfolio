interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
}: SectionHeadingProps) {
    return (
        <div className="mb-14 max-w-2xl">
            {eyebrow && (
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-4xl font-bold text-white md:text-5xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-5 text-lg leading-8 text-gray-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}