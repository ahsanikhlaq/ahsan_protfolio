import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const spring = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { type: "spring", stiffness: 80, damping: 18, mass: 0.8, delay },
});

const roles = ["Shopify Developer", "React Developer", "Full Stack Developer", "Web Developer"];

const stats = [
  { value: "3+",   label: "Years Exp." },
  { value: "50+",  label: "Projects" },
  { value: "30+",  label: "Clients" },
  { value: "5.0★", label: "Rating", highlight: true },
];

const skillBadges = ["Shopify Liquid", "React", "JavaScript", "HTML & CSS", "API Integration", "GitHub"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 md:px-16 pt-16 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />
      {/* Glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

        {/* ── Left — text ── */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">

          <motion.div {...spring(0.1)} className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Available for work
          </motion.div>

          <motion.div {...spring(0.2)} className="flex flex-col gap-2">
            <p className="text-white/50 text-base md:text-lg font-light tracking-widest uppercase">
              Hi there, I am
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Muhammad Ahsan
              <span className="text-violet-500">.</span>
            </h1>
            <div className="flex items-center gap-2 justify-center md:justify-start h-10">
              <span className="text-lg md:text-2xl lg:text-3xl font-semibold text-violet-400">
                {displayed}
              </span>
              <span className="w-0.5 h-6 md:h-8 bg-violet-500 animate-pulse" />
            </div>
          </motion.div>

          <motion.div {...spring(0.3)} className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
            <div className="flex items-center gap-2 bg-[#96bf48]/10 border border-[#96bf48]/30 text-[#96bf48] text-xs font-semibold px-4 py-2 rounded-full">
              🛍️ Shopify Expert · ~3 Years
            </div>
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full">
              ⚛️ React Developer
            </div>
          </motion.div>

          <motion.p {...spring(0.4)} className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            I build fast, beautiful, and scalable web applications. Specialized in
            <span className="text-[#96bf48] font-medium"> Shopify Liquid</span>,
            <span className="text-violet-400 font-medium"> React</span>, and
            <span className="text-violet-400 font-medium"> JavaScript</span> — converting Figma designs into real, high-performing stores.
          </motion.p>

          <motion.div {...spring(0.5)} className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
            >
              View Projects
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              download="Muhammad_Ahsan_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-px"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12M7 11l5 5 5-5M5 19h14" />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-px"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div {...spring(0.6)} className="flex items-center gap-6 justify-center md:justify-start pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/30 hover:text-violet-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:ahsanikhlaq59@gmail.com" className="text-white/30 hover:text-violet-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

        </div>

        {/* ── Right — stats card ── */}
        <motion.div {...spring(0.35)} className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
          <div className="relative w-full max-w-sm">

            {/* Glow orbs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-violet-800/15 rounded-full blur-3xl pointer-events-none" />

            {/* Main card */}
            <div className="relative bg-white/[0.03] border border-violet-500/25 rounded-3xl p-7 backdrop-blur-sm">

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/[0.06]">
                <div className="w-11 h-11 rounded-xl bg-[#96bf48]/10 border border-[#96bf48]/25 flex items-center justify-center text-2xl">🛍️</div>
                <div>
                  <p className="text-white font-bold text-sm">Shopify Developer</p>
                  <p className="text-[#96bf48] text-xs font-medium">Convertt.co · Jan 2024–Present</p>
                </div>
                <div className="ml-auto w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4 text-center hover:border-violet-500/20 transition-all duration-200">
                    <p className={`text-2xl font-extrabold ${s.highlight ? "text-violet-400" : "text-white"}`}>{s.value}</p>
                    <p className="text-white/40 text-[11px] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-1.5">
                {skillBadges.map((badge) => (
                  <span key={badge} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-3 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl px-3 py-2 backdrop-blur-sm shadow-lg">
              <p className="text-yellow-400 text-[11px] font-semibold">🏆 Award Winner</p>
            </div>
            <div className="absolute -bottom-4 -left-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-3 py-2 backdrop-blur-sm shadow-lg">
              <p className="text-emerald-400 text-[11px] font-semibold">✅ Open to Work</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
