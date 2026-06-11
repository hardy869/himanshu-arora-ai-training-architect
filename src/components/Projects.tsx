import { ArrowUpRight } from "lucide-react";
import { SectionHeading, FadeIn } from "./Section";

const projects = [
  {
    title: "AI Training Program — IT By Design",
    desc: "Built an end-to-end AI literacy curriculum covering ChatGPT, Copilot, and Prompt Engineering for System Administrators.",
    tags: ["AI", "Copilot", "Prompt Engineering", "Curriculum Design"],
  },
  {
    title: "PKT Automation — DXC Technology",
    desc: "Automated the Product Knowledge Test evaluation process, reducing manual effort and improving consistency across trainer evaluations.",
    tags: ["Automation", "Process Improvement", "Microsoft 365"],
  },
  {
    title: "REWST Workflow Training — IT By Design",
    desc: "Developed training content and hands-on labs for REWST automation platform, enabling MSP technicians to build no-code workflows.",
    tags: ["REWST", "Automation", "Copilot Agents", "MSP"],
  },
  {
    title: "E-Learning Module Development",
    desc: "Designed interactive e-learning modules using Articulate 360 and AI video generation via Synthesia for async training delivery.",
    tags: ["E-learning", "Articulate 360", "Synthesia", "Instructional Design"],
  },
  {
    title: "Moodle LMS Implementation & Analytics",
    desc: "Set up and managed Moodle LMS including course structure, learner enrollment, quiz automation, and performance dashboards.",
    tags: ["Moodle", "LMS", "Analytics", "TNA"],
  },
  {
    title: "Windows Server & Azure Training Lab",
    desc: "Built structured training labs for System Administrators covering Windows Server, Azure (AZ-104 level), Intune, and Firewall configurations.",
    tags: ["Azure", "Windows Server", "Intune", "Infrastructure"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080d0d]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="// projects">Projects & Impact</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <div className="card-surface p-6 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-500" />
                <h3 className="text-white font-bold text-lg mb-3 mt-2">{p.title}</h3>
                <p className="text-[#6b7f7d] text-sm mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-teal-400/10 text-teal-300 border border-teal-400/20">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium hover:gap-2 transition-all w-fit">
                  Read More <ArrowUpRight size={14} />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
