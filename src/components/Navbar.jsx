import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/95 shadow-lg" : "bg-[#0a0a0f]/75 backdrop-blur-xl border-b border-white/5"}`}>

        <div className="flex items-center gap-0.5 cursor-pointer select-none">
          <span className="font-black text-lg md:text-xl text-violet-400 tracking-tight">ahsan</span>
          <span className="font-black text-lg md:text-xl text-white tracking-tight">dev</span>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse ml-2" />
        </div>

        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 block ${active === link ? "text-white bg-white/10" : "text-white/50 hover:text-white hover:bg-white/5"}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download="Muhammad_Ahsan_Resume.pdf"
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_15px_rgba(139,92,246,0.4)]"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12M7 11l5 5 5-5M5 19h14" />
          </svg>
          Download CV
        </a>

        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div className={`fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <div className="bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => handleLinkClick(link)}
              className={`px-4 py-3 rounded-lg text-sm transition-all duration-200 block ${active === link ? "text-white bg-white/10" : "text-white/50 hover:text-white hover:bg-white/5"}`}
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Muhammad_Ahsan_Resume.pdf"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12M7 11l5 5 5-5M5 19h14" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}