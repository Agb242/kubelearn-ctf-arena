
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Terminal, Award, BookOpen, Users, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AppNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="border-b border-muted bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Terminal className="h-8 w-8 text-kube-500" />
              <span className="ml-2 text-xl logo-text text-foreground">
                Kube<span className="text-kube-500">Learn</span>
              </span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <NavLink to="/playground" icon={<Terminal size={16} />} text="Playground" />
              <NavLink to="/challenges" icon={<Award size={16} />} text="Challenges" />
              <NavLink to="/learn" icon={<BookOpen size={16} />} text="Learn" />
              <NavLink to="/community" icon={<Users size={16} />} text="Community" />
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="outline" size="sm" className="hidden lg:flex">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button size="sm">Sign In</Button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-foreground hover:bg-secondary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card shadow-lg rounded-b-lg">
            <MobileNavLink to="/playground" text="Playground" />
            <MobileNavLink to="/challenges" text="Challenges" />
            <MobileNavLink to="/learn" text="Learn" />
            <MobileNavLink to="/community" text="Community" />
            <div className="pt-4 flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button size="sm" className="flex-1">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
  >
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

const MobileNavLink = ({ to, text }: { to: string; text: string }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
  >
    {text}
  </Link>
);
