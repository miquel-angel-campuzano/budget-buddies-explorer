
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, Plus, Minus, DollarSign, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const Game = () => {
  const { topicId, lessonId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  
  // Sample game content - now with educational financial content
  const gameContent = {
    'saving-money': {
      '1': {
        title: 'Why Save Money?',
        description: 'Understand the importance of saving money for your future.',
        steps: [
          {
            type: 'intro',
            title: 'The Power of Saving',
            content: 'Saving money is like giving a gift to your future self. It helps you prepare for unexpected expenses, achieve your goals, and build financial independence.',
            image: 'piggy-bank'
          },
          {
            type: 'quiz',
            question: 'Which of these is NOT a good reason to save money?',
            options: [
              'To be prepared for emergencies',
              'To buy important things in the future',
              'To spend it all on candy right away',
              'To help reach your goals'
            ],
            correctAnswer: 2
          },
          {
            type: 'completion',
            title: 'Great Job!',
            description: 'You now understand why saving money is important. Remember, saving is the first step toward financial freedom!',
            xpEarned: 100
          }
        ]
      },
      '2': {
        title: 'Setting Savings Goals',
        description: 'Learn how to set smart goals for your savings.',
        steps: [
          {
            type: 'intro',
            title: 'Setting Clear Goals',
            content: 'Having a specific goal makes saving easier and more motivating. A good goal should be specific, measurable, achievable, relevant, and time-bound (SMART).',
            image: 'piggy-bank'
          },
          {
            type: 'calculation',
            title: 'Goal Timeline',
            description: 'If you want to save $50 for a game, and you can save $5 each week, how many weeks will it take to reach your goal?',
            answer: 10
          },
          {
            type: 'completion',
            title: 'Goal Setter!',
            description: 'You now know how to set SMART savings goals. Remember, having clear goals will make saving more effective and fun!',
            xpEarned: 100
          }
        ]
      },
      '3': {
        title: 'Creating a Savings Plan',
        description: 'Learn how to make a savings plan that works for you!',
        steps: [
          {
            type: 'intro',
            title: 'Building Your Plan',
            content: 'A savings plan helps you reach your goals. Start by deciding how much you can save regularly, where you'll keep your money, and how to track your progress.',
            image: 'piggy-bank'
          },
          {
            type: 'drag-drop',
            title: 'Needs vs. Wants',
            description: 'Drag each item to the correct category:',
            items: [
              { id: 'food', label: 'Food', category: 'need' },
              { id: 'toys', label: 'Toys', category: 'want' },
              { id: 'clothes', label: 'Clothes', category: 'need' },
              { id: 'games', label: 'Video Games', category: 'want' }
            ]
          },
          {
            type: 'completion',
            title: 'Plan Master!',
            description: 'You now know how to create a savings plan. Understanding needs vs. wants will help you decide where to save money!',
            xpEarned: 100
          }
        ]
      },
      '4': {
        title: 'Tracking Your Savings',
        description: 'Learn how to keep track of your savings progress.',
        steps: [
          {
            type: 'intro',
            title: 'Monitoring Your Money',
            content: 'Tracking your savings keeps you motivated and helps you stay on course. You can use a savings journal, app, or even a simple chart.',
            image: 'piggy-bank'
          },
          {
            type: 'quiz',
            question: 'Why is tracking your savings important?',
            options: [
              'It makes money grow faster',
              'It helps you stay motivated and see progress',
              'It's a rule that banks require',
              'It makes saving more difficult'
            ],
            correctAnswer: 1
          },
          {
            type: 'completion',
            title: 'Tracking Expert!',
            description: 'You now understand the importance of tracking your savings. Regular tracking will help you achieve your financial goals!',
            xpEarned: 100
          }
        ]
      }
    },
    'compound-interest': {
      '1': {
        title: 'What is Interest?',
        description: 'Learn about interest and how it works with money.',
        steps: [
          {
            type: 'intro',
            title: 'Understanding Interest',
            content: 'Interest is extra money you earn when you save or extra money you pay when you borrow. It's like a reward for saving or a fee for borrowing.',
            image: 'piggy-bank'
          },
          {
            type: 'calculation',
            title: 'Simple Interest',
            description: 'If you save $100 with 5% interest per year, how much interest will you earn in one year?',
            answer: 5
          },
          {
            type: 'completion',
            title: 'Interest Explorer!',
            description: 'You now understand what interest is and how it works. This knowledge is key to understanding how money can grow!',
            xpEarned: 100
          }
        ]
      },
      '2': {
        title: 'Simple vs. Compound Interest',
        description: 'Discover the difference between simple and compound interest.',
        steps: [
          {
            type: 'intro',
            title: 'The Magic of Compound Interest',
            content: 'Simple interest is calculated only on the original amount. Compound interest is calculated on both the original amount AND on the interest already earned, making your money grow faster!',
            image: 'piggy-bank'
          },
          {
            type: 'drag-drop',
            title: 'Interest Types',
            description: 'Drag each characteristic to the correct type of interest:',
            items: [
              { id: 'original', label: 'Calculated on original amount only', category: 'simple' },
              { id: 'both', label: 'Calculated on original + past interest', category: 'compound' },
              { id: 'faster', label: 'Makes money grow faster over time', category: 'compound' },
              { id: 'steady', label: 'Grows at a steady rate', category: 'simple' }
            ]
          },
          {
            type: 'completion',
            title: 'Interest Master!',
            description: 'You now understand the difference between simple and compound interest. Compound interest is how small savings can become large over time!',
            xpEarned: 100
          }
        ]
      }
    },
    'investing-basics': {
      '1': {
        title: 'What is Investing?',
        description: 'Learn the basics of investing and how it helps build wealth.',
        steps: [
          {
            type: 'intro',
            title: 'Introduction to Investing',
            content: 'Investing means putting your money into something with the hope it will grow over time. Unlike saving, investing involves some risk, but can lead to greater rewards.',
            image: 'piggy-bank'
          },
          {
            type: 'quiz',
            question: 'How is investing different from saving?',
            options: [
              'Investing is always guaranteed to make money',
              'Saving is only for adults, investing is for kids',
              'Investing involves some risk but potential for higher growth',
              'Saving and investing are exactly the same thing'
            ],
            correctAnswer: 2
          },
          {
            type: 'completion',
            title: 'Investment Rookie!',
            description: 'You now understand the basics of investing! Remember that investing is a long-term strategy for building wealth.',
            xpEarned: 100
          }
        ]
      }
    }
  };
  
  // Access game content based on topicId and lessonId
  const content = topicId && lessonId && gameContent[topicId as keyof typeof gameContent]?.[lessonId as keyof (typeof gameContent)[keyof typeof gameContent]];
  
  if (!content) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center p-8 h-full">
          <h1 className="text-xl font-bold">Lesson not found</h1>
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
  
  const currentContent = content.steps[currentStep];
  
  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  
  // Drag and drop state
  const [categories, setCategories] = useState({
    need: [] as string[],
    want: [] as string[],
    simple: [] as string[],
    compound: [] as string[]
  });
  const [showDragDropFeedback, setShowDragDropFeedback] = useState(false);
  
  // Calculation state
  const [calculationAnswer, setCalculationAnswer] = useState('');
  const [showCalculationFeedback, setShowCalculationFeedback] = useState(false);
  
  // Handle quiz answer submission
  const handleQuizSubmit = () => {
    if (selectedOption === null) return;
    
    setShowQuizFeedback(true);
    
    if (currentContent.type === 'quiz' && selectedOption === currentContent.correctAnswer) {
      toast.success('Correct answer!');
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
        setShowQuizFeedback(false);
      }, 1500);
    } else {
      toast.error('Try again!');
      setTimeout(() => {
        setShowQuizFeedback(false);
      }, 1500);
    }
  };
  
  // Handle drag and drop
  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };
  
  const handleDragOver = (e: React.DragEvent, category: string) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent, category: string) => {
    e.preventDefault();
    
    if (draggedItem) {
      // Remove item from all categories to avoid duplicates
      const updatedNeed = categories.need.filter(id => id !== draggedItem);
      const updatedWant = categories.want.filter(id => id !== draggedItem);
      const updatedSimple = categories.simple.filter(id => id !== draggedItem);
      const updatedCompound = categories.compound.filter(id => id !== draggedItem);
      
      // Add to the correct category
      if (category === 'need') {
        setCategories({
          ...categories,
          need: [...updatedNeed, draggedItem],
          want: updatedWant,
          simple: updatedSimple,
          compound: updatedCompound
        });
      } else if (category === 'want') {
        setCategories({
          ...categories,
          need: updatedNeed,
          want: [...updatedWant, draggedItem],
          simple: updatedSimple,
          compound: updatedCompound
        });
      } else if (category === 'simple') {
        setCategories({
          ...categories,
          need: updatedNeed,
          want: updatedWant,
          simple: [...updatedSimple, draggedItem],
          compound: updatedCompound
        });
      } else if (category === 'compound') {
        setCategories({
          ...categories,
          need: updatedNeed,
          want: updatedWant,
          simple: updatedSimple,
          compound: [...updatedCompound, draggedItem]
        });
      }
      
      setDraggedItem(null);
    }
  };
  
  const handleDragDropCheck = () => {
    if (currentContent.type !== 'drag-drop') return;
    
    // Check if all items are categorized
    const allItems = currentContent.items.map(item => item.id);
    const categorizedItems = [
      ...categories.need, 
      ...categories.want,
      ...categories.simple,
      ...categories.compound
    ];
    
    if (categorizedItems.length !== allItems.length) {
      toast.error('Please categorize all items');
      return;
    }
    
    // Check if items are correctly categorized
    let allCorrect = true;
    
    for (const item of currentContent.items) {
      if (item.category === 'need' && !categories.need.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'want' && !categories.want.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'simple' && !categories.simple.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'compound' && !categories.compound.includes(item.id)) {
        allCorrect = false;
        break;
      }
    }
    
    setShowDragDropFeedback(true);
    
    if (allCorrect) {
      toast.success('Great job!');
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setCategories({ 
          need: [], 
          want: [],
          simple: [],
          compound: []
        });
        setShowDragDropFeedback(false);
      }, 1500);
    } else {
      toast.error('Some items are in the wrong category. Try again!');
      setTimeout(() => {
        setShowDragDropFeedback(false);
      }, 1500);
    }
  };
  
  // Handle calculation answer
  const handleCalculationSubmit = () => {
    if (!calculationAnswer) return;
    
    setShowCalculationFeedback(true);
    
    if (currentContent.type === 'calculation' && parseInt(calculationAnswer) === currentContent.answer) {
      toast.success('Correct calculation!');
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setCalculationAnswer('');
        setShowCalculationFeedback(false);
      }, 1500);
    } else {
      toast.error('That\'s not right. Try again!');
      setTimeout(() => {
        setShowCalculationFeedback(false);
      }, 1500);
    }
  };
  
  // Handle next step
  const handleNextStep = () => {
    if (currentStep < content.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Lesson completed
      toast.success('Lesson completed!');
      setTimeout(() => {
        navigate(`/topic/${topicId}`);
      }, 1500);
    }
  };
  
  // Handle lesson completion
  const handleComplete = () => {
    // Show toast with XP earned
    toast.success(`Lesson completed! You earned ${currentContent.type === 'completion' ? currentContent.xpEarned : 100} XP`);
    
    // Navigate back to topic page
    setTimeout(() => {
      navigate(`/topic/${topicId}`);
    }, 2000);
  };

  return (
    <Layout>
      <div className="min-h-full flex flex-col pb-20">
        {/* Header */}
        <div className="pt-6 px-5 pb-4 bg-white border-b border-border sticky top-0 z-10">
          <button 
            onClick={() => navigate(`/topic/${topicId}`)}
            className="flex items-center text-muted-foreground mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to lessons</span>
          </button>
          
          <h1 className="text-xl font-bold">{content.title}</h1>
          <p className="text-sm text-muted-foreground">{content.description}</p>
          
          {/* Progress indicator */}
          <div className="flex mt-4 gap-1">
            {content.steps.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                  index < currentStep 
                    ? 'bg-finblue-500' 
                    : index === currentStep 
                      ? 'bg-finblue-300 animate-pulse-subtle' 
                      : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Game content */}
        <div className="flex-1 p-5">
          {/* Intro content */}
          {currentContent.type === 'intro' && (
            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="w-48 h-48 rounded-full bg-finblue-100 flex items-center justify-center mb-6 animate-float">
                <DollarSign className="w-24 h-24 text-finblue-500" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">{currentContent.title}</h2>
              <p className="text-muted-foreground mb-8">{currentContent.content}</p>
              
              <button 
                onClick={handleNextStep}
                className="fin-button-primary"
              >
                Let's start
              </button>
            </div>
          )}
          
          {/* Quiz content */}
          {currentContent.type === 'quiz' && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-6">{currentContent.question}</h2>
              
              <div className="space-y-3 mb-8">
                {currentContent.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    disabled={showQuizFeedback}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200
                      ${selectedOption === index 
                        ? 'border-finblue-400 bg-finblue-50' 
                        : 'border-border hover:border-finblue-200 hover:bg-finblue-50/30'
                      }
                      ${showQuizFeedback && selectedOption === index
                        ? selectedOption === currentContent.correctAnswer
                          ? 'border-fingreen-500 bg-fingreen-50'
                          : 'border-fincoral-500 bg-fincoral-50'
                        : ''
                      }
                      ${showQuizFeedback && index === currentContent.correctAnswer && selectedOption !== index
                        ? 'border-fingreen-500 bg-fingreen-50/30'
                        : ''
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center
                        ${selectedOption === index 
                          ? 'bg-finblue-500 text-white' 
                          : 'bg-muted'
                        }
                        ${showQuizFeedback && selectedOption === index
                          ? selectedOption === currentContent.correctAnswer
                            ? 'bg-fingreen-500'
                            : 'bg-fincoral-500'
                          : ''
                        }
                        ${showQuizFeedback && index === currentContent.correctAnswer && selectedOption !== index
                          ? 'bg-fingreen-500 text-white'
                          : ''
                        }
                      `}>
                        {showQuizFeedback ? (
                          index === currentContent.correctAnswer ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <X className="w-4 h-4" />
                          )
                        ) : (
                          <span className="text-xs">{String.fromCharCode(65 + index)}</span>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <button 
                onClick={handleQuizSubmit}
                disabled={selectedOption === null || showQuizFeedback}
                className="fin-button-primary w-full"
              >
                Check Answer
              </button>
            </div>
          )}
          
          {/* Drag and drop */}
          {currentContent.type === 'drag-drop' && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-2">{currentContent.title}</h2>
              <p className="text-muted-foreground mb-6">{currentContent.description}</p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                {/* Items to drag */}
                <div className="flex-1 p-4 rounded-xl border-2 border-dashed border-muted">
                  <h3 className="font-medium text-center mb-4">Items</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {currentContent.items.map(item => {
                      // Skip if already categorized
                      const allCategories = [...categories.need, ...categories.want, ...categories.simple, ...categories.compound];
                      if (allCategories.includes(item.id)) {
                        return null;
                      }
                      
                      return (
                        <div
                          key={item.id}
                          draggable
                          onDragStart={() => handleDragStart(item.id)}
                          className="py-2 px-4 bg-white rounded-full shadow-sm border border-border cursor-move hover:shadow-md transition-shadow"
                        >
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Drop zones - conditionally render based on categories in the current exercise */}
                <div className="flex flex-col gap-4 flex-1">
                  {/* Only show need/want categories if items with these categories exist */}
                  {currentContent.items.some(item => item.category === 'need' || item.category === 'want') && (
                    <>
                      {/* Needs category */}
                      <div 
                        className={`flex-1 p-4 rounded-xl border-2 ${showDragDropFeedback ? 'border-fingreen-200 bg-fingreen-50/50' : 'border-finblue-200 bg-finblue-50/50'}`}
                        onDragOver={(e) => handleDragOver(e, 'need')}
                        onDrop={(e) => handleDrop(e, 'need')}
                      >
                        <h3 className="font-medium text-center mb-4">Needs</h3>
                        <div className="flex flex-wrap gap-2 justify-center min-h-20">
                          {categories.need.map(id => {
                            const item = currentContent.items.find(item => item.id === id);
                            return (
                              <div
                                key={id}
                                className={`py-2 px-4 rounded-full shadow-sm border cursor-pointer
                                  ${showDragDropFeedback
                                    ? item?.category === 'need'
                                      ? 'bg-fingreen-100 border-fingreen-200 text-fingreen-700'
                                      : 'bg-fincoral-100 border-fincoral-200 text-fincoral-700'
                                    : 'bg-white border-border'
                                  }
                                `}
                              >
                                {item?.label}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Wants category */}
                      <div 
                        className={`flex-1 p-4 rounded-xl border-2 ${showDragDropFeedback ? 'border-fingreen-200 bg-fingreen-50/50' : 'border-fingold-200 bg-fingold-50/50'}`}
                        onDragOver={(e) => handleDragOver(e, 'want')}
                        onDrop={(e) => handleDrop(e, 'want')}
                      >
                        <h3 className="font-medium text-center mb-4">Wants</h3>
                        <div className="flex flex-wrap gap-2 justify-center min-h-20">
                          {categories.want.map(id => {
                            const item = currentContent.items.find(item => item.id === id);
                            return (
                              <div
                                key={id}
                                className={`py-2 px-4 rounded-full shadow-sm border cursor-pointer
                                  ${showDragDropFeedback
                                    ? item?.category === 'want'
                                      ? 'bg-fingreen-100 border-fingreen-200 text-fingreen-700'
                                      : 'bg-fincoral-100 border-fincoral-200 text-fincoral-700'
                                    : 'bg-white border-border'
                                  }
                                `}
                              >
                                {item?.label}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Only show simple/compound categories if items with these categories exist */}
                  {currentContent.items.some(item => item.category === 'simple' || item.category === 'compound') && (
                    <>
                      {/* Simple Interest category */}
                      <div 
                        className={`flex-1 p-4 rounded-xl border-2 ${showDragDropFeedback ? 'border-fingreen-200 bg-fingreen-50/50' : 'border-finblue-200 bg-finblue-50/50'}`}
                        onDragOver={(e) => handleDragOver(e, 'simple')}
                        onDrop={(e) => handleDrop(e, 'simple')}
                      >
                        <h3 className="font-medium text-center mb-4">Simple Interest</h3>
                        <div className="flex flex-wrap gap-2 justify-center min-h-20">
                          {categories.simple.map(id => {
                            const item = currentContent.items.find(item => item.id === id);
                            return (
                              <div
                                key={id}
                                className={`py-2 px-4 rounded-full shadow-sm border cursor-pointer
                                  ${showDragDropFeedback
                                    ? item?.category === 'simple'
                                      ? 'bg-fingreen-100 border-fingreen-200 text-fingreen-700'
                                      : 'bg-fincoral-100 border-fincoral-200 text-fincoral-700'
                                    : 'bg-white border-border'
                                  }
                                `}
                              >
                                {item?.label}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Compound Interest category */}
                      <div 
                        className={`flex-1 p-4 rounded-xl border-2 ${showDragDropFeedback ? 'border-fingreen-200 bg-fingreen-50/50' : 'border-fingold-200 bg-fingold-50/50'}`}
                        onDragOver={(e) => handleDragOver(e, 'compound')}
                        onDrop={(e) => handleDrop(e, 'compound')}
                      >
                        <h3 className="font-medium text-center mb-4">Compound Interest</h3>
                        <div className="flex flex-wrap gap-2 justify-center min-h-20">
                          {categories.compound.map(id => {
                            const item = currentContent.items.find(item => item.id === id);
                            return (
                              <div
                                key={id}
                                className={`py-2 px-4 rounded-full shadow-sm border cursor-pointer
                                  ${showDragDropFeedback
                                    ? item?.category === 'compound'
                                      ? 'bg-fingreen-100 border-fingreen-200 text-fingreen-700'
                                      : 'bg-fincoral-100 border-fincoral-200 text-fincoral-700'
                                    : 'bg-white border-border'
                                  }
                                `}
                              >
                                {item?.label}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <button 
                onClick={handleDragDropCheck}
                disabled={showDragDropFeedback}
                className="fin-button-primary w-full"
              >
                Check Categories
              </button>
            </div>
          )}
          
          {/* Calculation */}
          {currentContent.type === 'calculation' && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-2">{currentContent.title}</h2>
              <p className="text-muted-foreground mb-6">{currentContent.description}</p>
              
              <div className="bg-white p-5 rounded-xl border border-border mb-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="border-t border-dashed border-muted w-full pt-4 mt-2">
                    <p className="text-center mb-2">Enter your answer:</p>
                    <div className="relative flex items-center max-w-xs mx-auto">
                      <DollarSign className="absolute left-3 text-muted-foreground" />
                      <input
                        type="number"
                        value={calculationAnswer}
                        onChange={(e) => setCalculationAnswer(e.target.value)}
                        disabled={showCalculationFeedback}
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-offset-2
                          ${showCalculationFeedback 
                            ? parseInt(calculationAnswer) === currentContent.answer
                              ? 'border-fingreen-500 bg-fingreen-50 focus:ring-fingreen-500/50'
                              : 'border-fincoral-500 bg-fincoral-50 focus:ring-fincoral-500/50'
                            : 'border-muted focus:border-finblue-400 focus:ring-finblue-500/50'
                          }
                        `}
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleCalculationSubmit}
                disabled={!calculationAnswer || showCalculationFeedback}
                className="fin-button-primary w-full"
              >
                Check Answer
              </button>
            </div>
          )}
          
          {/* Completion */}
          {currentContent.type === 'completion' && (
            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="w-32 h-32 rounded-full bg-fingold-100 flex items-center justify-center mb-6 animate-float">
                <MessageCircle className="w-16 h-16 text-fingold-500" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">{currentContent.title}</h2>
              <p className="text-muted-foreground mb-4">{currentContent.description}</p>
              
              <div className="bg-finblue-50 rounded-xl p-4 mb-8 w-full max-w-xs">
                <p className="text-sm text-finblue-700 mb-2">You earned:</p>
                <div className="flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5 text-finblue-500" />
                  <span className="font-bold text-2xl">{currentContent.xpEarned} XP</span>
                </div>
              </div>
              
              <button 
                onClick={handleComplete}
                className="fin-button-primary"
              >
                Complete Lesson
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Game;
