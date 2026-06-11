import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Linkedin, Mail, Phone, Award, Briefcase, Calendar } from "lucide-react";
import { RESUME_URL } from "@/lib/assets";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="font-mono text-teal-400 text-sm mb-4">&lt;Hello World /&gt;</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Himanshu <span className="text-gradient">Arora</span>
          </h1>
          <div className="text-xl sm:text-2xl text-[#f1f5f4] mb-6 min-h-[2.5rem]">
            <TypeAnimation
              sequence={[
                "Technical Training Lead", 2000,
                "Cloud & Azure Trainer", 2000,
                "AI Learning Architect", 2000,
                "Instructional Design Expert", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-teal-400"
            />
          </div>
          <p className="text-[#6b7f7d] text-lg max-w-2xl mb-8 mx-auto lg:mx-0">
            Bridging complex technology and human understanding — one training program at a time.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href={RESUME_URL} download="Himanshu_Arora_Resume.docx" className="btn-outline">
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/himanshuarora958", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:himanshuarora869@gmail.com", label: "Email" },
              { Icon: Phone, href: "tel:+919625361068", label: "Phone" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-lg border border-[#1e2d2b] bg-[#111918] flex items-center justify-center text-[#6b7f7d] hover:text-teal-400 hover:border-teal-400/50 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="card-surface p-8 space-y-6 relative"
          >
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
            {[
              { Icon: Calendar, value: "7+ Years", label: "Training Experience" },
              { Icon: Award, value: "5 Certifications", label: "ITIL v4, AZ-104, AZ-900, SC-900, MS-900" },
              { Icon: Briefcase, value: "3 Companies", label: "Wipro → DXC → IT By Design" },
            ].map(({ Icon, value, label }) => (
              <div key={value} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-teal-400/10 border border-teal-400/30 flex items-center justify-center shrink-0">
                  <Icon className="text-teal-400" size={22} />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-lg">{value}</div>
                  <div className="text-[#6b7f7d] text-sm">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
