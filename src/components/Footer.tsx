
import { Link } from "react-router-dom";
import { Terminal, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-muted mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <Terminal className="h-6 w-6 text-kube-500" />
              <span className="ml-2 text-lg logo-text text-foreground">
                Kube<span className="text-kube-500">Learn</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Interactive Kubernetes learning platform with CTF challenges for Cloud, DevOps, Security and AI skills.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Platform</h3>
            <ul role="list" className="mt-4 space-y-2">
              <FooterLink to="/playground">Playground</FooterLink>
              <FooterLink to="/challenges">Challenges</FooterLink>
              <FooterLink to="/learn">Learning Paths</FooterLink>
              <FooterLink to="/community">Community</FooterLink>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul role="list" className="mt-4 space-y-2">
              <FooterLink to="/docs">Documentation</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/faqs">FAQs</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul role="list" className="mt-4 space-y-2">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KubeLearn CTF. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Made with ❤️ for the Kubernetes community
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        {children}
      </Link>
    </li>
  );
}
