import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { RESUME_URL } from "@/lib/assets";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI & Automation" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.querySelector(l.href));
      for (const s of sections) {
        if (!s) continue;
        const r = (s as HTMLElement).getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive("#" + s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0f0f]/80 backdrop-blur-md border-b border-[#1e2d2b]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-bold">
          <span className="text-teal-400">&lt;</span>
          <span className="text-white">HA</span>
          <span className="text-teal-400"> /&gt;</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                active === l.href ? "text-teal-400" : "text-[#6b7f7d] hover:text-teal-400"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={RESUME_URL}
            download="Himanshu_Arora_Resume.docx"
            className="btn-outline hidden md:inline-flex text-sm"
          >
            <Download size={16} /> Resume
          </a>
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a0f0f] border-t border-[#1e2d2b] animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#f1f5f4] hover:text-teal-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              download="Himanshu_Arora_Resume.docx"
              className="btn-outline text-sm w-fit"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
