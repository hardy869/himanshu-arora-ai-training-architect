import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { SectionHeading, FadeIn } from "./Section";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading kicker="// about me">About Me</SectionHeading>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          <FadeIn>
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 blur-2xl opacity-30" />
              <div className="relative w-full h-full rounded-full bg-[#111918] border-4 border-teal-400/40 flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-gradient">HA</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#f1f5f4]/90 text-lg leading-relaxed mb-6">
              I'm a Technical Training Lead with 7+ years of experience designing and delivering enterprise training programs. I specialize in Cloud & Azure Infrastructure, Microsoft 365, AI Tools including ChatGPT and Copilot, and automation workflows using REWST and Copilot Agents. I hold a B.Tech from GGSIPU (2014–2018) and multiple Microsoft and ITIL certifications. My approach blends instructional design principles, e-learning technology, and real-world technical depth to make complex systems genuinely learnable.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: GraduationCap, text: "B.Tech – GGSIPU (2014–2018)" },
                { Icon: MapPin, text: "India" },
                { Icon: Briefcase, text: "Open to Opportunities" },
              ].map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/40 text-teal-400 text-sm bg-teal-400/5"
                >
                  <Icon size={14} /> {text}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
