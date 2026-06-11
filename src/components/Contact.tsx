import { Mail, Phone, Linkedin, Download, Send } from "lucide-react";
import { SectionHeading, FadeIn } from "./Section";
import resumeAsset from "@/assets/Himanshu_Arora_Resume.docx.asset.json";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Job Opportunity", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:himanshuarora869@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
  };

  const contacts = [
    { Icon: Mail, label: "Email", value: "himanshuarora869@gmail.com", href: "mailto:himanshuarora869@gmail.com" },
    { Icon: Phone, label: "Phone", value: "+91 9625361068", href: "tel:+919625361068" },
    { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/himanshuarora958", href: "https://www.linkedin.com/in/himanshuarora958" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#080d0d]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading kicker="// contact">Let's Work Together</SectionHeading>
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <div className="space-y-4">
              {contacts.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card-surface p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-400/10 border border-teal-400/30 flex items-center justify-center shrink-0">
                    <Icon className="text-teal-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[#6b7f7d] uppercase tracking-wider">{label}</div>
                    <div className="text-white font-medium truncate">{value}</div>
                  </div>
                </a>
              ))}
              <a
                href={resumeAsset.url}
                download="Himanshu_Arora_Resume.docx"
                className="btn-primary w-full justify-center"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={onSubmit} className="card-surface p-6 md:p-8 space-y-4">
              <div>
                <label className="block text-sm text-[#6b7f7d] mb-1.5">Full Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0a0f0f] border border-[#1e2d2b] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6b7f7d] mb-1.5">Email Address</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0a0f0f] border border-[#1e2d2b] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6b7f7d] mb-1.5">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-[#0a0f0f] border border-[#1e2d2b] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
                >
                  <option>Job Opportunity</option>
                  <option>Freelance Project</option>
                  <option>Training Inquiry</option>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#6b7f7d] mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#0a0f0f] border border-[#1e2d2b] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} /> Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
