
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
  
  // Sample game content - would normally come from a backend
  const gameContent = {
    'saving-money': {
      '3': {
        title: 'Creating a Savings Plan',
        description: 'Learn how to make a savings plan that works for you!',
        steps: [
          {
            type: 'intro',
            title: 'Creating Your Savings Plan',
            content: 'A good savings plan helps you reach your goals. Let\'s learn how to create one step by step!',
            image: 'piggy-bank'
          },
          {
            type: 'quiz',
            question: 'Which is the FIRST step in creating a savings plan?',
            options: [
              'Decide how much to save each week',
              'Set clear savings goals',
              'Open a savings account',
              'Track your spending'
            ],
            correctAnswer: 1
          },
          {
            type: 'drag-drop',
            title: 'Needs vs. Wants',
            description: 'Drag each item to the correct category:',
            items: [
              { id: 'food', label: 'Food', category: 'need' },
              { id: 'toys', label: 'Toys', category: 'want' },
              { id: 'clothes', label: 'Clothes', category: 'need' },
              { id: 'games', label: 'Video Games', category: 'want' },
              { id: 'medicine', label: 'Medicine', category: 'need' },
              { id: 'candy', label: 'Candy', category: 'want' }
            ]
          },
          {
            type: 'calculation',
            title: 'Saving Calculation',
            description: 'If you get $10 allowance each week and save 20%, how much will you save in a month (4 weeks)?',
            answer: 8
          },
          {
            type: 'completion',
            title: 'Great Job!',
            description: 'You\'ve learned how to create a savings plan. Keep practicing to become a super saver!',
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
    want: [] as string[]
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
  
  const handleDragOver = (e: React.DragEvent, category: 'need' | 'want') => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent, category: 'need' | 'want') => {
    e.preventDefault();
    
    if (draggedItem) {
      // Remove item from both categories to avoid duplicates
      const updatedNeed = categories.need.filter(id => id !== draggedItem);
      const updatedWant = categories.want.filter(id => id !== draggedItem);
      
      // Add to the correct category
      if (category === 'need') {
        setCategories({
          need: [...updatedNeed, draggedItem],
          want: updatedWant
        });
      } else {
        setCategories({
          need: updatedNeed,
          want: [...updatedWant, draggedItem]
        });
      }
      
      setDraggedItem(null);
    }
  };
  
  const handleDragDropCheck = () => {
    if (currentContent.type !== 'drag-drop') return;
    
    // Check if all items are categorized
    const allItems = currentContent.items.map(item => item.id);
    const categorizedItems = [...categories.need, ...categories.want];
    
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
    }
    
    setShowDragDropFeedback(true);
    
    if (allCorrect) {
      toast.success('Great job!');
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setCategories({ need: [], want: [] });
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
                      if (categories.need.includes(item.id) || categories.want.includes(item.id)) {
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
                
                {/* Drop zones */}
                <div className="flex flex-col gap-4 flex-1">
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
                  <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                    <div className="text-center p-3 bg-finblue-50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Weekly Allowance</p>
                      <p className="font-bold text-xl">$10</p>
                    </div>
                    <div className="text-center p-3 bg-finblue-50 rounded-lg">
                      <p className="text-xs text-muted-foreground">Savings Rate</p>
                      <p className="font-bold text-xl">20%</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-dashed border-muted w-full pt-4 mt-2">
                    <p className="text-center mb-2">Amount saved per month (4 weeks):</p>
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
