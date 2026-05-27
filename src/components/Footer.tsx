import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-2xl font-bold font-mono tracking-tighter text-foreground">
            SKS<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Data Scientist & AI/ML Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/subrat-kumar-singh-597973207"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:subratsingh2002@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right font-mono">
          <p>&copy; {year} Subrat Kumar Singh.</p>
        </div>
      </div>
    </footer>
  );
}
