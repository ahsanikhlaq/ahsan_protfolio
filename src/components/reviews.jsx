import Reveal from "./Reveal";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founder, Lumière Candles",
    avatar: "SM",
    rating: 5,
    date: "2 months ago",
    platform: "Upwork",
    review: "Honestly one of the best devs I've hired on here. Ahsan rebuilt our entire Shopify store from scratch — the new design is clean, fast, and our conversion rate went up noticeably within the first week. He asked the right questions before starting and didn't need hand-holding.",
    color: "violet",
    verified: true,
  },
  {
    id: 2,
    name: "James Thornton",
    role: "CEO, NovaBike Co.",
    avatar: "JT",
    rating: 5,
    date: "5 months ago",
    platform: "Fiverr",
    review: "Hired Ahsan for a Shopify to headless migration using Next.js. Solid communicator, delivered on time, and the site performance went from a 61 to a 94 on PageSpeed. Will hire again for our next phase.",
    color: "blue",
    verified: true,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Owner, Verdant Skincare",
    avatar: "PS",
    rating: 5,
    date: "3 months ago",
    platform: "Direct",
    review: "We came to Ahsan with just a Figma file and he turned it into a fully working Shopify store. Every section matched the design exactly. My customers keep telling me how beautiful the site is — that says it all.",
    color: "emerald",
    verified: true,
  },
  {
    id: 4,
    name: "Daniel Carter",
    role: "CTO, TaskFlow",
    avatar: "DC",
    rating: 4,
    date: "7 months ago",
    platform: "LinkedIn",
    review: "Good experience overall. Ahsan built the React frontend for our project tool — clean code, well structured, easy to hand off to our team. Minor revisions were needed but he handled them quickly without complaint.",
    color: "orange",
    verified: false,
  },
  {
    id: 5,
    name: "Lena Hoffmann",
    role: "Marketing Director, Aurore Jewelry",
    avatar: "LH",
    rating: 5,
    date: "1 month ago",
    platform: "Upwork",
    review: "Very detail-oriented. He built our jewelry store checkout extension with upsell logic and gift wrap options. The whole flow looks native — our customers don't even realize it's custom. Revenue from upsells jumped in the first month.",
    color: "pink",
    verified: true,
  },
  {
    id: 6,
    name: "Omar Khalid",
    role: "Founder, VendorHub",
    avatar: "OK",
    rating: 5,
    date: "4 months ago",
    platform: "Fiverr",
    review: "Complex project — multi-vendor marketplace on Shopify with custom app, webhook sync, and vendor dashboards. Ahsan handled it all without issues. Communication was clear throughout. Delivered exactly what was scoped.",
    color: "cyan",
    verified: true,
  },
  {
    id: 7,
    name: "Emily Russo",
    role: "Owner, Stryde Sneakers",
    avatar: "ER",
    rating: 5,
    date: "6 months ago",
    platform: "Direct",
    review: "Our old Shopify theme was slow and generic. Ahsan redesigned everything — custom sections, editorial layout, fast load times. Mobile feels like a real app now. He really understands e-commerce UX, not just code.",
    color: "violet",
    verified: true,
  },
  {
    id: 8,
    name: "Tom Brennan",
    role: "CEO, LearnSpace",
    avatar: "TB",
    rating: 4,
    date: "8 months ago",
    platform: "Upwork",
    review: "Ahsan built the student dashboard and quiz system for our e-learning platform. Took a bit longer than estimated but the quality was there and he kept us updated throughout. Would work with him again.",
    color: "yellow",
    verified: true,
  },
];

const avatarColor = {
  violet:  "bg-violet-500/20 text-violet-300 border-violet-500/30",
  blue:    "bg-blue-500/20 text-blue-300 border-blue-500/30",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  orange:  "bg-orange-500/20 text-orange-300 border-orange-500/30",
  pink:    "bg-pink-500/20 text-pink-300 border-pink-500/30",
  yellow:  "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  cyan:    "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

const platformBadge = {
  Upwork:   "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Fiverr:   "bg-green-500/10 text-green-400 border-green-500/20",
  LinkedIn: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Direct:   "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-3 mx-3 hover:border-white/[0.14] transition-colors duration-300">
      {/* Top row: stars + platform */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-3.5 h-3.5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-white/10 fill-white/10"}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="text-white/30 text-[10px] ml-1.5">{review.rating}.0</span>
        </div>
        <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${platformBadge[review.platform]}`}>
          {review.platform}
        </span>
      </div>

      {/* Review text */}
      <p className="text-white/55 text-xs leading-relaxed flex-1">
        "{review.review}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${avatarColor[review.color]}`}>
          {review.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-white text-xs font-semibold leading-tight truncate">{review.name}</p>
            {review.verified && (
              <svg className="w-3 h-3 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <p className="text-white/30 text-[10px] truncate">{review.role}</p>
            <span className="text-white/15 text-[10px]">·</span>
            <p className="text-white/20 text-[10px] flex-shrink-0">{review.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const row1 = reviews.slice(0, 4);
  const row2 = reviews.slice(4, 8);

  return (
    <section id="reviews" className="bg-[#0a0a0f] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16 mb-12">
        <Reveal direction="up">
          <div className="text-center">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              Client Feedback
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              What Clients Say
              <span className="text-violet-500">.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Trusted by founders, store owners, and startups around the world.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white">50+</p>
              <p className="text-white/40 text-xs mt-1">Projects Done</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white">30+</p>
              <p className="text-white/40 text-xs mt-1">Happy Clients</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white">4.8</p>
              <p className="text-white/40 text-xs mt-1">Avg. Rating</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white">3+</p>
              <p className="text-white/40 text-xs mt-1">Years Exp.</p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  35s linear infinite; }
        .marquee-right { animation: marquee-right 35s linear infinite; }
        .marquee-wrap:hover .marquee-left,
        .marquee-wrap:hover .marquee-right { animation-play-state: paused; }
      `}</style>

      <div className="flex flex-col gap-5">
        <div className="marquee-wrap overflow-hidden">
          <div className="marquee-left flex w-max">
            {[...row1, ...row1].map((r, i) => <ReviewCard key={`r1-${i}`} review={r} />)}
          </div>
        </div>
        <div className="marquee-wrap overflow-hidden">
          <div className="marquee-right flex w-max">
            {[...row2, ...row2].map((r, i) => <ReviewCard key={`r2-${i}`} review={r} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
