
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import StreakCounter from '@/components/StreakCounter';
import LearningPath from '@/components/LearningPath';
import Badge from '@/components/Badge';
import { Award, Zap, Play, LightbulbIcon, TrendingUp, Coins } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Simulate loading a user streak from storage
    const timer = setTimeout(() => {
      setStreak(4);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const recentBadges = [
    { name: 'Saver', icon: Coins, unlocked: true },
    { name: 'Streak', icon: Zap, unlocked: true },
    { name: 'Learner', icon: LightbulbIcon, unlocked: false },
  ];

  return (
    <Layout>
      <div className="min-h-full flex flex-col pb-20">
        {/* Header with greeting and streak */}
        <div className="pt-6 px-5 pb-4 bg-gradient-to-br from-finblue-100 to-finblue-200">
          <div className="flex justify-between items-start">
            <div className="animate-slide-down">
              <h1 className="text-2xl font-bold text-finblue-900">Hey, Buddy!</h1>
              <p className="text-finblue-700 mt-1">Ready to learn about money today?</p>
            </div>
            <StreakCounter count={streak} className="animate-slide-in-right" />
          </div>
          
          {/* Quick action card */}
          <div className="mt-6 rounded-2xl bg-white p-4 shadow-md border border-finblue-100 animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Continue Learning</h3>
                <p className="text-sm text-muted-foreground">Saving Money: Lesson 3</p>
              </div>
              <button 
                onClick={() => navigate('/topic/saving-money')}
                className="rounded-full bg-finblue-500 p-2 text-white shadow-sm hover:bg-finblue-600 transition-colors"
              >
                <Play className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Daily goal and achievements */}
        <div className="px-5 pt-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Recent Achievements</h2>
            <button 
              onClick={() => navigate('/rewards')}
              className="text-sm text-finblue-600 flex items-center gap-1"
            >
              <span>View all</span>
              <Award className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex justify-around py-2 px-4 bg-white rounded-2xl shadow-sm border border-border animate-fade-in">
            {recentBadges.map((badge, index) => (
              <Badge 
                key={index}
                name={badge.name}
                icon={badge.icon}
                unlocked={badge.unlocked}
                size="md"
              />
            ))}
          </div>
        </div>
        
        {/* Learning path section */}
        <div className="flex-1 mt-4">
          <LearningPath />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
