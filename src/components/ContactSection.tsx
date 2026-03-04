import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-4">04 / Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
          <a
            href="mailto:harishsvs10@gmail.com"
            className="inline-block font-mono text-lg text-primary border border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            harishsvs10@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
