import Reveal from "./Reveal";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5.0", label: "Average Rating" },
];

const timeline = [
  {
    year: "2020 – 2024",
    title: "BS Physics",
    place: "The Islamia University of Bahawalpur",
    description: "Completed a Bachelor's degree in Physics, building a strong foundation in analytical thinking, problem solving, and logical reasoning — skills that later became superpowers in software development.",
    icon: "🎓",
    color: "violet",
  },
  {
    year: "Jun 2023 – Jan 2024",
    title: "Frontend & Shopify Developer",
    place: "Infinite IT Solution, Bahawalpur",
    description: "Started as an intern and progressed to a Frontend Web Developer role, building fully responsive web pages using HTML, CSS, JavaScript, Bootstrap, and React. Later transitioned into Shopify development.",
    icon: "💡",
    color: "orange",
  },
  {
    year: "Jan 2024 – Present",
    title: "Shopify Developer",
    place: "Convertt.co",
    description: "Build and customize responsive e-commerce stores by converting Figma designs into functional Shopify websites using Liquid, HTML, CSS, and JavaScript. Handle theme customization, app integrations, API implementations, and performance optimization.",
    icon: "🛍️",
    color: "emerald",
  },
  {
    year: "Achievement",
    title: "Client Communication Excellence Award",
    place: "Professional Recognition",
    description: "Awarded for effectively managing client interactions, setting clear expectations, and ensuring smooth project delivery on time and within scope.",
    icon: "🏆",
    color: "blue",
  },
];

const colorMap = {
  violet:  { dot: "bg-violet-500", border: "border-violet-500/30", badge: "bg-violet-500/10 text-violet-300 border-violet-500/20" },
  orange:  { dot: "bg-orange-500", border: "border-orange-500/30", badge: "bg-orange-500/10 text-orange-300 border-orange-500/20" },
  emerald: { dot: "bg-emerald-500", border: "border-emerald-500/30", badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
  blue:    { dot: "bg-blue-500", border: "border-blue-500/30", badge: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
};

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0f] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <Reveal direction="up">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              Get To Know Me
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              About Me
              <span className="text-violet-500">.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          <Reveal direction="right">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-[#96bf48]/10 border border-[#96bf48]/25 text-[#96bf48] text-xs font-medium px-4 py-2 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#96bf48] animate-pulse" />
                Currently at Convertt.co
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                From Physics Graduate
                <br />
                <span className="text-violet-400">to Shopify & React Developer</span>
              </h3>

              <div className="flex flex-col gap-4 text-white/50 text-sm leading-relaxed">
                <p>
                  Hi, I am <span className="text-white font-semibold">Muhammad Ahsan</span> — a Shopify Developer with almost 3 years of experience, based in Lahore, Pakistan. My journey into tech started unconventionally — I studied
                  <span className="text-white font-medium"> BS Physics</span> at
                  <span className="text-white font-medium"> The Islamia University of Bahawalpur</span>, where I developed a deep love for logic and problem solving.
                </p>
                <p>
                  I started at <span className="text-white font-semibold">Infinite IT Solution</span> as an intern and grew into a Frontend Developer role, mastering HTML, CSS, JavaScript, Bootstrap, and React before transitioning into Shopify development.
                </p>
                <p>
                  Currently at <span className="text-white font-semibold">Convertt.co</span>, I build and customize responsive e-commerce stores by converting Figma designs into functional Shopify websites. I handle theme customization, app integrations, API implementations, and performance optimization.
                </p>
                <p>
                  I am self-motivated, energetic, and a quick learner who works well in a team and adapts easily to new technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {["Shopify Expert", "React Developer", "Physics Graduate", "Quick Learner", "Team Player", "Award Winner"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-1 hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300">
                  <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-white/40 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

        <Reveal direction="up">
          <h3 className="text-xl font-bold text-white mb-10 text-center">
            My Journey<span className="text-violet-500">.</span>
          </h3>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.07] md:-translate-x-1/2" />
          <div className="flex flex-col gap-8">
            {timeline.map((item, index) => {
              const c = colorMap[item.color];
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={item.year} direction={isLeft ? "right" : "left"} delay={index * 0.1}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-[#0a0a0f] md:-translate-x-1/2 mt-5 z-10 flex-shrink-0">
                      <div className={`w-full h-full rounded-full ${c.dot}`} />
                    </div>
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                      <div className={`bg-white/[0.03] border ${c.border} rounded-2xl p-5 hover:bg-white/[0.05] transition-all duration-300`}>
                        <div className={`flex items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : "justify-start"}`}>
                          <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${c.badge}`}>{item.year}</span>
                        </div>
                        <div className={`flex items-center gap-2 mb-1 ${isLeft ? "md:justify-end" : "justify-start"}`}>
                          <span className="text-xl">{item.icon}</span>
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        </div>
                        <p className="text-violet-400 text-xs font-medium mb-2">{item.place}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
