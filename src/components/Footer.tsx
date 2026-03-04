const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
      <p>© 2026 Harish M. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://github.com/HarisH-O5" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/harish-m-1210133a9" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
