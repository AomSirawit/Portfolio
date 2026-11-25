export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-10 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-60 font-bold border-t border-foreground/5 mt-20">
      <div>
        © 2024 Built with <span className="text-red-500 mx-0.5">❤️</span> by Sirawit Makdee
      </div>
      <div className="flex gap-6">
        <a href="/uses" className="hover:text-accent-cyan transition-colors">Uses</a>
        <a href="/tech-stack" className="hover:text-accent-cyan transition-colors">Tech Stack</a>
      </div>
    </footer>
  );
}