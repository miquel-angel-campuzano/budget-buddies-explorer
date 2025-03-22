
import React from 'react';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StreakCounterProps {
  count: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const StreakCounter = ({
  count,
  className,
  size = 'md',
}: StreakCounterProps) => {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const iconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={cn(
      "flex items-center gap-1.5 font-medium rounded-full px-3 py-1.5",
      "bg-fingold-100 text-fincoral-700",
      sizeMap[size],
      className
    )}>
      <Flame className={cn(
        iconSizeMap[size], 
        "text-fincoral-500",
        count > 0 ? "animate-pulse-subtle" : ""
      )} />
      <span>{count} day{count !== 1 ? 's' : ''}</span>
    </div>
  );
};

export default StreakCounter;
