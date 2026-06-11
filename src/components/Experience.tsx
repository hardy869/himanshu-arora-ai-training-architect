import { SectionHeading, FadeIn } from "./Section";

const jobs = [
  {
    company: "IT By Design",
    role: "Technical Trainer",
    period: "Oct 2025 – Present",
    type: "Full-time",
    current: true,
    points: [
      "Deliver advanced training on Windows Server, Azure, Intune & Firewall technologies",
      "Develop AI training content covering Prompt Engineering, Microsoft Copilot & ChatGPT",
      "Build automation training around Copilot Agents and REWST workflows",
      "Create e-learning content using Synthesia & Articulate 360",
      "Manage Moodle LMS and track learner performance metrics",
    ],
  },
  {
    company: "DXC Technology",
    role: "Technical Trainer",
    period: "Apr 2022 – Sep 2025",
    type: "3 yrs 6 mos",
    points: [
      "Delivered comprehensive Microsoft 365 enterprise training programs",
      "Automated PKT (Product Knowledge Test) processes, improving team efficiency",
      "Evaluated, mentored and upskilled fellow trainers",
      "Aligned training roadmaps with business requirements and SLA targets",
    ],
  },
  {
    company: "Wipro Technologies",
    role: "Executive Trainer",
    period: "Jul 2021 – Mar 2022",
    type: "9 mos",
    points: [
      "Delivered Microsoft 365 and new-hire onboarding training",
      "Designed training modules, assessments, and evaluation frameworks",
      "Automated PKT evaluation workflows",
      "Ensured trainee readiness before production deployment",
    ],
  },
  {
    company: "Wipro BPS",
    role: "Process Trainer",
    period: "Oct 2020 – Jul 2021",
    type: "9 mos",
    points: [
      "Conducted onboarding and process training for new batches",
      "Created Standard Operating Procedures (SOPs) and training materials",
      "Monitored trainee performance through structured evaluations",
      "Maintained quality, compliance and audit readiness",
    ],
  },
  {
    company: "Wipro BPS",
    role: "Front Line Technical Agent",
    period: "Aug 2018 – Oct 2020",
    type: "2 yrs 2 mos",
    points: [
      "Provided Tier-1/2 technical support for HP hardware/software",
      "Resolved complex hardware and software issues",
      "Maintained high CSAT scores and performance benchmarks",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading kicker="// experience">Career Journey</SectionHeading>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/60 via-[#1e2d2b] to-transparent" />
          <div className="space-y-12">
            {jobs.map((job, i) => (
              <FadeIn key={job.company + job.role} delay={i * 0.05}>
                <div className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-[#0a0f0f] z-10">
                    {job.current && (
                      <span className="absolute inset-0 rounded-full bg-teal-400 animate-ping" />
                    )}
                  </div>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="card-surface p-6 text-left">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-white font-bold text-xl">{job.company}</h3>
                        {job.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-teal-400/15 text-teal-300 border border-teal-400/30">Current</span>
                        )}
                      </div>
                      <div className="text-teal-400 font-medium mb-1">{job.role}</div>
                      <div className="text-xs text-[#6b7f7d] mb-4">
                        {job.period} · {job.type}
                      </div>
                      <ul className="space-y-2">
                        {job.points.map((p) => (
                          <li key={p} className="text-sm text-[#f1f5f4]/80 flex gap-2">
                            <span className="text-teal-400 mt-1">▸</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
