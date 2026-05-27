import { motion } from "framer-motion";
import { Trophy, Code, Users } from "lucide-react";

const achievements = [
  {
    title: "AI Application Developer",
    description: "Built and deployed AI-powered applications from scratch, integrating OpenAI API with Flask backends to create real-world tools that solve practical problems.",
    icon: Code,
    color: "text-violet-400"
  },
  {
    title: "Student Lead Volunteer",
    description: "Organized and managed events for senior students, enhancing leadership, teamwork, and event management skills.",
    icon: Users,
    color: "text-fuchsia-400"
  },
  {
    title: "Placement Coordinator",
    description: "Coordinated multiple placement drives, serving as a liaison between recruiters and students, ensuring smooth execution.",
    icon: Trophy,
    color: "text-purple-300"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-primary" />
            Milestones
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements & Roles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 border border-border relative z-10`}>
                <item.icon className={item.color} size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{item.title}</h3>
              <p className="text-muted-foreground relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
