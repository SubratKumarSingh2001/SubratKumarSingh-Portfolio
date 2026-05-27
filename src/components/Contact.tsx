import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-primary" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">intelligent.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I'm currently looking for new opportunities in Data Science and AI/ML Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:subratsingh2002@gmail.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono mb-1">Email</div>
                  <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">subratsingh2001@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919350857818" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono mb-1">Phone</div>
                  <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">+91-9350857818</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono mb-1">Location</div>
                  <div className="text-lg font-medium text-foreground">Bahadurgarh, Haryana, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
            <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY}></input>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Jack Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="jack@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Opportunity or Collaboration"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Hello Subrat, I'd like to discuss..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground font-medium rounded-lg px-4 py-4 mt-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
