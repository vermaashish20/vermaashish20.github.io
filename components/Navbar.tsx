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

type NavItem = (typeof navItems)[number];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isNavItemActive = (item: NavItem) => {
    if (item.path === "/projects") {
      return pathname.startsWith("/projects");
    }

    return pathname === item.path && activeSection === item.id;
  };

  const handleNavClick = (item: NavItem) => {
    setIsMenuOpen(false);

    if (item.path !== pathname) {
      router.push(item.path === "/" ? `/#${item.id}` : item.path);
      return;
    }

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
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md border-b border-black"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex min-h-16 items-center justify-between md:justify-center">
          <Link
            href="/"
            className="sm:hidden text-xs font-black uppercase tracking-[0.24em] text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Ashish
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center border border-black bg-white text-black"
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-full bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-[2px] w-full bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <div className="hidden sm:flex items-center gap-4 md:gap-8 lg:gap-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className="group relative py-1 outline-none cursor-pointer"
              >
                <span
                  className={`text-xs lg:text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isNavItemActive(item)
                      ? "text-indigo-600"
                      : "text-black group-hover:text-indigo-600"
                  }`}
                >
                  {item.label}
                </span>
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-600 transition-all duration-300 ${
                    isNavItemActive(item)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden overflow-hidden border-t border-black bg-white transition-[max-height,opacity] duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className="group flex w-full items-center justify-between border-b border-black/10 py-5 text-left outline-none"
            >
              <span
                className={`text-sm font-black uppercase tracking-[0.2em] transition-colors ${
                  isNavItemActive(item)
                    ? "text-indigo-600"
                    : "text-black group-hover:text-indigo-600"
                }`}
              >
                {item.label}
              </span>
              <span className="text-indigo-600 transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
