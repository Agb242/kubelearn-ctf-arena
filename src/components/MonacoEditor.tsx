
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Copy, Play } from 'lucide-react';

type MonacoEditorProps = {
  defaultValue?: string;
  language?: string;
  theme?: 'vs-dark' | 'light';
  height?: string;
  onRun?: (code: string) => void;
  className?: string;
};

// Default YAML example
const defaultYaml = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
`;

export default function MonacoEditor({
  defaultValue = defaultYaml,
  language = 'yaml',
  theme = 'vs-dark',
  height = '400px',
  onRun,
  className = '',
}: MonacoEditorProps) {
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentValue, setCurrentValue] = useState(defaultValue);

  useEffect(() => {
    // Mock Monaco Editor load for demonstration
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const handleRunCode = () => {
    if (onRun) {
      onRun(currentValue);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentValue);
  };

  const handleDownloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([currentValue], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `code.${language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex justify-between items-center bg-card rounded-t-md p-2 border border-b-0 border-muted">
        <div className="text-sm font-medium">deployment.yaml</div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={handleCopyCode}>
            <Copy size={14} className="mr-1" />
            Copy
          </Button>
          <Button size="sm" variant="outline" onClick={handleDownloadCode}>
            <Download size={14} className="mr-1" />
            Download
          </Button>
          <Button size="sm" onClick={handleRunCode}>
            <Play size={14} className="mr-1" />
            Apply
          </Button>
        </div>
      </div>
      <div 
        ref={containerRef}
        style={{ height, minHeight: '200px' }}
        className="border border-muted rounded-b-md overflow-hidden font-mono text-xs bg-[#1e1e1e]"
      >
        {!isLoaded ? (
          <div className="h-full flex items-center justify-center bg-muted">
            <span className="animate-pulse">Loading editor...</span>
          </div>
        ) : (
          <textarea
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            className="h-full w-full p-4 bg-[#1e1e1e] text-foreground resize-none focus:outline-none font-mono"
          />
        )}
      </div>
    </div>
  );
}
