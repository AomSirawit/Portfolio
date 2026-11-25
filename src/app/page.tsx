import React from "react";
import { FaGithub, FaLinkedin, FaReddit, FaXTwitter, FaPhp, FaLaravel, FaPython, FaJs, FaReact } from "react-icons/fa6";
import { SiUpwork, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Home() {
  const skills = [
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  const workHistory = [
    {
      role: "Programmer",
      company: "Orange Technology Solution",
      location: "Bangkok · Hybrid",
      type: "Full-time",
      period: "Jun 2025 - Present",
      description: [
        "Developed ERP web applications and designed underlying database structures.",
        "Developed and deployed a fully functional e-commerce web platform.",
        "Created a traceability web system for tracking liquid latex production and distribution.",
        "Implemented Laravel task scheduling to automate and optimize background system operations.",
        "Automated project changelog generation workflows utilizing Python and the Gemini API.",
      ],
    },
    {
      role: "Programmer Internship",
      company: "Orange Technology Solution",
      location: "Bangkok, Thailand · Hybrid",
      type: "Internship",
      period: "Jun 2024 - Oct 2024",
      description: [
        "Developed and implemented new features for the CRM system using Laravel, MySQL and PHP.",
        "Scanned, troubleshot, and resolved malware infections on client websites to ensure data security.",
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-40 pb-20">
      <section className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Hey, I'm <span className="text-accent-cyan">Sirawit Makdee!</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            A freelance full-stack engineer based in <span className="text-foreground border-b border-accent-cyan pb-0.5">Bangkok, Thailand</span>. 
            I specialize in developing applications using the React ecosystem. 
            Currently, I'm focusing on building high-performance web solutions.
          </p>

          {/* Wavy Separator */}
          <div className="mb-12">
            <svg
              width="100"
              height="15"
              viewBox="0 0 100 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent-cyan stroke-current stroke-2"
            >
              <path
                d="M1 12C5 12 8 2 12 2C16 2 19 12 23 12C27 12 30 2 34 2C38 2 41 12 45 12C49 12 52 2 56 2C60 2 63 12 67 12C71 12 74 2 78 2C82 2 85 12 89 12C93 12 96 2 100 2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4">Find me on</h2>
              <div className="flex flex-wrap gap-6 items-center">
                <a href="https://twitter.com" target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-accent-cyan transition-colors group">
                  <FaXTwitter className="text-lg" /> <span>Twitter</span>
                </a>
                <a href="https://github.com/AomSirawit" target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-accent-cyan transition-colors group">
                  <FaGithub className="text-lg" /> <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-accent-cyan transition-colors group">
                  <FaReddit className="text-lg" /> <span>Reddit</span>
                </a>
                <a href="https://www.linkedin.com/in/sirawit-makdee-415714277/" target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-accent-cyan transition-colors group">
                  <FaLinkedin className="text-lg" /> <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-accent-cyan transition-colors group">
                  <SiUpwork className="text-lg" /> <span>Upwork</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4">Contact</h2>
              <p className="text-sm text-foreground/70">
                You can reach me out anytime at{" "}
                <a
                  href="mailto:makdeesirawit@gmail.com"
                  className="text-foreground border-b border-accent-cyan pb-0.5 hover:text-accent-cyan transition-colors"
                >
                  makdeesirawit@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Resume Section */}
          <div id="resume" className="mt-32">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-8">My Resume / CV</h2>
            
            {/* Skills */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-8">Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-foreground/5 p-3 rounded-lg border border-foreground/10 hover:border-accent-cyan transition-colors group"
                  >
                    <span className="text-2xl group-hover:text-accent-cyan transition-colors">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Work History</h3>
              <div className="space-y-12">
                {workHistory.map((job, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent-cyan before:rounded-full after:content-[''] after:absolute after:left-[5px] after:top-6 after:w-[2px] after:h-[calc(100%+20px)] after:bg-foreground/10 last:after:hidden">
                    <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <h4 className="text-xl font-bold">{job.role}</h4>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan">{job.type}</span>
                    </div>
                    <div className="text-sm font-bold text-foreground/90 mb-1">
                      {job.company} • {job.location}
                    </div>
                    <div className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-4">
                      {job.period}
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, i) => (
                        <li key={i} className="text-sm text-foreground/70 leading-relaxed list-disc list-inside">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Works Section */}
          <div className="mt-32">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-8">Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: "saboard",
                  title: "Saboard Website",
                  description: "A CMS-based student affairs support application for managing FAQs and news.",
                  tech: ["Laravel", "Tailwind", "MySQL"],
                  link: "https://saboard.chesster.net/",
                },
                {
                  id: "finhome",
                  title: "Finhome",
                  description: "Real estate CMS platform developed as a frontend engineer using React and Tailwind.",
                  tech: ["ReactJS", "Tailwind"],
                  link: "https://finhome.co.th/",
                },
                {
                  id: "itfeature",
                  title: "ITFeature",
                  description: "A freelance service platform built with Next.js and Tailwind CSS.",
                  tech: ["Nextjs", "TailwindCSS"],
                  link: "https://itfeature.vercel.app/",
                },
                {
                  id: "movie-search",
                  title: "MovieSearch",
                  description: "A movie discovery app utilizing the OMDb API, built with VueJS.",
                  tech: ["VueJS", "TailwindCSS"],
                  link: "https://smovies-search.netlify.app/",
                },
              ].map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  className="group block p-8 bg-foreground/5 rounded-2xl border border-foreground/10 hover:border-accent-cyan transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-foreground/5 rounded-md border border-foreground/10 opacity-60">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Get in touch Section */}
          <div id="contact" className="mt-32">
            <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-lg text-foreground/70 mb-8">Do you have an exciting project? Let's talk!</p>
            
            <div className="mb-10">
              <svg
                width="100"
                height="15"
                viewBox="0 0 100 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent-cyan stroke-current stroke-2"
              >
                <path
                  d="M1 12C5 12 8 2 12 2C16 2 19 12 23 12C27 12 30 2 34 2C38 2 41 12 45 12C49 12 52 2 56 2C60 2 63 12 67 12C71 12 74 2 78 2C82 2 85 12 89 12C93 12 96 2 100 2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-foreground/80">
                You can reach me out anytime at{" "}
                <a
                  href="mailto:makdeesirawit@gmail.com"
                  className="text-foreground border-b border-accent-cyan pb-0.5 hover:text-accent-cyan transition-colors"
                >
                  makdeesirawit@gmail.com
                </a>
              </p>
              <p className="text-sm text-foreground/80">
                As a backup option, you can{" "}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-foreground border-b border-accent-cyan pb-0.5 hover:text-accent-cyan transition-colors"
                >
                  DM me on X
                </a>
              </p>
              <p className="text-sm text-foreground/50 italic">
                I usually respond right away on business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}