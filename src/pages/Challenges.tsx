
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";

export default function Challenges() {
  const challenges = {
    kubernetes: [
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
        title: "Config Map Mysteries",
        description: "Analyze ConfigMaps to find encoded data that leads to the hidden flag.",
        difficulty: "easy",
        points: 100,
        type: "kubernetes",
        timeEstimate: "15 min",
        completedCount: 562,
      },
      {
        title: "RBAC Attack Vectors",
        description: "Exploit RBAC misconfigurations to gain unauthorized access to sensitive resources.",
        difficulty: "hard",
        points: 350,
        type: "kubernetes",
        timeEstimate: "45 min",
        completedCount: 187,
      },
      {
        title: "Namespace Traversal",
        description: "Find a way to access resources in other namespaces despite isolation mechanisms.",
        difficulty: "expert",
        points: 450,
        type: "kubernetes",
        timeEstimate: "60 min",
        completedCount: 98,
      },
    ],
    security: [
      {
        title: "Secret Harvester",
        description: "Find and decode Kubernetes secrets to discover the hidden flag.",
        difficulty: "easy",
        points: 150,
        type: "security",
        timeEstimate: "15 min",
        completedCount: 521,
        completed: true,
      },
      {
        title: "Container Breakout",
        description: "Break out of a container by exploiting a vulnerability in the runtime.",
        difficulty: "hard",
        points: 400,
        type: "security",
        timeEstimate: "45 min",
        completedCount: 152,
      },
      {
        title: "Supply Chain Attack",
        description: "Investigate a compromised container image to find how attackers gained access.",
        difficulty: "medium",
        points: 300,
        type: "security",
        timeEstimate: "30 min",
        completedCount: 245,
      },
    ],
    cloud: [
      {
        title: "Cloud Credential Theft",
        description: "Extract AWS credentials from a compromised pod and use them to access sensitive data.",
        difficulty: "expert",
        points: 500,
        type: "cloud",
        timeEstimate: "60 min",
        completedCount: 122,
      },
      {
        title: "Privilege Escalation in Cloud",
        description: "Escalate your privileges in a cloud environment to gain access to restricted services.",
        difficulty: "hard",
        points: 400,
        type: "cloud",
        timeEstimate: "45 min",
        completedCount: 178,
      },
    ],
    devops: [
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
        title: "Pipeline Poisoning",
        description: "Analyze and exploit a vulnerable CI/CD pipeline to inject malicious code.",
        difficulty: "medium",
        points: 300,
        type: "devops",
        timeEstimate: "30 min",
        completedCount: 210,
      },
    ],
    ai: [
      {
        title: "LLM Prompt Injection",
        description: "Exploit a Large Language Model through clever prompt engineering to extract sensitive information.",
        difficulty: "medium",
        points: 300,
        type: "ai",
        timeEstimate: "30 min",
        completedCount: 175,
      },
      {
        title: "AI Model Evasion",
        description: "Develop inputs that cause a security AI model to incorrectly classify malicious activities.",
        difficulty: "expert",
        points: 500,
        type: "ai",
        timeEstimate: "60 min",
        completedCount: 82,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-muted/30 border-b border-muted">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">CTF Challenges</h1>
            <p className="mt-2 text-muted-foreground">
              Test your skills with hands-on challenges and capture the flags.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Search and filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search challenges..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter size={16} className="mr-2" />
              Filters
            </Button>
          </div>
          
          {/* Challenge tabs */}
          <Tabs defaultValue="kubernetes">
            <TabsList className="mb-6">
              <TabsTrigger value="kubernetes">Kubernetes</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
            </TabsList>
            
            <TabsContent value="kubernetes">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.kubernetes.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    {...challenge}
                    difficulty={challenge.difficulty as any}
                    type={challenge.type as any}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="security">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.security.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    {...challenge}
                    difficulty={challenge.difficulty as any}
                    type={challenge.type as any}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cloud">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.cloud.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    {...challenge}
                    difficulty={challenge.difficulty as any}
                    type={challenge.type as any}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="devops">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.devops.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    {...challenge}
                    difficulty={challenge.difficulty as any}
                    type={challenge.type as any}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ai">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.ai.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    {...challenge}
                    difficulty={challenge.difficulty as any}
                    type={challenge.type as any}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
