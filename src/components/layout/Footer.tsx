import { Link } from "react-router-dom";
import { Shield, Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "/product" },
      { name: "Demos", href: "/demos" },
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/blog" },
    ],
    Developers: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/docs#api" },
      { name: "Examples", href: "/demos" },
      { name: "GitHub", href: "https://github.com" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
    ],
    Legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold gradient-text">AirGate OS</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Privacy-first credential verification for Web3
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://discord.com"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-smooth"
                aria-label="Discord"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3 text-sm">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AirGate OS. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with AIR Kit on Moca Network
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
