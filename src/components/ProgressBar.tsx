
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gold' | 'coral' | 'green' | 'purple';
}

const ProgressBar = ({
  value,
  max,
  className,
  showLabel = false,
  size = 'md',
  color = 'blue'
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
  
  const colorMap = {
    blue: 'bg-finblue-500',
    gold: 'bg-fingold-500',
    coral: 'bg-fincoral-500',
    green: 'bg-fingreen-500',
    purple: 'bg-finpurple-500'
  };
  
  const sizeMap = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between mb-1 text-sm font-medium">
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", sizeMap[size])}>
        <div 
          className={cn(
            "transition-all duration-500 ease-out rounded-full",
            colorMap[color]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
