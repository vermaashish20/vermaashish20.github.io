"use client";

import { useState } from "react";
import { projectsData } from "@/data/portfolio";
import Link from "next/link";

interface ProjectsProps {
  featuredOnly?: boolean;
  showViewAll?: boolean;
}

export default function Projects({ featuredOnly = false, showViewAll = true }: ProjectsProps) {
  const [openProjects, setOpenProjects] = useState<{ [key: number]: boolean }>({});

  const toggleProject = (id: number) => {
    setOpenProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  let projects = featuredOnly 
    ? projectsData.filter(p => p.featured) 
    : projectsData;

  // On home page (featuredOnly), we only want to show the top 2 projects initially if requested
  const displayProjects = (featuredOnly && showViewAll) ? projects.slice(0, 2) : projects;

  return (
    <section id="t9-works" className="py-24 relative overflow-hidden">
      <div className="mb-20">
        <span className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] block mb-4">
          {featuredOnly ? "Featured Works" : "Selected Works"}
        </span>
        <h2 className="text-4xl lg:text-6xl text-black font-bold tracking-tighter">
          Project Portfolio
        </h2>
      </div>

      <div>
        {displayProjects.map((project) => (
          <div key={project.id} className="border-b border-black group">
            <div
              onClick={() => toggleProject(project.id)}
              className="w-full py-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 hover:bg-gray-50 transition-colors text-left cursor-pointer"
            >
              <span className="text-4xl md:text-6xl font-mono font-black text-indigo-600 transition-colors w-24">
                {project.num}
              </span>
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-6">
                  <h3 className="text-base lg:text-xl font-bold text-black uppercase tracking-tight group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black border border-black px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm lg:text-base text-black font-medium leading-relaxed max-w-2xl">{project.desc}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-black text-white hover:bg-indigo-600 px-6 py-3 transition-all z-10 shrink-0 mr-4"
              >
                {project.id === 1 ? "GitHub Source" : "Live Demo"}
              </a>
              <div className={`transition-transform duration-500 mr-4 shrink-0 ${openProjects[project.id] ? "rotate-180" : ""}`}>
                <svg className="w-8 h-8 text-black group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {openProjects[project.id] && (
              <div className="px-6 md:px-24 pb-12">
                <div className="max-w-4xl">
                  <ul className="flex flex-col gap-y-4">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 text-sm lg:text-base text-black font-medium leading-relaxed">
                        <span className="text-black mt-1.5 shrink-0">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {featuredOnly && showViewAll && (
        <div className="mt-16 flex justify-center md:justify-start">
          <Link
            href="/projects"
            className="group relative px-10 py-5 bg-black text-white text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-indigo-600 shadow-[8px_8px_0px_0px_rgba(79,70,229,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
}
