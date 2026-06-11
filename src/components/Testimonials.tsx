import { useEffect, useState } from "react";
import { Quote, Linkedin } from "lucide-react";
import { SectionHeading, FadeIn } from "./Section";

const testimonials = [
  {
    quote: "Himanshu's ability to break down complex Azure concepts into digestible, practical training modules is exceptional. Our team's certification pass rates improved significantly under his programs.",
    name: "Rahul M.",
    role: "IT Manager, DXC Technology",
    initials: "RM",
  },
  {
    quote: "The AI training program Himanshu built was exactly what our technicians needed. He made Copilot and Prompt Engineering genuinely approachable for non-developers.",
    name: "Sarah K.",
    role: "Operations Lead, IT By Design",
    initials: "SK",
  },
  {
    quote: "Himanshu brings rare depth — he understands both the technical subject matter and the science of adult learning. His REWST automation training was a game changer for our team.",
    name: "Amit D.",
    role: "Senior Engineer, IT By Design",
    initials: "AD",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="py-24 px-6 bg-[#080d0d]">
      <div className="max-w-4xl mx-auto">
        <SectionHeading kicker="// testimonials">What People Say</SectionHeading>
        <FadeIn>
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2">
                  <div className="card-surface p-8 md:p-10">
                    <Quote className="text-teal-400 mb-4" size={32} />
                    <p className="italic text-[#f1f5f4]/90 text-lg leading-relaxed mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center font-bold text-[#0a0f0f]">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-white font-bold">{t.name}</div>
                        <div className="text-teal-400/80 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === idx ? "bg-teal-400 w-8" : "bg-[#1e2d2b] w-2"}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        <p className="text-center text-sm text-[#6b7f7d] mt-8">
          <a
            href="https://www.linkedin.com/in/himanshuarora958"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
          >
            <Linkedin size={14} /> Reach out on LinkedIn for verified recommendations.
          </a>
        </p>
      </div>
    </section>
  );
}
