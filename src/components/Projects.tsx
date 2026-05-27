import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart2, Cpu, Database, Code2, Newspaper } from "lucide-react";

const projects = [
  {
    title: "Communicate Data Findings",
    date: "2026",
    tag: "Data Analysis",
    description:
      "Exploratory and explanatory data analysis on the Ford GoBike dataset. Dug deep into rider behaviour patterns through univariate, bivariate, and multivariate visualisations — turning raw trip data into a clear narrative story.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    icon: BarChart2,
    links: {
      github: "https://github.com/SubratKumarSingh2001/Communicate-Data-Findings",
      live: null,
    },
    featured: true,
  },
  {
    title: "ContentForge AI",
    date: "2026",
    tag: "AI SaaS",
    description:
      "Full AI-powered SaaS platform for content creators. Generates AI Reels, Blog posts, Captions, Hashtags, and Video Scripts from a single dashboard — built as a production-ready multi-tool web application.",
    tech: ["Python", "Flask", "OpenAI API", "HTML", "CSS"],
    icon: Cpu,
    links: {
      github: "https://github.com/SubratKumarSingh2001/ContentForgeAI-AI-Powered-Content-Creation",
      live: null,
    },
    featured: true,
  },
  {
    title: "Data Warehouse & OLAP Design",
    date: "2026",
    tag: "Data Engineering",
    description:
      "End-to-end design and implementation of a Data Warehouse solution for reporting and OLAP analysis using real-world Yelp and climate datasets. Covers dimensional modelling, ETL pipelines, and analytical query design.",
    tech: ["SQL", "Data Warehousing", "OLAP", "ETL", "Dimensional Modelling"],
    icon: Database,
    links: {
      github: "https://github.com/SubratKumarSingh2001/Design-Data-Warehouse-OLAP",
      live: null,
    },
    featured: true,
  },
  {
    title: "AI Summarizer App",
    date: "Nov 2025",
    tag: "AI / Backend",
    description:
      "Web-based AI-powered text summarization tool using Flask and OpenAI API. Generates multiple summary variations for the same input to ensure comprehensive coverage without missing key information.",
    tech: ["Python", "Flask", "OpenAI API", "HTML", "CSS"],
    icon: Code2,
    links: {
      github: "https://github.com/SubratKumarSingh2001",
      live: null,
    },
    featured: false,
  },
  {
    title: "News Aggregator App",
    date: "Oct 2025",
    tag: "Python",
    description:
      "Python app that lets users search any topic and fetches the latest articles live via News API. Processes JSON responses to display titles, descriptions, and source URLs across multiple articles.",
    tech: ["Python", "News API", "JSON"],
    icon: Newspaper,
    links: {
      github: "https://github.com/SubratKumarSingh2001",
      live: null,
    },
    featured: false,
  },
];

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-primary" />
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              From EDA and data pipelines to AI-powered SaaS — a cross-section of what I build.
            </p>
          </div>
          <a
            href="https://github.com/SubratKumarSingh2001?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group shrink-0"
            data-testid="link-github-all"
          >
            View all on GitHub
            <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Featured 3 — GitHub projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featured.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>

        {/* Other 2 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      data-testid={`card-project-${idx}`}
    >
      <div className="h-1 w-full bg-gradient-to-r from-primary to-accent opacity-40 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <project.icon size={20} />
            </div>
            <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
              {project.tag}
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              data-testid={`link-github-${idx}`}
            >
              <Github size={18} />
            </a>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live demo"
                data-testid={`link-live-${idx}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded shrink-0">
            {project.date}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-6 leading-relaxed mt-2 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
