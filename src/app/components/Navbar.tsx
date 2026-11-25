import { FaGithub, FaXTwitter } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="text-foreground px-6 py-6 fixed w-full z-10 top-0 start-0 bg-transparent">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter">
          <a href="/" className="flex items-center gap-1">
            <span className="text-accent-cyan">//</span>
            <span>SM</span>
          </a>
        </div>
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="/#resume" className="hover:text-accent-cyan transition-colors">Resume</a>
          <a href="/#contact" className="hover:text-accent-cyan transition-colors">Contact</a>
          <div className="flex items-center gap-4 border-l border-foreground/20 pl-8">
            <a href="https://twitter.com" target="_blank" className="text-lg hover:text-accent-cyan transition-colors"><FaXTwitter /></a>
            <a href="https://github.com" target="_blank" className="text-lg hover:text-accent-cyan transition-colors"><FaGithub /></a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
