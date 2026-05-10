"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { projectsData } from "@/data/portfolio";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      {/* Header section flush with navbar */}
      <div className="pt-24 border-b border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <span className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] block mb-4">
            The Archive
          </span>
          <h1 className="text-4xl lg:text-7xl text-black font-bold tracking-tighter">
            Selected Works
          </h1>
        </div>
      </div>

      {/* Dense Projects List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divide-y divide-black/10">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group py-12 hover:bg-gray-50/50 transition-all flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Index Number */}
              <div className="text-2xl md:text-3xl font-mono font-black text-indigo-600 shrink-0">
                {project.num}
              </div>

              {/* Content Block */}
              <div className="flex-1 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-xl md:text-2xl font-bold tracking-tight text-black hover:text-indigo-600 transition-colors block"
                    >
                      {project.title}
                    </Link>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black border border-black px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-black text-white px-4 py-2 hover:bg-indigo-600 transition-colors"
                    >
                      Source / Demo
                    </a>
                  </div>
                </div>

                <p className="text-sm md:text-base text-black font-medium leading-relaxed max-w-3xl">
                  {project.desc}
                </p>

                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-indigo-600 hover:translate-x-2 transition-transform inline-flex items-center gap-2"
                >
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact />
    </main>
  );
}
