import Navbar from "@/components/Navbar";
import History from "@/components/History";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <main>
      <Navbar />
      <div className="w-full px-6 md:px-12 lg:px-16 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <History />
          <div className="mt-20 flex justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-indigo-700 shadow-xl"
            >
              Download Full PDF Resume
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
