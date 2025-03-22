
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  name: string;
  icon: LucideIcon;
  unlocked?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Badge = ({
  name,
  icon: Icon,
  unlocked = false,
  size = 'md',
  className,
  onClick,
}: BadgeProps) => {
  const sizeMap = {
    sm: 'w-14 h-14',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  const iconSizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        className={cn(
          "achievement-badge group",
          sizeMap[size],
          unlocked 
            ? "bg-gradient-to-br from-fingold-300 to-fingold-500" 
            : "bg-gray-200",
          className
        )}
      >
        <Icon
          className={cn(
            iconSizeMap[size],
            unlocked 
              ? "text-white" 
              : "text-gray-400",
            unlocked && "animate-bounce-subtle"
          )}
        />
        {!unlocked && (
          <div className="absolute inset-0 bg-gray-100/80 backdrop-blur-[1px] flex items-center justify-center rounded-full border border-gray-200">
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
          </div>
        )}
        {unlocked && (
          <div className="absolute inset-0 bg-gradient-to-br from-fingold-400/40 to-fingold-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
            <span className="text-white text-xs font-bold">VIEW</span>
          </div>
        )}
      </button>
      <span className={cn(
        "text-xs font-medium text-center",
        unlocked ? "text-foreground" : "text-muted-foreground"
      )}>
        {name}
      </span>
    </div>
  );
};

export default Badge;
