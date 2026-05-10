import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Stack from "@/components/Stack";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Hero />
          <Expertise />
          <Stack />
          <History />
          <Projects featuredOnly={true} />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
}
