import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading, FadeIn } from "./Section";

const posts = [
  {
    title: "Prompt Engineering for IT Trainers: A Practical Guide",
    category: "AI & Training",
    excerpt: "How to use structured prompts to create training content 5x faster using ChatGPT and Copilot.",
    date: "May 2025",
  },
  {
    title: "Why Every System Admin Needs Azure Training in 2025",
    category: "Cloud",
    excerpt: "AZ-104 is no longer optional — here's how to build a practical Azure training roadmap for your IT team.",
    date: "Apr 2025",
  },
  {
    title: "REWST vs Power Automate: Which Should MSPs Train Their Teams On?",
    category: "Automation",
    excerpt: "A side-by-side breakdown of two leading automation platforms from a trainer's perspective.",
    date: "Mar 2025",
  },
  {
    title: "Building E-Learning at Scale with Synthesia and Articulate 360",
    category: "Instructional Design",
    excerpt: "How AI video generation is transforming async corporate training delivery.",
    date: "Feb 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="// blog">Insights & Thought Leadership</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <a href="#" className="card-surface block h-full overflow-hidden group">
                <div className="aspect-[16/10] bg-gradient-to-br from-teal-500/20 via-emerald-500/10 to-[#111918] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.15),transparent_60%)]" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-teal-400/20 text-teal-300 border border-teal-400/30">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold mb-2 group-hover:text-teal-400 transition-colors">{p.title}</h3>
                  <p className="text-[#6b7f7d] text-sm mb-4 line-clamp-3">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#6b7f7d] inline-flex items-center gap-1">
                      <Calendar size={12} /> {p.date}
                    </span>
                    <span className="text-teal-400 inline-flex items-center gap-1 font-medium">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="btn-outline">
            View All Articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
