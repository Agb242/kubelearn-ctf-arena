
import { useState } from "react";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";
import MonacoEditor from "@/components/MonacoEditor";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { TerminalSquare, FileCode, Play } from "lucide-react";

export default function Playground() {
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleRunCode = (code: string) => {
    // Simulate code execution
    setResult("Applying manifest...");
    
    setTimeout(() => {
      setResult(`
deployment.apps/nginx-deployment created
>> kubectl get deployments
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
nginx-deployment   0/3     3            0           2s

>> kubectl get pods
NAME                                READY   STATUS              RESTARTS   AGE
nginx-deployment-66b6c48dd5-5zrxd   0/1     ContainerCreating   0          5s
nginx-deployment-66b6c48dd5-mfnwf   0/1     ContainerCreating   0          5s
nginx-deployment-66b6c48dd5-wrhhx   0/1     ContainerCreating   0          5s
      `);
      
      toast({
        title: "Deployment created",
        description: "nginx-deployment has been created successfully.",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-muted/30 border-b border-muted">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Kubernetes Playground</h1>
            <p className="mt-2 text-muted-foreground">
              Experiment with Kubernetes in a safe, isolated environment.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-muted p-4 sticky top-20">
                <h3 className="font-medium mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Play size={14} className="mr-2" />
                    Create Deployment
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Play size={14} className="mr-2" />
                    Create Service
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Play size={14} className="mr-2" />
                    Create ConfigMap
                  </Button>
                </div>
                
                <h3 className="font-medium mt-6 mb-4">Templates</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <FileCode size={14} className="mr-2" />
                    Deployment
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <FileCode size={14} className="mr-2" />
                    Service
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <FileCode size={14} className="mr-2" />
                    Ingress
                  </Button>
                </div>
                
                <div className="mt-6 p-3 bg-muted/50 rounded text-xs text-muted-foreground">
                  <p>
                    This is a sandbox environment. Changes will not persist after your session ends.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-4">
              <Tabs defaultValue="terminal">
                <TabsList className="mb-6">
                  <TabsTrigger value="terminal" className="flex items-center">
                    <TerminalSquare size={16} className="mr-2" />
                    Terminal
                  </TabsTrigger>
                  <TabsTrigger value="editor" className="flex items-center">
                    <FileCode size={16} className="mr-2" />
                    YAML Editor
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="terminal" className="space-y-4">
                  <div className="text-sm text-muted-foreground mb-4">
                    Run kubectl commands directly in your browser. Type <code className="bg-muted p-1 rounded">help</code> to see available commands.
                  </div>
                  <Terminal className="min-h-[400px]" />
                </TabsContent>
                
                <TabsContent value="editor" className="space-y-4">
                  <div className="text-sm text-muted-foreground mb-4">
                    Edit Kubernetes YAML manifests and apply them to your cluster.
                  </div>
                  <MonacoEditor onRun={handleRunCode} />
                  
                  {result && (
                    <div className="terminal-wrapper mt-4">
                      <div className="terminal-header">
                        <div className="terminal-dot terminal-dot-red"></div>
                        <div className="terminal-dot terminal-dot-yellow"></div>
                        <div className="terminal-dot terminal-dot-green"></div>
                        <div className="flex-1 text-xs text-center">Result</div>
                      </div>
                      <div className="terminal-body">
                        <pre className="terminal-text whitespace-pre-wrap">{result}</pre>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
