export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-gray-500">
        © {new Date().getFullYear()} Achesomie Goni Yifieyeh.
        Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}