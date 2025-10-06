import { Link } from "wouter";
import { motion } from "framer-motion";
import { Zap, Linkedin, Github, Mail } from "lucide-react";
import { SiX } from "react-icons/si";

export default function Footer() {

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", isLucide: true },
    { icon: SiX, href: "#", label: "X", isLucide: false },
    { icon: Github, href: "#", label: "GitHub", isLucide: true },
  ];

  const quickLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/playbooks", label: "Playbooks" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Zap className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold text-black">PowerTap</span>
            </motion.div>
            <motion.p
              className="text-muted-foreground mb-6 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Supercharge your productivity with our comprehensive Power Platform
              solutions, playbooks, and expert guidance.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className={social.isLucide ? "h-5 w-5" : "h-4 w-4"} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground hover:text-black transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about Power Platform? We're here to help.
            </p>
            <div className="flex items-center space-x-2 text-sm" data-testid="text-footer-email">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <a href="mailto:info@powertap.co" className="text-muted-foreground hover:text-black transition-colors">
                info@powertap.co
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2024 PowerTap. All rights reserved. | Supercharging productivity
            with Power Platform solutions.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
