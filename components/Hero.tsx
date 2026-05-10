"use client";

import { useState } from "react";

export default function Hero() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      label: "Github",
      url: "https://github.com/vermaashish20",
      color: "#333",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/vermaashish20",
      color: "#0077b5",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      label: "Twitter / X",
      url: "https://twitter.com/AshishSuperVer1",
      color: "#000000",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      )
    }
  ];

  const lifecycleSteps = [
    {
      title: "Ideation",
      points: [
        "Analyzing needs for faster AI outcomes.",
        "Identifying high-value AI features."
      ]
    },
    {
      title: "Business Scope",
      points: [
        "Validating ideas against KPIs and ROI.",
        "Defining boundaries to avoid hassle."
      ]
    },
    {
      title: "Architecture",
      points: [
        "Selecting optimal tools (GenAI, Agents).",
        "Designing for UX and low latency."
      ]
    },
    {
      title: "Experimentation",
      points: [
        "Optimizing models for AI utility.",
        "Refining methods for best outcomes."
      ]
    },
    {
      title: "Deployment",
      points: [
        "Delivering robust production solutions.",
        "Implementing cloud or self-hosted rollouts."
      ]
    },
    {
      title: "Monitoring",
      points: [
        "Performance oversight for enhancements.",
        "Active feedback for iterative refinement."
      ]
    }
  ];

  return (
    <section id="t9-intro" className="flex flex-col items-center pt-24 pb-12 lg:pt-32">
      {/* Header: Name, Role, Image */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16 max-w-[1400px] w-full px-6">
        <div className="w-48 h-48 md:w-72 md:h-72 overflow-hidden shadow-[12px_12px_0px_0px_#facc15] flex-shrink-0">
          <img
            src="/daisy.jpg"
            alt="Ashishkumar Verma"
            className="w-full h-full object-cover transition-all duration-700 cursor-crosshair"
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-black mb-4 leading-none">
            Ashishkumar Verma
          </h1>
          <p className="text-sm md:text-2xl font-semibold italic uppercase tracking-[0.4em] text-indigo-600">
            AI/ML Engineer
          </p>
        </div>
      </div>

      {/* Production Lifecycle Boxes Graph with Larger Tooltips */}
      <div className="w-full max-w-[1400px] mb-20 px-6 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {lifecycleSteps.map((step, i, arr) => (
            <div key={step.title} className="flex items-center relative group">
              <span
                onMouseEnter={() => setHoveredStep(step.title)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`text-[10px] md:text-xs font-bold uppercase tracking-widest text-black border border-black px-4 py-2 transition-all cursor-help ${hoveredStep === step.title ? "bg-black text-white" : "bg-white"
                  }`}
              >
                {step.title}
              </span>

              {hoveredStep === step.title && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 md:w-72 p-4 bg-black text-white border border-black shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-1 duration-200">
                  <ul className="space-y-3">
                    {step.points.map((point) => (
                      <li key={point} className="text-xs md:text-sm font-medium leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                </div>
              )}

              {i < arr.length - 1 && (
                <div className="w-4 md:w-8 h-[2px] bg-indigo-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Philosophy and Connections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-[1400px] mx-auto items-start px-6">
        <div className="space-y-12 flex flex-col items-center md:items-start">
          <div className="py-2">
            <p className="text-lg md:text-2xl text-black leading-relaxed  italic  text-center md:text-left">
              "AI/ML Engineer specialized in building production-ready systems,
              bridging the gap between ideation and high-performance deployment."
            </p>
          </div>

          <button
            onClick={() => scrollToSection("t9-expertise")}
            className="group relative px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-indigo-600 shadow-xl"
          >
            View Expertise
          </button>
        </div>

        <div className="flex flex-col items-center text-center space-y-12 md:items-end md:text-right">
          <div className="space-y-6 flex flex-col items-center md:items-end">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-black">
              Network
            </p>
            <div className="flex flex-wrap justify-center  md:justify-end gap-x-12 gap-y-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 relative"
                >
                  <span
                    className="transition-all duration-300 group-hover:scale-125"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </span>
                  <span className="text-xs md:text-base font-medium font-semibold uppercase tracking-[0.1em] text-black transition-all group-hover:text-indigo-600">
                    {link.label}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-center md:justify-end gap-4">
            <button
              onClick={() => scrollToSection("t9-works")}
              className="px-8 py-4 border-2 border-black text-black text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white"
            >
              View Projects
            </button>
            <a
              href="#"
              className="px-8 py-4 bg-indigo-50 border-2 border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest text-center transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
