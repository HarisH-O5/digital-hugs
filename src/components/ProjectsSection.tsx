import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SHK",
    description:
      "A JavaScript-based project focused on implementing core programming concepts and web functionality.",
    tech: ["JavaScript"],
    link: "https://github.com/HarisH-O5",
  },
  {
    title: "FZF",
    description:
      "A project written in Go exploring efficient search functionality and command-line utility development.",
    tech: ["Go"],
    link: "https://github.com/HarisH-O5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-4">03 / Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Work</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block border border-border rounded-lg p-6 md:p-8 bg-card hover:border-primary/40 transition-colors duration-300 border-glow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-secondary-foreground mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-primary px-2 py-1 rounded bg-primary/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
