
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal, Award, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-main" aria-hidden="true"></div>
      
      {/* Decorative elements - hexagon grid pattern */}
      <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div className="relative h-full">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute transform opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                borderRadius: '20%',
                background: `rgba(139, 92, 246, ${Math.random() * 0.3})`,
                filter: 'blur(40px)',
                animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-foreground">Master Kubernetes with</span>
              <span className="block logo-text text-kube-500 mt-1">KubeLearn CTF</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
              Interactive sandbox environment meets Capture The Flag challenges for learning Cloud, DevOps, Security and AI skills.
            </p>
            
            <div className="mt-8 flex justify-center space-x-3">
              <Badge variant="outline" className="py-1 border-muted">
                Kubernetes
              </Badge>
              <Badge variant="outline" className="py-1 border-muted">
                DevOps
              </Badge>
              <Badge variant="outline" className="py-1 border-muted">
                Security
              </Badge>
              <Badge variant="outline" className="py-1 border-muted">
                Cloud
              </Badge>
              <Badge variant="outline" className="py-1 border-muted">
                AI
              </Badge>
            </div>
            
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <div className="sm:mx-3">
                <Button size="lg" asChild className="w-full mb-4 sm:mb-0 sm:w-auto">
                  <Link to="/playground">
                    <Terminal className="mr-2 h-5 w-5" />
                    Try Playground
                  </Link>
                </Button>
              </div>
              <div className="sm:mx-3">
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/challenges">
                    <Award className="mr-2 h-5 w-5" />
                    Browse Challenges
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature section */}
      <div className="relative mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<Terminal className="h-8 w-8 text-kube-500" />}
              title="Interactive Sandbox"
              description="Real Kubernetes environment with kubectl and YAML editing directly in your browser."
            />
            <FeatureCard 
              icon={<Award className="h-8 w-8 text-kube-500" />}
              title="CTF Challenges"
              description="Capture flags by solving real-world problems across multiple technology domains."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-kube-500" />}
              title="Guided Learning"
              description="Structured learning paths from beginner to expert with hands-on exercises."
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-kube-500" />}
              title="Community"
              description="Connect with peers, share solutions, and compete on the leaderboard."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <div className="bg-gradient-card rounded-lg border border-muted p-6 transition-all duration-300 hover:border-primary/40">
      <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-md bg-primary/10 mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-center mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  );
}
