export default function Contact() {
  const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/vermaashish20",
      color: "#333",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/vermaashish20",
      color: "#0077b5",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      label: "Twitter / X",
      url: "https://twitter.com/AshishSuperVer1",
      color: "#000000",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      )
    }
  ];

  return (
    <section id="t9-contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-[10px] md:text-xs font-bold text-black uppercase tracking-[0.4em] block mb-6">
              Network.Channel
            </span>
            <h2 className="text-4xl lg:text-6xl text-black font-bold tracking-tighter leading-[1.1] mb-12">
              Let&apos;s build the <br /> future of{" "}
              <span className="text-indigo-600 italic font-serif-elegant">Intelligence</span>.
            </h2>
            <p className="text-sm lg:text-base text-black font-medium leading-relaxed max-w-md">
              Open to collaborations, career opportunities, and consultancy roles where I can
              contribute to building impactful solutions.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-end space-y-12">
            <div className="space-y-8">
              <p className="text-[10px] md:text-xs font-black text-black uppercase tracking-[0.2em] border-b border-black pb-2 w-fit">
                Connect via Socials
              </p>
              <div className="flex flex-col gap-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-6"
                  >
                    <div 
                      className="p-3 border border-black group-hover:border-transparent transition-all duration-300 group-hover:scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none"
                      style={{ color: link.color }}
                    >
                      {link.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-1">
                        {link.label}
                      </span>
                      <span className="text-lg lg:text-2xl font-bold text-black group-hover:text-indigo-600 transition-colors tracking-tight">
                        {link.url.replace("https://", "")}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
