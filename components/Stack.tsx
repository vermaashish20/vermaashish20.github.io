import { stackData } from "@/data/portfolio";

export default function Stack() {
  return (
    <section id="t9-stack" className="py-32">
      <div className="mb-20">
        <h2 className="text-4xl lg:text-6xl text-black font-bold tracking-tighter">
          Engineering Suite
        </h2>
        <p className="text-black mt-4 text-sm lg:text-base font-medium max-w-2xl leading-relaxed">
          A comprehensive overview of my technical expertise across the AI lifecycle and
          full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-black">
        {/* AI / ML Section */}
        <div className="md:col-span-2 p-10 border-r border-b border-black group hover:bg-gray-50/50 transition-colors">
          <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest mb-10">
            AI / ML
          </h3>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {stackData.aiMl.map((tech) => (
              <p
                key={tech}
                className="text-sm lg:text-base font-bold text-black transition-all"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        {/* Programming Language Section */}
        <div className="p-10 border-r border-b border-black group hover:bg-gray-50/50 transition-colors">
          <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest mb-10">
            Programming Language
          </h3>
          <div className="space-y-4">
            {stackData.languages.map((lang) => (
              <div key={lang} className="flex items-center justify-between">
                <span className="text-sm lg:text-base font-bold text-black">{lang}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="p-10 border-r border-b border-black group hover:bg-gray-50/50 transition-colors">
          <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest mb-10">
            Infrastructure
          </h3>
          <div className="grid grid-cols-2 gap-y-4">
            {stackData.infrastructure.map((infra) => (
              <span
                key={infra}
                className="text-sm lg:text-base font-bold text-black"
              >
                {infra}
              </span>
            ))}
          </div>
        </div>

        {/* Web Dev Section */}
        <div className="p-10 border-r border-b border-black group hover:bg-gray-50/50 transition-colors">
          <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest mb-10">
            Web Dev
          </h3>
          <div className="space-y-4">
            {stackData.webDev.map((web) => (
              <p key={web} className="text-sm lg:text-base font-bold text-black">
                {web}
              </p>
            ))}
          </div>
        </div>

        {/* Databases Section */}
        <div className="p-10 border-r border-b border-black group hover:bg-gray-50/50 transition-colors">
          <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest mb-10">
            Databases
          </h3>
          <div className="space-y-2">
            {stackData.databases.core.map((db) => (
              <p key={db} className="text-sm lg:text-base font-bold text-black">
                {db}
              </p>
            ))}
            <div className="pt-4">
              <p className="text-[10px] md:text-xs text-black uppercase font-black tracking-widest mb-2">Vector DB</p>
              <p className="text-sm lg:text-base font-bold text-black">
                {stackData.databases.vector.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
