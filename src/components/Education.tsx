import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Application (MCA), SE",
    institution: "USICT, New Delhi",
    period: "2024 – Present",
    score: "CGPA: 8.09/10",
    status: "Ongoing"
  },
  {
    degree: "BSc. Mathematics (Hons) + Computer Science",
    institution: "University of Delhi, New Delhi",
    period: "2020 – 2023",
    score: "CGPA: 8.351/10",
    status: "Completed"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-primary" />
            Academic Background
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-primary/40 transition-all group"
            >
              <div className="flex gap-5 items-start md:items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <div className="text-lg text-muted-foreground font-medium mb-3 md:mb-0">{edu.institution}</div>
                  
                  {/* Mobile only date/score */}
                  <div className="md:hidden flex flex-col gap-2 mt-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="text-primary font-mono font-medium text-sm">
                      {edu.score}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop date/score */}
              <div className="hidden md:flex flex-col items-end text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-mono text-muted-foreground mb-3">
                  <Calendar size={14} />
                  {edu.period}
                </div>
                <div className="text-primary font-mono font-bold">
                  {edu.score}
                </div>
                <div className={`text-xs uppercase tracking-wider font-bold mt-2 ${edu.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {edu.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
