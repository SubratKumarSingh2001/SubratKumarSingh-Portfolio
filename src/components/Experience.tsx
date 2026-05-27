import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Training and Placement Coordinator",
    company: "USICT",
    period: "October 2024 – Present",
    description: [
      "Successfully coordinated and conducted 3+ Placement Drives for graduating students.",
      "Interacted extensively with HR professionals, boosting communication and networking skills.",
      "Organized and attended meetings, brainstorming with teammates regarding the smooth conduct of placement drives.",
    ],
  },
  {
    role: "Student Lead Volunteer",
    company: "University Events",
    period: "2022 - 2023",
    description: [
      "Organized large-scale events for seniors, requiring extensive planning and coordination.",
      "Enhanced leadership skills by managing cross-functional student teams.",
      "Ensured smooth execution of events with over 100+ attendees.",
    ],
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-primary" />
            Experience
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Work History</h2>
        </div>

        <div className="relative border-l border-border/60 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-lg text-primary font-medium mt-1">
                    <Briefcase size={18} />
                    {exp.company}
                  </div>
                </div>
                <div className="inline-flex py-1 px-3 rounded-full bg-secondary text-sm font-mono text-muted-foreground w-fit">
                  {exp.period}
                </div>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/30 transition-colors">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
