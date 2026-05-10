import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { projectsData } from "@/data/portfolio";
import Link from "next/link";
import { notFound } from "next/navigation";

// For static export, we need to generate params for all routes at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      {/* Simplified Header: Title, Tags, Source, Back */}
      <div className="pt-24 pb-8 border-b border-black">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-6">
            {/* Back Button */}
            <Link 
              href="/projects"
              className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-indigo-600 hover:translate-x-[-8px] transition-transform flex items-center gap-2 w-fit"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to Archive
            </Link>

            <div className="space-y-6">
              <h1 className="text-xl md:text-2xl font-black uppercase tracking-widest text-black leading-tight">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-black border border-black px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="hidden md:block w-12 h-[1px] bg-black"></div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-black transition-colors underline underline-offset-4 decoration-2"
                >
                  Explore Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Minimalist Body */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="space-y-16">
          <p className="text-base md:text-xl text-black font-medium leading-relaxed italic border-l-4 border-black pl-8">
            {project.desc}
          </p>

          <div className="space-y-12">
            {project.details.map((detail, idx) => (
              <p key={idx} className="text-sm md:text-base text-black font-medium leading-relaxed">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Footer (Contact) */}
      <Contact />
    </main>
  );
}
