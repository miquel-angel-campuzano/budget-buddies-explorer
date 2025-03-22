
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProgressBar from './ProgressBar';

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  color: 'blue' | 'gold' | 'coral' | 'green' | 'purple';
  locked?: boolean;
  className?: string;
}

const TopicCard = ({
  id,
  title,
  description,
  icon: Icon,
  progress,
  color,
  locked = false,
  className,
}: TopicCardProps) => {
  const navigate = useNavigate();
  
  const colorMap = {
    blue: 'border-finblue-200 bg-finblue-50',
    gold: 'border-fingold-200 bg-fingold-50',
    coral: 'border-fincoral-200 bg-fincoral-50',
    green: 'border-fingreen-200 bg-fingreen-50',
    purple: 'border-finpurple-200 bg-finpurple-50',
  };
  
  const iconColorMap = {
    blue: 'text-finblue-500 bg-finblue-100',
    gold: 'text-fingold-700 bg-fingold-100',
    coral: 'text-fincoral-500 bg-fincoral-100',
    green: 'text-fingreen-600 bg-fingreen-100',
    purple: 'text-finpurple-600 bg-finpurple-100',
  };

  const handleClick = () => {
    if (!locked) {
      navigate(`/topic/${id}`);
    }
  };

  return (
    <div 
      className={cn(
        "topic-card border-2 relative overflow-hidden",
        colorMap[color],
        locked ? "opacity-80 grayscale cursor-not-allowed" : "",
        locked ? "hover:translate-y-0 hover:shadow-md" : "",
        className
      )}
      onClick={handleClick}
    >
      {locked && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/40 backdrop-blur-[1px] z-10">
          <div className="w-8 h-8 border-2 border-muted-foreground/50 rounded-full flex items-center justify-center">
            <span className="text-muted-foreground/70">🔒</span>
          </div>
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className={cn(
          "rounded-full p-3 flex-shrink-0",
          iconColorMap[color]
        )}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-3">{description}</p>
          
          <div className="flex justify-between items-center">
            <ProgressBar 
              value={progress} 
              max={100} 
              size="sm" 
              color={color} 
              className="w-2/3" 
            />
            
            <ArrowRight className={cn(
              "w-5 h-5 transition-transform duration-200",
              !locked && "group-hover:translate-x-1"
            )} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
