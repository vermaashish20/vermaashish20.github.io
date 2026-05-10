"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const navItems = [
  { id: "t9-expertise", label: "Expertise", path: "/" },
  { id: "t9-stack", label: "Skills", path: "/" },
  { id: "t9-history", label: "Career", path: "/" },
  { id: "t9-works", label: "Projects", path: "/projects" },
  { id: "t9-contact", label: "Connect", path: "/" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id") || "");
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.path !== pathname) {
      // If navigating to a different page (like from Home to /projects or vice versa)
      router.push(item.path);
      // If going to home, we might want to scroll after navigation, but for now just let it land
      return;
    }

    // If already on the page the link points to
    if (item.id) {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-black py-4" 
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center items-center">
        {/* Centered Links */}
        <div className="flex items-center gap-6 md:gap-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="group relative py-1 outline-none cursor-pointer"
            >
              <span
                className={`text-[11px] md:text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  (pathname === item.path && (item.id === "" || activeSection === item.id))
                    ? "text-indigo-600" 
                    : "text-black group-hover:text-indigo-600"
                }`}
              >
                {item.label}
              </span>
              <div
                className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-600 transition-all duration-300 ${
                  (pathname === item.path && (item.id === "" || activeSection === item.id))
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
