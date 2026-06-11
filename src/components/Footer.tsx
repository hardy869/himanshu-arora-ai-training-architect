import { Linkedin, Mail, Github } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080d0d] relative">
      <div className="h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-3 items-center">
        <p className="text-sm text-[#6b7f7d] text-center md:text-left">
          © 2025 Himanshu Arora. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[#6b7f7d] hover:text-teal-400 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center md:justify-end gap-3">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/himanshuarora958", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:himanshuarora869@gmail.com", label: "Email" },
            { Icon: Github, href: "#", label: "GitHub" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-[#1e2d2b] flex items-center justify-center text-[#6b7f7d] hover:text-teal-400 hover:border-teal-400/50 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
