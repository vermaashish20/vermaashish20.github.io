import { experienceData, educationData } from "@/data/portfolio";

export default function History() {
  return (
    <section id="t9-history" className="py-24">
      <div className="mb-20">
        <h2 className="text-4xl lg:text-6xl text-black font-bold tracking-tighter">Career Timeline</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <span className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest block mb-12 border-b border-black pb-2 w-fit">
            Experience
          </span>
          <div className="space-y-16">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="group relative">
                <span className="text-[10px] md:text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest mb-4 block">
                  {exp.period}
                </span>
                <h3 className="text-base lg:text-xl font-bold text-black tracking-tight mb-2">{exp.role}</h3>
                <p className="text-sm lg:text-base font-bold text-indigo-600 uppercase tracking-widest mb-6">
                  {exp.company}
                </p>
                <div className="text-sm lg:text-base text-black font-medium leading-relaxed space-y-4">
                  {exp.details.map((detail, dIdx) => (
                    <p key={dIdx}>• {detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest block mb-12 border-b border-black pb-2 w-fit">
            Academic
          </span>
          <div className="space-y-16">
            <div className="group relative">
              <span className="text-[10px] md:text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest mb-4 block">
                GRADUATED
              </span>
              <h3 className="text-base lg:text-xl font-bold text-black tracking-tight mb-2">
                {educationData.degree}
              </h3>
              <p className="text-sm lg:text-base font-bold text-indigo-600 uppercase tracking-widest mb-6">
                {educationData.school}
              </p>
              <p className="text-sm lg:text-base text-black font-medium leading-relaxed">
                Specialization in {educationData.specialization}. <br />{" "}
                <strong className="block mt-2">CGPA: {educationData.cgpa}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
