import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-4">01 / About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-secondary-foreground leading-relaxed max-w-3xl">
            I am a Full Stack Developer and Computer Science student at Panimalar Engineering College 
            with a strong interest in building efficient and scalable software solutions. I enjoy working 
            with both frontend and backend technologies, and I am passionate about learning new tools, 
            improving my development skills, and building practical software projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
