import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm text-primary font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
          >
            Hi, I'm <span className="gradient-text">Subrat.</span>
            <br />
            Aspiring <br className="hidden md:block" />
            <span className="text-muted-foreground/50">Data Scientist.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Available for Python/Flask backend, data analytics, data cleaning & AI projects. I do EDA, build data warehouses, ship AI-powered products, and work across ETL pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors border border-border"
            >
              Contact Me
            </a>
            
            <div className="flex items-center gap-3 ml-2 md:ml-4">
              <a
                href="https://www.linkedin.com/in/subrat-kumar-singh-597973207"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:subratsingh2002@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
