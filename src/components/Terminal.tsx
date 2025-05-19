
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Terminal as TerminalIcon, Copy, ChevronRight } from 'lucide-react';

type TerminalProps = {
  className?: string;
};

export default function Terminal({ className = '' }: TerminalProps) {
  const [commandHistory, setCommandHistory] = useState<string[]>([
    "Welcome to KubeLearn CTF Terminal!",
    "Type 'help' to see available commands.",
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandIndex, setCommandIndex] = useState(-1);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandHistory]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand) {
      processCommand(currentCommand);
      setCurrentCommand('');
      setInputHistory([...inputHistory, currentCommand]);
      setCommandIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory(-1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory(1);
    }
  };

  const navigateHistory = (direction: number) => {
    let newIndex = commandIndex + direction;
    
    if (newIndex >= -1 && newIndex < inputHistory.length) {
      setCommandIndex(newIndex);
      
      if (newIndex === -1) {
        setCurrentCommand('');
      } else {
        setCurrentCommand(inputHistory[inputHistory.length - 1 - newIndex]);
      }
    }
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    let response = '';

    // Add user command to history
    setCommandHistory([...commandHistory, `$ ${trimmedCmd}`]);

    // Process command
    if (trimmedCmd === 'help') {
      response = [
        "Available commands:",
        "  help          - Show this help message",
        "  clear         - Clear terminal",
        "  kubectl       - Interact with Kubernetes cluster",
        "  ls            - List files in current directory",
        "  cat <file>    - View file contents",
      ].join('\n');
    } else if (trimmedCmd === 'clear') {
      setCommandHistory([]);
      return;
    } else if (trimmedCmd.startsWith('kubectl')) {
      response = handleKubectlCommand(trimmedCmd);
    } else if (trimmedCmd === 'ls') {
      response = "challenge-1/  challenge-2/  README.md  secrets.yaml  deployment.yaml";
    } else if (trimmedCmd.startsWith('cat')) {
      const parts = trimmedCmd.split(' ');
      if (parts.length < 2) {
        response = "cat: missing file operand";
      } else if (parts[1] === 'README.md') {
        response = [
          "# KubeLearn CTF",
          "",
          "Welcome to KubeLearn CTF! This environment contains several challenges for you to solve.",
          "Each challenge has a flag that you need to find and submit to earn points.",
          "",
          "Good luck!",
        ].join('\n');
      } else if (parts[1] === 'secrets.yaml') {
        response = [
          "apiVersion: v1",
          "kind: Secret",
          "metadata:",
          "  name: challenge-secret",
          "type: Opaque",
          "data:",
          "  # The flag is encoded in base64",
          "  flag: ZmxhZ3trdWJlcm5ldGVzX3NlY3JldHNfYXJlX25vdF9zZWN1cmV9Cg==",
        ].join('\n');
      } else {
        response = `cat: ${parts[1]}: No such file or directory`;
      }
    } else {
      response = `Command not found: ${trimmedCmd}`;
    }

    // Add response to history
    if (response) {
      setCommandHistory(prev => [...prev, response]);
    }
  };

  const handleKubectlCommand = (cmd: string): string => {
    const parts = cmd.split(' ');
    
    if (parts.length === 1) {
      return [
        "kubectl controls the Kubernetes cluster manager.",
        "",
        "Find more information at: https://kubernetes.io/docs/reference/kubectl/",
        "",
        "Basic Commands:",
        "  get         Display resources",
        "  describe    Show details of a resource",
        "  create      Create a resource",
        "  apply       Apply a configuration to a resource",
        "  delete      Delete resources",
        "",
        "Use 'kubectl <command> --help' for more information about a given command.",
      ].join('\n');
    }

    const subCommand = parts[1];

    if (subCommand === 'get') {
      if (parts.length === 2) {
        return "You need to specify a resource type. Examples: pods, services, deployments";
      }
      
      const resource = parts[2];
      
      if (resource === 'pods') {
        return [
          "NAME                           READY   STATUS    RESTARTS   AGE",
          "challenge-pod-1                1/1     Running   0          2h",
          "vulnerable-app-6d4b86d-8j4k2   1/1     Running   0          45m",
          "secure-api-7c88b6f67-t2j4b     1/1     Running   0          12m",
        ].join('\n');
      } else if (resource === 'services') {
        return [
          "NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE",
          "kubernetes    ClusterIP   10.96.0.1        <none>        443/TCP    3h",
          "vulnerable-app ClusterIP  10.109.124.177   <none>        80/TCP     45m",
          "secure-api    ClusterIP   10.111.92.56     <none>        8080/TCP   12m",
        ].join('\n');
      } else {
        return `No resources found in default namespace.`;
      }
    } else if (subCommand === 'describe') {
      if (parts.length < 4) {
        return "You need to specify a resource type and name.";
      }
      
      return [
        `Name:         ${parts[3]}`,
        `Namespace:    default`,
        `Labels:       app=${parts[3]}`,
        `Annotations:  <none>`,
        `Status:       Running`,
        `...`,
        `Events:`,
        `  Type    Reason     Age   From               Message`,
        `  ----    ------     ----  ----               -------`,
        `  Normal  Scheduled  2m    default-scheduler  Successfully assigned default/${parts[3]}`,
        `  Normal  Pulled     1m    kubelet            Container image pulled`,
        `  Normal  Created    1m    kubelet            Created container`,
        `  Normal  Started    1m    kubelet            Started container`,
      ].join('\n');
    } else {
      return `Error: command not yet implemented in this sandbox environment.`;
    }
  };

  const handleCopy = () => {
    const terminalContent = commandHistory.join('\n');
    navigator.clipboard.writeText(terminalContent);
  };

  return (
    <div className={`terminal-wrapper ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red"></div>
        <div className="terminal-dot terminal-dot-yellow"></div>
        <div className="terminal-dot terminal-dot-green"></div>
        <div className="flex-1 text-xs text-center">KubeLearn Terminal</div>
        <Button variant="ghost" size="sm" className="p-1 h-auto" onClick={handleCopy}>
          <Copy size={14} />
        </Button>
      </div>
      <div className="terminal-body">
        {commandHistory.map((line, index) => (
          <div key={index} className="terminal-text whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <div className="flex items-center mt-1">
          <ChevronRight size={16} className="text-kube-500 mr-1" />
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none terminal-text"
            autoFocus
          />
          <span className="cursor"></span>
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
