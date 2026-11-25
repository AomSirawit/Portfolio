import React from "react";

export default function UsesPage() {
  const categories = [
    {
      title: "Hardware",
      items: [
        { label: "Laptop", name: "MacBook Air" },
        { label: "PC", name: "Windows PC Setup" },
      ],
    },
    {
      title: "Dev Tools",
      items: [
        { label: "IDE", name: "Antigravity IDE" },
        { label: "Terminal", name: "iTerm2 Terminal" },
        { label: "Browser", name: "Google Chrome" },
        { label: "Design", name: "Figma" },
      ],
    },
    {
      title: "Productivity",
      items: [
        { label: "AI Tools", name: "Antigravity CLI, Gemini CLI" },
        { label: "Notes", name: "Apple Notes" },
        { label: "Tasks", name: "Apple Notes" },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-40 pb-20">
      <section className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Uses</h1>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            The stuff I use on a day-to-day basis to stay productive and build high-quality software.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-foreground/5 p-8 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors"
              >
                <h2 className="text-xl font-bold mb-6 text-accent-cyan">{category.title}</h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.label} className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">
                        {item.label}
                      </span>
                      <span className="text-md text-foreground/90 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-xs opacity-50 italic">
            * Inspired by the minimal desk setups and developer toolkits that prioritize speed and focus.
          </p>
        </div>
      </section>
    </main>
  );
}
