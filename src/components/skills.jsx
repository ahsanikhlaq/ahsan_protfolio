import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Shopify",
    icon: "🛍️",
    primary: true,
    skills: [
      { name: "Shopify Liquid", level: 92 },
      { name: "Custom Themes", level: 90 },
      { name: "Checkout Extensions", level: 85 },
      { name: "Shopify Functions", level: 82 },
      { name: "Shopify Apps", level: 85 },
      { name: "Shopify CLI", level: 88 },
      { name: "Theme App Extensions", level: 83 },
      { name: "Metafields & Metaobjects", level: 87 },
      { name: "Storefront API", level: 84 },
      { name: "Admin API", level: 82 },
      { name: "Webhooks", level: 80 },
      { name: "Headless Shopify", level: 78 },
    ],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 72 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 80 },
    ],
  },
];

const techBadges = [
  "React", "Node.js", "JavaScript", "TypeScript", "Next.js",
  "Tailwind CSS", "MongoDB", "Express", "MySQL", "REST API",
  "Shopify Liquid", "Custom Themes", "Checkout Extensions",
  "Shopify Functions", "Theme App Extensions", "Storefront API",
  "Admin API", "Metafields", "Metaobjects", "Headless Shopify",
  "Webhooks", "Shopify CLI", "Shopify Apps", "Git", "Figma", "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0a0f] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              What I Work With
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              My Skills
              <span className="text-violet-500">.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Technologies and tools I use to build full stack web apps and Shopify stores.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <Reveal key={category.title} direction="up" delay={idx * 0.1}>
              <div className={`rounded-2xl p-6 transition-all duration-300 ${category.primary ? "bg-gradient-to-br from-violet-600/10 to-violet-900/5 border border-violet-500/30 hover:border-violet-500/50 sm:col-span-2" : "bg-white/[0.03] border border-white/[0.07] hover:border-violet-500/30 hover:bg-white/[0.05]"}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg ${category.primary ? "bg-violet-500/20 border-violet-500/40 text-xl" : "bg-violet-500/10 border-violet-500/20"}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-white font-bold text-base">{category.title}</h3>
                  {category.primary && (
                    <span className="ml-2 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300">
                      Primary Skill
                    </span>
                  )}
                  <span className="ml-auto text-white/20 text-xs">{category.skills.length} skills</span>
                </div>
                <div className={`flex flex-col gap-4 ${category.primary ? "sm:grid sm:grid-cols-2 sm:gap-x-8" : ""}`}>
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-white/70 text-xs font-medium">{skill.name}</span>
                        <span className={`text-xs font-semibold ${category.primary ? "text-[#96bf48]" : "text-violet-400"}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${category.primary ? "bg-gradient-to-r from-[#96bf48] to-[#6aaa1e]" : "bg-gradient-to-r from-violet-600 to-violet-400"}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.1}>
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase text-center mb-6">
              Full Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {techBadges.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium rounded-full hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}