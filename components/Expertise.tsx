import { expertiseCategories } from "@/data/portfolio";

export default function Expertise() {
  return (
    <section id="t9-expertise" className="py-24">
      <div className="mb-20">
        <span className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-[0.4em] block mb-2">
          Domain Specialization
        </span>
        <h2 className="text-4xl lg:text-6xl text-black font-bold tracking-tighter">
          Core Expertise
        </h2>
      </div>

      <div className="space-y-16">
        {expertiseCategories.map((group) => (
          <div key={group.category} className="group">
            {/* Category Header (Items-Header) */}
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-xl lg:text-2xl font-black text-black uppercase tracking-widest">
                {group.category}
              </h3>
              <div className="flex-1 h-[1px] bg-black group-hover:bg-indigo-600 transition-colors"></div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {group.items.map((item) => (
                <div key={item.title} className="relative pl-6 border-l border-black hover:border-indigo-600 transition-colors">
                  {/* Item Subheader */}
                  <h4 className="text-base lg:text-xl font-bold text-black tracking-tight mb-3">
                    {item.title}
                  </h4>
                  {/* Items Body */}
                  <p className="text-sm lg:text-base text-black font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
