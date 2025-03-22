
import React from 'react';
import TopicCard from './TopicCard';
import { 
  PiggyBank, 
  TrendingUp, 
  BarChart, 
  Home, 
  DollarSign 
} from 'lucide-react';

const LearningPath = () => {
  const topics = [
    {
      id: 'saving-money',
      title: 'Saving Money',
      description: 'Learn the importance of saving and how to start.',
      icon: PiggyBank,
      progress: 85,
      color: 'blue' as const,
      locked: false
    },
    {
      id: 'compound-interest',
      title: 'Compound Interest',
      description: 'Discover how your money can grow over time.',
      icon: TrendingUp,
      progress: 40,
      color: 'green' as const,
      locked: false
    },
    {
      id: 'investing-basics',
      title: 'Investing Basics',
      description: 'Find out why starting early matters in investing.',
      icon: BarChart,
      progress: 15,
      color: 'purple' as const,
      locked: false
    },
    {
      id: 'assets-vs-liabilities',
      title: 'Assets vs. Liabilities',
      description: 'Learn what makes money work for you.',
      icon: Home,
      progress: 0,
      color: 'coral' as const,
      locked: true
    },
    {
      id: 'earning-budgeting',
      title: 'Earning & Budgeting',
      description: 'Master managing your allowance and expenses.',
      icon: DollarSign,
      progress: 0,
      color: 'gold' as const,
      locked: true
    },
  ];

  return (
    <div className="space-y-4 p-5">
      <h2 className="text-xl font-bold mb-3">Your Learning Path</h2>
      
      <div className="space-y-4">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            id={topic.id}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
            progress={topic.progress}
            color={topic.color}
            locked={topic.locked}
            className="animate-fade-in"
          />
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
