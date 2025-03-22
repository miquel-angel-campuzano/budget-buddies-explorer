
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, CheckCircle, BarChart, TrendingUp, PiggyBank, Home, DollarSign } from 'lucide-react';
import Layout from '@/components/Layout';
import ProgressBar from '@/components/ProgressBar';

const Topic = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  
  // Map of topic data - this would normally come from a backend
  const topicsData = {
    'saving-money': {
      title: 'Saving Money',
      description: 'Learn why saving is important and how to start.',
      icon: PiggyBank,
      color: 'blue' as const,
      progress: 85,
      lessons: [
        { 
          id: 1, 
          title: 'Why Save Money?', 
          description: 'Understand the importance of saving money for your future.',
          completed: true 
        },
        { 
          id: 2, 
          title: 'Setting Savings Goals', 
          description: 'Learn how to set achievable savings goals that matter to you.',
          completed: true 
        },
        { 
          id: 3, 
          title: 'Creating a Savings Plan', 
          description: 'Learn how to make a savings plan that works for you!',
          completed: false 
        },
        { 
          id: 4, 
          title: 'Tracking Your Savings', 
          description: 'Learn how to keep track of your savings and watch them grow!',
          completed: false 
        },
      ]
    },
    'compound-interest': {
      title: 'Compound Interest',
      description: 'Discover the magic of compound interest.',
      icon: TrendingUp,
      color: 'green' as const,
      progress: 40,
      lessons: [
        { 
          id: 1, 
          title: 'What is Interest?', 
          description: 'Learn about the basics of interest and how it works.',
          completed: true 
        },
        { 
          id: 2, 
          title: 'Simple vs. Compound Interest', 
          description: 'Discover the magic of compound interest and how it makes your money grow faster.',
          completed: false 
        },
        { 
          id: 3, 
          title: 'The Power of Time', 
          description: 'Learn why starting to save early is so important with compound interest.',
          completed: false 
        },
        { 
          id: 4, 
          title: 'Calculating Compound Interest', 
          description: 'Learn to calculate how your savings will grow over time with compound interest.',
          completed: false 
        },
      ]
    },
    'investing-basics': {
      title: 'Investing Basics',
      description: 'Learn why starting early with investing matters.',
      icon: BarChart,
      color: 'purple' as const,
      progress: 15,
      lessons: [
        { 
          id: 1, 
          title: 'What is Investing?', 
          description: 'Learn the basics of investing and why it\'s important for building wealth.',
          completed: true 
        },
        { 
          id: 2, 
          title: 'Different Types of Investments', 
          description: 'Explore various ways to invest your money wisely.',
          completed: false 
        },
        { 
          id: 3, 
          title: 'Risk and Reward', 
          description: 'Understand the balance between risk and potential returns in investing.',
          completed: false 
        },
        { 
          id: 4, 
          title: 'Starting Your Investment Journey', 
          description: 'Learn practical steps to begin investing, even with small amounts.',
          completed: false 
        },
      ]
    },
    'assets-vs-liabilities': {
      title: 'Assets vs. Liabilities',
      description: 'Understand what makes money work for you.',
      icon: Home,
      color: 'coral' as const,
      progress: 0,
      lessons: [
        { 
          id: 1, 
          title: 'What are Assets?', 
          description: 'Learn what assets are and how they can help build your wealth.',
          completed: false 
        },
        { 
          id: 2, 
          title: 'What are Liabilities?', 
          description: 'Understand what liabilities are and why they can slow down your financial growth.',
          completed: false 
        },
        { 
          id: 3, 
          title: 'Building Wealth with Assets', 
          description: 'Discover strategies for acquiring assets that grow in value over time.',
          completed: false 
        },
        { 
          id: 4, 
          title: 'Avoiding Bad Debt', 
          description: 'Learn to recognize and avoid liabilities that can drain your finances.',
          completed: false 
        },
      ]
    },
    'earning-budgeting': {
      title: 'Earning & Budgeting',
      description: 'Master managing your allowance and expenses.',
      icon: DollarSign,
      color: 'gold' as const,
      progress: 0,
      lessons: [
        { 
          id: 1, 
          title: 'Ways to Earn Money', 
          description: 'Explore different ways kids can earn money and develop entrepreneurial skills.',
          completed: false 
        },
        { 
          id: 2, 
          title: 'Creating a Budget', 
          description: 'Learn how to plan where your money will go before you spend it.',
          completed: false 
        },
        { 
          id: 3, 
          title: 'Needs vs. Wants', 
          description: 'Understand the difference between things you need and things you want.',
          completed: false 
        },
        { 
          id: 4, 
          title: 'Tracking Your Spending', 
          description: 'Discover tools and techniques to keep track of where your money goes.',
          completed: false 
        },
      ]
    },
  };
  
  const topic = topicsData[topicId as keyof typeof topicsData];
  
  if (!topic) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center p-8 h-full">
          <h1 className="text-xl font-bold">Topic not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 fin-button-primary"
          >
            Go back home
          </button>
        </div>
      </Layout>
    );
  }
  
  const TopicIcon = topic.icon;
  
  const iconColors = {
    blue: 'bg-finblue-100 text-finblue-600',
    gold: 'bg-fingold-100 text-fingold-600',
    coral: 'bg-fincoral-100 text-fincoral-600',
    green: 'bg-fingreen-100 text-fingreen-600',
    purple: 'bg-finpurple-100 text-finpurple-600',
  };
  
  const headerColors = {
    blue: 'from-finblue-100 to-finblue-200',
    gold: 'from-fingold-100 to-fingold-200',
    coral: 'from-fincoral-100 to-fincoral-200',
    green: 'from-fingreen-100 to-fingreen-200',
    purple: 'from-finpurple-100 to-finpurple-200',
  };

  return (
    <Layout>
      <div className="min-h-full flex flex-col pb-20">
        {/* Header */}
        <div className={`pt-6 px-5 pb-5 bg-gradient-to-br ${headerColors[topic.color]}`}>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-muted-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to home</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className={`rounded-full p-3 ${iconColors[topic.color]}`}>
              <TopicIcon className="w-6 h-6" />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold">{topic.title}</h1>
              <p className="text-muted-foreground mt-1">{topic.description}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between mb-1 text-sm">
              <span>Your progress</span>
              <span>{topic.progress}%</span>
            </div>
            <ProgressBar value={topic.progress} max={100} color={topic.color} />
          </div>
        </div>
        
        {/* Lessons list */}
        <div className="flex-1 p-5">
          <h2 className="text-xl font-bold mb-4">Lessons</h2>
          
          <div className="space-y-3">
            {topic.lessons.map((lesson, index) => (
              <div 
                key={lesson.id}
                className={`rounded-xl p-4 border-2 transition-all duration-300
                  ${index === 0 || lesson.completed 
                    ? 'bg-white border-muted cursor-pointer hover:shadow-md hover:-translate-y-0.5' 
                    : index === topic.lessons.findIndex(l => !l.completed)
                      ? 'bg-white border-muted cursor-pointer hover:shadow-md hover:-translate-y-0.5'
                      : 'bg-gray-50 border-gray-100 opacity-70 cursor-not-allowed'
                  }`}
                onClick={() => {
                  if (index === 0 || lesson.completed || index === topic.lessons.findIndex(l => !l.completed)) {
                    navigate(`/game/${topicId}/${lesson.id}`);
                  }
                }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center
                      ${lesson.completed 
                        ? 'bg-fingreen-100 text-fingreen-600' 
                        : index === topic.lessons.findIndex(l => !l.completed)
                          ? 'bg-fingold-100 text-fingold-600 animate-pulse-subtle'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {lesson.completed ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5 fill-current" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {lesson.completed 
                          ? 'Completed' 
                          : index === topic.lessons.findIndex(l => !l.completed)
                            ? 'In progress - Continue learning'
                            : 'Locked - Complete previous lessons first'
                        }
                      </p>
                    </div>
                  </div>
                  
                  {(index === 0 || lesson.completed || index === topic.lessons.findIndex(l => !l.completed)) && (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Topic;
