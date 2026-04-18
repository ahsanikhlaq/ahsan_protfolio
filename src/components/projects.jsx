import { useState } from "react";
import Reveal from "./Reveal";

const tabs = ["All", "Shopify", "Full Stack"];

const projects = [
  {
    id: 1,
    title: "Lumière — Luxury Candle Store",
    description: "A luxury Shopify store for a handmade candle brand. Custom scent collection filters, elegant product pages, and a smooth cart drawer experience.",
    tags: ["Shopify Liquid", "Tailwind CSS", "JavaScript", "Metafields"],
    category: "Shopify",
    gradient: "from-amber-600/30 to-yellow-900/30",
    accent: "yellow",
    icon: "🕯️",
    live: "https://www.paddywax.com",
    featured: true,
  },
  {
    id: 2,
    title: "Verdant — Organic Skincare Store",
    description: "A nature-inspired Shopify store for an organic skincare brand. Ingredient storytelling pages, before/after sliders, and subscription product support.",
    tags: ["Shopify Liquid", "Custom Sections", "JavaScript", "Metafields"],
    category: "Shopify",
    gradient: "from-emerald-600/30 to-teal-900/30",
    accent: "emerald",
    icon: "🌿",
    live: "https://www.herbivore.com",
    featured: true,
  },
  {
    id: 3,
    title: "Stryde — Minimal Sneaker Store",
    description: "A bold editorial-style Shopify store for a sneaker brand. Custom size guide modal, lookbook page via metaobjects, and a fully branded checkout.",
    tags: ["Shopify Liquid", "Metaobjects", "Custom Sections", "JavaScript"],
    category: "Shopify",
    gradient: "from-slate-600/30 to-gray-900/30",
    accent: "violet",
    icon: "👟",
    live: "https://www.koio.co",
    featured: true,
  },
  {
    id: 4,
    title: "Aurore — Jewelry Boutique",
    description: "An elegant Shopify store for a fine jewelry brand. Engraving customization, video backgrounds on collection pages, ring sizer tool, and gifting flows.",
    tags: ["Shopify Liquid", "Tailwind CSS", "Metafields", "JavaScript"],
    category: "Shopify",
    gradient: "from-rose-600/30 to-pink-900/30",
    accent: "pink",
    icon: "💍",
    live: "https://www.mejuri.com",
    featured: false,
  },
  {
    id: 5,
    title: "Nomad — Headless Travel Gear Store",
    description: "A headless Shopify storefront built with Next.js and Storefront API. Custom product bundle builder, adventure blog, and 99 Lighthouse score.",
    tags: ["Next.js", "Storefront API", "Headless", "Tailwind CSS"],
    category: "Shopify",
    gradient: "from-orange-600/30 to-amber-900/30",
    accent: "orange",
    icon: "🎒",
    live: "https://www.cotopaxi.com",
    featured: false,
  },
  {
    id: 7,
    title: "TaskFlow — Project Manager",
    description: "A full stack project management app with drag-and-drop kanban boards, real-time collaboration, file attachments, and role-based access control.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Full Stack",
    gradient: "from-blue-600/30 to-cyan-900/30",
    accent: "blue",
    icon: "📋",
    live: "https://linear.app",
    featured: true,
  },
  {
    id: 8,
    title: "QuickInvoice — Billing SaaS",
    description: "A full stack invoicing SaaS for freelancers. Create professional invoices, track payments, set recurring billing, and get notified when clients pay.",
    tags: ["React", "Express.js", "MySQL", "REST API"],
    category: "Full Stack",
    gradient: "from-pink-600/30 to-rose-900/30",
    accent: "pink",
    icon: "🧾",
    live: "https://www.bonsai.io",
    featured: false,
  },
  {
    id: 9,
    title: "TalkBox — Chat Application",
    description: "A real-time chat app with group rooms, direct messages, image sharing, emoji reactions, and read receipts — built with Socket.io and PWA support.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Full Stack",
    gradient: "from-cyan-600/30 to-sky-900/30",
    accent: "cyan",
    icon: "💬",
    live: "https://slack.com",
    featured: false,
  },
  {
    id: 10,
    title: "LearnSpace — E-Learning Platform",
    description: "A full stack e-learning platform where instructors upload video courses and students track progress, take quizzes, and earn certificates.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    category: "Full Stack",
    gradient: "from-yellow-600/30 to-amber-900/30",
    accent: "yellow",
    icon: "🎓",
    live: "https://www.teachable.com",
    featured: false,
  },
];

const accentMap = {
  violet:  "border-violet-500/30 hover:border-violet-500/60",
  blue:    "border-blue-500/30 hover:border-blue-500/60",
  emerald: "border-emerald-500/30 hover:border-emerald-500/60",
  orange:  "border-orange-500/30 hover:border-orange-500/60",
  pink:    "border-pink-500/30 hover:border-pink-500/60",
  yellow:  "border-yellow-500/30 hover:border-yellow-500/60",
  cyan:    "border-cyan-500/30 hover:border-cyan-500/60",
};

const tagMap = {
  violet:  "bg-violet-500/10 text-violet-300 border-violet-500/20",
  blue:    "bg-blue-500/10 text-blue-300 border-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  orange:  "bg-orange-500/10 text-orange-300 border-orange-500/20",
  pink:    "bg-pink-500/10 text-pink-300 border-pink-500/20",
  yellow:  "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  cyan:    "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
};

function ProjectCard({ project }) {
  const [imgState, setImgState] = useState("loading"); // loading | loaded | error
  const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.live)}?w=700&h=420`;

  return (
    <div className={`relative group bg-white/[0.02] border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${accentMap[project.accent]}`}>

      {/* Clickable thumbnail */}
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="block relative h-56 overflow-hidden cursor-pointer"
        aria-label={`Visit ${project.title}`}
      >
        {/* Skeleton shown while loading */}
        {imgState === "loading" && (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-3`}>
            <span className="text-5xl animate-pulse">{project.icon}</span>
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <p className="text-white/30 text-[10px] font-medium">Loading preview…</p>
          </div>
        )}

        {/* Error fallback */}
        {imgState === "error" && (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
            <span className="text-6xl">{project.icon}</span>
          </div>
        )}

        {/* Actual screenshot */}
        <img
          src={screenshotUrl}
          alt={`${project.title} screenshot`}
          onLoad={() => setImgState("loaded")}
          onError={() => setImgState("error")}
          className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${imgState === "loaded" ? "opacity-100" : "opacity-0 absolute inset-0"}`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-all duration-300" />

        {/* Hover pill */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Open Live Site
          </div>
        </div>

        {/* Badges */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-violet-400/30 z-10">
            ⭐ Featured
          </div>
        )}
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10 z-10">
          {project.category}
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#0d0d14] to-transparent pointer-events-none" />
      </a>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-white font-bold text-base leading-tight group-hover:text-violet-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${tagMap[project.accent]}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 pt-3 border-t border-white/[0.06]">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_15px_rgba(139,92,246,0.3)]"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            View Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="bg-[#0a0a0f] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <Reveal direction="up">
          <div className="text-center mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              What I Have Built
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              My Projects
              <span className="text-violet-500">.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Beautiful Shopify stores, headless storefronts, and full stack web apps built from scratch.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeTab === tab
                    ? "bg-violet-600 border-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    : "bg-white/[0.03] border-white/[0.08] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {tab}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab ? "bg-white/20 text-white" : "bg-white/5 text-white/30"}`}>
                  {tab === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === tab).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
