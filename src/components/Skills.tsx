import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiHtml5, SiTailwindcss, SiFlask, SiOpenai, SiNumpy, SiPandas, SiSnowflake, SiPostgresql, SiJavascript, SiSqlite, SiSqlalchemy, SiMysql, SiCss, SiElevenlabs} from "react-icons/si";
import { Database, Code2, LineChart, BarChart2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming, Databases & ORM",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: SiMysql, color: "#336791" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "SQLite", icon: SiSqlite, color: "#3776AB" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#000000" },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "Matplotlib", icon: LineChart, color: "#11557C" },
      { name: "Seaborn", icon: BarChart2, color: "#4C72B0" },
      { name: "ETL", icon: BarChart2, color: "#F59E0B" },
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "OpenAI API", icon: SiOpenai, color: "#74AA9C" },
      { name: "ElevenLabs API", icon: SiElevenlabs, color: "#000000" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-primary" />
            Technical Arsenal
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Actively working with these tools — building, cleaning, and analysing data every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-base font-semibold mb-5 text-primary font-mono uppercase tracking-wider">{category.title}</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors group cursor-default"
                  >
                    <skill.icon
                      size={28}
                      className="group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-[10px] font-medium text-center text-muted-foreground group-hover:text-foreground leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
