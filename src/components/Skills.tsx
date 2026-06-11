import { Cloud, Bot, Settings2, GraduationCap, BarChart3, Briefcase, Award } from "lucide-react";
import { SectionHeading, FadeIn } from "./Section";

const skills = [
  { Icon: Cloud, title: "Cloud & Infrastructure", tags: ["Azure", "Windows Server", "Intune", "Networking", "Firewall"] },
  { Icon: Bot, title: "AI & Prompt Engineering", tags: ["ChatGPT", "Microsoft Copilot", "Prompt Engineering"] },
  { Icon: Settings2, title: "Automation", tags: ["Copilot Agents", "REWST Workflows"] },
  { Icon: GraduationCap, title: "Instructional Design", tags: ["Articulate 360", "Synthesia", "E-learning Development"] },
  { Icon: BarChart3, title: "LMS & Analytics", tags: ["Moodle LMS", "Performance Metrics", "TNA"] },
  { Icon: Briefcase, title: "Microsoft 365", tags: ["Teams", "SharePoint", "Exchange", "Intune", "MS-900"] },
];

const certs = [
  "ITIL v4 Foundation",
  "Microsoft AZ-104 (Azure Administrator)",
  "Microsoft AZ-900 (Azure Fundamentals)",
  "Microsoft SC-900 (Security Fundamentals)",
  "Microsoft MS-900 (M365 Fundamentals)",
  "Instructional Design Certification",
  "Neuro Linguistic Programming (NLP)",
  "KAIZEN Certification",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#080d0d]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="// skills">Technical Expertise</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map(({ Icon, title, tags }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <div className="card-surface p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-teal-400/10 border border-teal-400/30 flex items-center justify-center mb-4">
                  <Icon className="text-teal-400" size={22} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-300 border border-teal-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h3 className="font-display text-2xl text-white text-center mb-8">Certifications</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 md:flex-wrap md:justify-center md:overflow-visible">
            {certs.map((c) => (
              <div
                key={c}
                className="shrink-0 md:shrink card-surface px-5 py-4 flex items-center gap-3 min-w-[260px]"
              >
                <Award className="text-teal-400 shrink-0" size={20} />
                <span className="text-sm text-white font-medium">{c}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
