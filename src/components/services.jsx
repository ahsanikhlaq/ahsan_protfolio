import Reveal from "./Reveal";

const services = [
  {
    id: 1,
    icon: "🎨",
    title: "Custom Shopify Theme Development",
    description: "I build stunning, fully custom Shopify themes from scratch using Liquid and Tailwind CSS. Every theme is fast, mobile-first, and designed to convert visitors into customers.",
    features: ["Custom Liquid Sections", "Mobile Responsive", "PageSpeed Optimized", "Brand Focused Design"],
    color: "violet",
    gradient: "from-violet-600/15 to-purple-900/10",
  },
  {
    id: 2,
    icon: "💳",
    title: "Checkout UI Extensions",
    description: "I extend the Shopify checkout experience with custom UI extensions — adding upsells, gift messages, loyalty points, and custom fields directly inside the native checkout flow.",
    features: ["Upsell Offers", "Gift Wrapping", "Loyalty Points", "Custom Fields"],
    color: "emerald",
    gradient: "from-emerald-600/15 to-teal-900/10",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Headless Shopify Development",
    description: "I build blazing-fast headless Shopify storefronts using Next.js and the Storefront API. Perfect for brands that need full design freedom and maximum performance.",
    features: ["Next.js Frontend", "Storefront API", "99 Lighthouse Score", "Full Design Freedom"],
    color: "orange",
    gradient: "from-orange-600/15 to-amber-900/10",
  },
  {
    id: 4,
    icon: "🛠️",
    title: "Shopify App Development",
    description: "I develop custom Shopify apps that extend store functionality — from multi-vendor marketplaces to inventory sync tools and loyalty reward systems using the Admin API and Webhooks.",
    features: ["Admin API", "Webhooks", "Custom Dashboards", "Theme App Extensions"],
    color: "blue",
    gradient: "from-blue-600/15 to-cyan-900/10",
  },
  {
    id: 5,
    icon: "🚀",
    title: "Full Stack Web Development",
    description: "I build complete full stack web applications using React and Node.js — from SaaS platforms and dashboards to real-time apps and REST APIs, delivered clean and scalable.",
    features: ["React Frontend", "Node.js Backend", "MongoDB / MySQL", "REST APIs"],
    color: "pink",
    gradient: "from-pink-600/15 to-rose-900/10",
  },
  {
    id: 6,
    icon: "🔧",
    title: "Shopify Store Setup & Migration",
    description: "I help businesses launch on Shopify or migrate from other platforms smoothly — setting up products, collections, payment gateways, apps, and custom configurations.",
    features: ["Store Setup", "Platform Migration", "App Configuration", "Performance Audit"],
    color: "cyan",
    gradient: "from-cyan-600/15 to-sky-900/10",
  },
];

const colorMap = {
  violet:  { border: "border-violet-500/20 hover:border-violet-500/50", icon: "bg-violet-500/10 border-violet-500/20 text-violet-400", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20", glow: "group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]" },
  emerald: { border: "border-emerald-500/20 hover:border-emerald-500/50", icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", glow: "group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]" },
  orange:  { border: "border-orange-500/20 hover:border-orange-500/50", icon: "bg-orange-500/10 border-orange-500/20 text-orange-400", tag: "bg-orange-500/10 text-orange-300 border-orange-500/20", glow: "group-hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]" },
  blue:    { border: "border-blue-500/20 hover:border-blue-500/50", icon: "bg-blue-500/10 border-blue-500/20 text-blue-400", tag: "bg-blue-500/10 text-blue-300 border-blue-500/20", glow: "group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]" },
  pink:    { border: "border-pink-500/20 hover:border-pink-500/50", icon: "bg-pink-500/10 border-pink-500/20 text-pink-400", tag: "bg-pink-500/10 text-pink-300 border-pink-500/20", glow: "group-hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]" },
  cyan:    { border: "border-cyan-500/20 hover:border-cyan-500/50", icon: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", glow: "group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]" },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0f] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              What I Offer
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              My Services
              <span className="text-violet-500">.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base mt-4 max-w-xl mx-auto">
              From custom Shopify stores to full stack web apps — here is everything I can build for you.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const c = colorMap[service.color];
            return (
              <Reveal key={service.id} direction="up" delay={(idx % 3) * 0.1}>
                <div className={`group relative bg-gradient-to-br ${service.gradient} bg-white/[0.02] border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 ${c.border} ${c.glow}`}>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${c.icon}`}>
                    {service.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white font-bold text-base leading-tight">{service.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.05]">
                    {service.features.map((feature) => (
                      <span key={feature} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${c.tag}`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-12 bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white font-extrabold text-xl mb-1">Have a project in mind?</h3>
              <p className="text-white/40 text-sm">Let's discuss your idea and bring it to life.</p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 flex items-center gap-2 px-7 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
            >
              Get In Touch
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
