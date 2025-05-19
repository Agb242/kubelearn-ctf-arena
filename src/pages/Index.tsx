
import HeroSection from "@/components/HeroSection";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Index() {
  const featuredChallenges = [
    {
      title: "Pod Escape Artist",
      description: "Escape from a pod with limited permissions and capture the flag hidden in the host system.",
      difficulty: "medium",
      points: 250,
      type: "kubernetes",
      timeEstimate: "30 min",
      completedCount: 324,
    },
    {
      title: "Secret Harvester",
      description: "Find and decode Kubernetes secrets to discover the hidden flag.",
      difficulty: "easy",
      points: 150,
      type: "security",
      timeEstimate: "15 min",
      completedCount: 521,
    },
    {
      title: "YAML Injection",
      description: "Exploit a vulnerability in a CI/CD pipeline by crafting a malicious YAML file.",
      difficulty: "hard",
      points: 400,
      type: "devops",
      timeEstimate: "45 min",
      completedCount: 189,
    },
    {
      title: "Cloud Credential Theft",
      description: "Extract AWS credentials from a compromised pod and use them to access sensitive data.",
      difficulty: "expert",
      points: 500,
      type: "cloud",
      timeEstimate: "60 min",
      completedCount: 122,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Featured Challenges Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Challenges</h2>
            <Button variant="outline" asChild>
              <Link to="/challenges">
                View All
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredChallenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                title={challenge.title}
                description={challenge.description}
                difficulty={challenge.difficulty as any}
                points={challenge.points}
                type={challenge.type as any}
                timeEstimate={challenge.timeEstimate}
                completedCount={challenge.completedCount}
              />
            ))}
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatItem value="150+" label="Challenges" />
              <StatItem value="15K+" label="Players" />
              <StatItem value="250K+" label="Flags Captured" />
              <StatItem value="5" label="Technology Domains" />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start learning?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of developers improving their Kubernetes, DevOps, and security skills through interactive challenges.
          </p>
          <Button size="lg" asChild>
            <Link to="/playground">
              Start Your Journey
            </Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-kube-500">{value}</div>
      <div className="text-sm sm:text-base text-muted-foreground mt-2">{label}</div>
    </div>
  );
}
