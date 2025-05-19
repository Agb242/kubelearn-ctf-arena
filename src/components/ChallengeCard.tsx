
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Terminal } from "lucide-react";

type ChallengeType = 'kubernetes' | 'security' | 'cloud' | 'ai' | 'devops';

type ChallengeCardProps = {
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  points: number;
  type: ChallengeType;
  timeEstimate: string;
  completedCount?: number;
  completed?: boolean;
  className?: string;
};

export default function ChallengeCard({
  title,
  description,
  difficulty,
  points,
  type,
  timeEstimate,
  completedCount = 0,
  completed = false,
  className = '',
}: ChallengeCardProps) {
  // Map challenge type to badge color
  const typeClasses: Record<ChallengeType, string> = {
    kubernetes: 'badge-kubernetes',
    security: 'badge-security',
    cloud: 'badge-cloud',
    ai: 'badge-ai',
    devops: 'badge-devops',
  };

  // Map difficulty to colors
  const difficultyColors: Record<string, string> = {
    easy: 'text-green-400',
    medium: 'text-yellow-400',
    hard: 'text-orange-400',
    expert: 'text-red-400',
  };

  return (
    <div className={`challenge-card ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <span className={`badge-tech ${typeClasses[type]}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
        <div className="flex items-center">
          <Trophy size={14} className="text-yellow-500" />
          <span className="ml-1 text-sm font-medium">{points} pts</span>
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Clock size={14} className="text-muted-foreground" />
          <span className="ml-1 text-xs text-muted-foreground">{timeEstimate}</span>
        </div>
        <span className={`text-xs font-medium ${difficultyColors[difficulty]}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      
      {completed ? (
        <div className="mt-auto">
          <div className="progress-bar">
            <div className="progress-bar-fill w-full"></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-green-400">Completed</span>
            <Button size="sm" variant="outline">Review</Button>
          </div>
        </div>
      ) : (
        <div className="mt-auto">
          <div className="progress-bar">
            <div className="progress-bar-fill w-0"></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-muted-foreground">{completedCount} completed</span>
            <Button size="sm">
              <Terminal size={14} className="mr-1" />
              Start
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
