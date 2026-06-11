import { Check, Target, Settings2, Video, BarChart3 } from "lucide-react";
import { SectionHeading, FadeIn } from "./Section";

const tools = [
  "Microsoft Copilot (M365 & Copilot Studio)",
  "ChatGPT & Prompt Engineering",
  "Copilot Agents (custom agent building)",
  "Synthesia (AI video generation)",
  "REWST Automation Platform",
];

const builds = [
  { Icon: Target, title: "AI Curriculum Design", desc: "End-to-end AI literacy programs for enterprise teams" },
  { Icon: Settings2, title: "Automation Workflows", desc: "No-code/low-code automation training using REWST & Copilot" },
  { Icon: Video, title: "AI Video Content", desc: "Scalable e-learning videos using Synthesia avatars" },
  { Icon: BarChart3, title: "LMS Automation", desc: "Automated quiz, enrollment, and reporting pipelines in Moodle" },
];

export default function AIShowcase() {
  return (
    <section id="ai" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="// ai & automation">AI & Automation Expertise</SectionHeading>

        <FadeIn>
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/40 via-emerald-500/20 to-teal-400/40">
            <div className="rounded-2xl bg-[#0a0f0f] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-teal-400 font-mono text-sm mb-4">// ai tools i train on</h3>
                  <ul className="space-y-4">
                    {tools.map((t, i) => (
                      <FadeIn key={t} delay={i * 0.08}>
                        <li className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-teal-400/15 border border-teal-400/40 flex items-center justify-center shrink-0">
                            <Check className="text-teal-400" size={14} />
                          </span>
                          <span className="text-[#f1f5f4]">{t}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-teal-400 font-mono text-sm mb-4">// what i build</h3>
                  <div className="space-y-4">
                    {builds.map(({ Icon, title, desc }, i) => (
                      <FadeIn key={title} delay={i * 0.08}>
                        <div className="flex gap-4">
                          <div className="w-11 h-11 rounded-lg bg-teal-400/10 border border-teal-400/30 flex items-center justify-center shrink-0">
                            <Icon className="text-teal-400" size={20} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-white font-semibold mb-1">{title}</div>
                            <div className="text-[#6b7f7d] text-sm">{desc}</div>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>

              <FadeIn delay={0.2}>
                <blockquote className="mt-12 pt-10 border-t border-[#1e2d2b] text-center">
                  <p className="font-display text-2xl md:text-3xl italic text-white max-w-3xl mx-auto leading-relaxed">
                    "AI doesn't replace trainers — it <span className="text-gradient not-italic font-bold">amplifies</span> them. I help teams learn how to work <span className="text-gradient not-italic font-bold">with</span> AI, not around it."
                  </p>
                </blockquote>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
