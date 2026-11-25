import React from "react";
import { FaPhp, FaLaravel, FaPython, FaJs, FaReact, FaGithub, FaDocker } from "react-icons/fa6";
import { SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiRedis } from "react-icons/si";

export default function TechStackPage() {
  const tech = [
    { name: "React", icon: <FaReact />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript />, category: "Language" },
    { name: "PHP", icon: <FaPhp />, category: "Backend" },
    { name: "Laravel", icon: <FaLaravel />, category: "Backend" },
    { name: "MySQL", icon: <SiMysql />, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database" },
    { name: "Redis", icon: <SiRedis />, category: "Database" },
    { name: "Python", icon: <FaPython />, category: "Language" },
    { name: "JavaScript", icon: <FaJs />, category: "Language" },
    { name: "Docker", icon: <FaDocker />, category: "Infrastructure" },
  ];

  return (
    <main className="min-h-screen pt-40 pb-20">
      <section className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Tech Stack</h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            The core technologies and frameworks I use to build scalable, modern web applications.
          </p>

          {/* Wavy Separator */}
          <div className="mb-12">
            <svg
              width="100"
              height="15"
              viewBox="0 0 100 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent-yellow stroke-current stroke-2"
            >
              <path
                d="M1 12C5 12 8 2 12 2C16 2 19 12 23 12C27 12 30 2 34 2C38 2 41 12 45 12C49 12 52 2 56 2C60 2 63 12 67 12C71 12 74 2 78 2C82 2 85 12 89 12C93 12 96 2 100 2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tech.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center p-8 bg-foreground/5 rounded-2xl border border-foreground/10 hover:border-accent-cyan transition-all hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 group-hover:text-accent-cyan transition-colors">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-foreground/90">{item.name}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 mt-1">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}