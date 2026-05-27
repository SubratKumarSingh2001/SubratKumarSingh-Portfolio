import { motion } from "framer-motion";
import { Terminal, BarChart2, Database, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl" />

              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 bg-card z-10 flex items-center justify-center p-8 group">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-secondary/50 rounded-xl overflow-hidden border border-border/50">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/30 font-mono text-xs overflow-hidden leading-tight p-4">
                      <div className="w-full text-left">{"{"}</div>
                      <div className="w-full text-left pl-4">"name": "Subrat Kumar Singh",</div>
                      <div className="w-full text-left pl-4">"focus": "Data Science & AI/ML",</div>
                      <div className="w-full text-left pl-4">"tools": ["NumPy", "Pandas", "Flask"],</div>
                      <div className="w-full text-left pl-4">"platform": "Snowflake",</div>
                      <div className="w-full text-left pl-4">"status": "Learning & Building"</div>
                      <div className="w-full text-left">{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-card border border-border shadow-xl rounded-xl p-5 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Database size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">Data Pipelines</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">ETL · Snowflake</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 lg:pl-10"
          >
            <div className="inline-flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-primary" />
              About Me
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Turning raw data into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">meaningful insights</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm an aspiring Data Scientist currently pursuing my MCA at USICT, New Delhi. My core focus right now is the full data lifecycle — from wrangling messy datasets with NumPy and Pandas, to building clean visual stories with Matplotlib and Seaborn.
              </p>
              <p>
                I'm actively learning Machine Learning and AI, building hands-on projects that apply what I study. On the engineering side, I build Python and Flask backends and work with data warehousing and ETL pipelines on Snowflake.
              </p>
              <p>
                I'm open to work in <span className="text-primary font-medium">data analytics</span>, <span className="text-primary font-medium">Python / Flask backend</span>, <span className="text-primary font-medium">data cleaning</span>, and <span className="text-primary font-medium">data pipeline</span> roles — anywhere I can learn fast and contribute meaningfully.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-secondary/30 border border-border/50">
                <BarChart2 className="text-primary mb-3" size={28} />
                <h3 className="font-semibold text-foreground mb-2">Data Science & Analytics</h3>
                <p className="text-sm text-muted-foreground">NumPy, Pandas, Matplotlib, Seaborn — data cleaning, EDA, and building visual insights from raw datasets.</p>
              </div>

              <div className="p-5 rounded-xl bg-secondary/30 border border-border/50">
                <Terminal className="text-accent mb-3" size={28} />
                <h3 className="font-semibold text-foreground mb-2">Python & Flask Backend</h3>
                <p className="text-sm text-muted-foreground">Building APIs and web apps with Flask. ETL pipelines and data warehousing on Snowflake.</p>
              </div>

              <div className="p-5 rounded-xl bg-secondary/30 border border-border/50 sm:col-span-2">
                <Cpu className="text-primary mb-3" size={28} />
                <h3 className="font-semibold text-foreground mb-2">Machine Learning — Learning Phase</h3>
                <p className="text-sm text-muted-foreground">Actively studying ML algorithms and AI concepts, integrating them into real projects like an AI-powered summarizer using OpenAI API.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
