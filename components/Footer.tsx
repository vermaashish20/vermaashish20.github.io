export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-lg md:text-xl text-black font-medium italic font-serif-elegant leading-none">
          &quot;Dreams are meant to be forged and not be chased.&quot;
        </p>

        <div className="flex items-center justify-center gap-6">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
            Ashishkumar Verma
          </div>
          <div className="text-lg leading-none animate-pulse-red-indigo">♥</div>
        </div>
      </div>
    </footer>
  );
}
