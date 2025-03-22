import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, Plus, Minus, DollarSign, MessageCircle, PiggyBank, TrendingUp, BarChart } from 'lucide-react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const Game = () => {
  const { topicId, lessonId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  
  // Updated game content with real financial education lessons
  const gameContent = {
    'saving-money': {
      '1': {
        title: 'Why Save Money?',
        description: 'Understand the importance of saving money for your future.',
        steps: [
          {
            type: 'intro',
            title: 'The Power of Saving',
            content: 'Did you know that saving money is like giving a gift to your future self? Let\'s discover why saving is so important!',
            image: 'piggy-bank'
          },
          {
            type: 'quiz',
            question: 'Which of these is NOT a good reason to save money?',
            options: [
              'To be ready for emergencies',
              'To buy something special later',
              'To spend it all on candy right away',
              'To help reach your goals'
            ],
            correctAnswer: 2
          },
          {
            type: 'drag-drop',
            title: 'Saving Goals: Short vs. Long Term',
            description: 'Drag each savings goal to the correct category:',
            items: [
              { id: 'bike', label: 'New Bike', category: 'short' },
              { id: 'college', label: 'College Fund', category: 'long' },
              { id: 'game', label: 'Video Game', category: 'short' },
              { id: 'house', label: 'Future House', category: 'long' },
              { id: 'toy', label: 'Toy', category: 'short' },
              { id: 'retirement', label: 'Retirement', category: 'long' }
            ]
          },
          {
            type: 'calculation',
            title: 'Weekly Savings',
            description: 'If you save $2 every week, how much will you have saved after 10 weeks?',
            answer: 20
          },
          {
            type: 'completion',
            title: 'Saving Superstar!',
            description: 'You now understand the importance of saving money and setting savings goals. Remember, saving even a small amount regularly can make a big difference!',
            xpEarned: 100
          }
        ]
      },
      '2': {
        title: 'Setting Savings Goals',
        description: 'Learn how to set achievable savings goals that matter to you.',
        steps: [
          {
            type: 'intro',
            title: 'Goals Give Saving Purpose',
            content: 'Having a clear goal makes saving money much easier and more fun! Let\'s learn how to set smart savings goals.',
            image: 'target'
          },
          {
            type: 'quiz',
            question: 'What makes a good savings goal?',
            options: [
              'It\'s impossible to reach',
              'It\'s specific and has a timeframe',
              'It changes every day',
              'It requires borrowing money'
            ],
            correctAnswer: 1
          },
          {
            type: 'drag-drop',
            title: 'SMART Goal Components',
            description: 'Drag each item to the correct category of SMART goals:',
            items: [
              { id: 'specific', label: '"Save $15 for a game"', category: 'smart' },
              { id: 'measurable', label: '"Track savings weekly"', category: 'smart' },
              { id: 'vague', label: '"Save money sometime"', category: 'not-smart' },
              { id: 'attainable', label: '"Save $1 per week"', category: 'smart' },
              { id: 'unrealistic', label: '"Save $1000 in one day"', category: 'not-smart' },
              { id: 'timely', label: '"By my birthday in June"', category: 'smart' }
            ]
          },
          {
            type: 'calculation',
            title: 'Goal Timeline',
            description: 'If you want to save $36 for a special toy, and you can save $3 each week, how many weeks will it take to reach your goal?',
            answer: 12
          },
          {
            type: 'completion',
            title: 'Goal-Setting Expert!',
            description: 'You\'ve learned how to set SMART savings goals! Remember to make your goals Specific, Measurable, Attainable, Relevant, and Time-bound.',
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
      },
      '4': {
        title: 'Tracking Your Savings',
        description: 'Learn how to keep track of your savings and watch them grow!',
        steps: [
          {
            type: 'intro',
            title: 'Keeping Track of Your Money',
            content: 'Tracking your savings is like watching a plant grow - it\'s exciting to see progress! Let\'s learn how to track your savings.',
            image: 'chart'
          },
          {
            type: 'quiz',
            question: 'Why is it important to track your savings?',
            options: [
              'To make your parents happy',
              'To see if you\'re meeting your goals',
              'Because everyone else does it',
              'It\'s not really important'
            ],
            correctAnswer: 1
          },
          {
            type: 'drag-drop',
            title: 'Good vs. Bad Tracking Methods',
            description: 'Drag each method to the correct category:',
            items: [
              { id: 'journal', label: 'Savings Journal', category: 'good' },
              { id: 'memory', label: 'Just Remembering', category: 'bad' },
              { id: 'app', label: 'Savings App', category: 'good' },
              { id: 'jar', label: 'Clear Savings Jar', category: 'good' },
              { id: 'guessing', label: 'Guessing How Much', category: 'bad' },
              { id: 'chart', label: 'Progress Chart', category: 'good' }
            ]
          },
          {
            type: 'calculation',
            title: 'Tracking Progress',
            description: 'If your goal is to save $50, and you\'ve already saved $35, what percentage of your goal have you reached?',
            answer: 70
          },
          {
            type: 'completion',
            title: 'Tracking Master!',
            description: 'You now know how to track your savings effectively. Remember, watching your money grow can be exciting and motivating!',
            xpEarned: 100
          }
        ]
      }
    },
    'compound-interest': {
      '1': {
        title: 'What is Interest?',
        description: 'Learn about the basics of interest and how it works.',
        steps: [
          {
            type: 'intro',
            title: 'Understanding Interest',
            content: 'Interest is like a reward you get for saving your money in a bank. It\'s extra money that grows over time!',
            image: 'growth'
          },
          {
            type: 'quiz',
            question: 'What is interest?',
            options: [
              'Money you borrow from a friend',
              'Extra money the bank pays you for keeping your money with them',
              'A fee you pay to use a bank',
              'A type of coin'
            ],
            correctAnswer: 1
          },
          {
            type: 'drag-drop',
            title: 'Interest Facts',
            description: 'Drag each statement to True or False:',
            items: [
              { id: 'earn', label: 'You earn interest when you save money', category: 'true' },
              { id: 'borrow', label: 'You pay interest when you borrow money', category: 'true' },
              { id: 'instant', label: 'Interest makes you rich instantly', category: 'false' },
              { id: 'rate', label: 'Interest rate tells you how much interest you get', category: 'true' },
              { id: 'same', label: 'All banks pay the same interest rate', category: 'false' },
              { id: 'time', label: 'Interest grows more over time', category: 'true' }
            ]
          },
          {
            type: 'calculation',
            title: 'Simple Interest',
            description: 'If you save $100 in a bank that pays 5% interest per year, how much interest will you earn after 1 year?',
            answer: 5
          },
          {
            type: 'completion',
            title: 'Interest Expert!',
            description: 'Now you understand what interest is and how it works! This is the first step to making your money grow.',
            xpEarned: 100
          }
        ]
      },
      '2': {
        title: 'Simple vs. Compound Interest',
        description: 'Discover the magic of compound interest and how it makes your money grow faster.',
        steps: [
          {
            type: 'intro',
            title: 'The Magic of Compound Interest',
            content: 'Compound interest is like a snowball rolling downhill, getting bigger and bigger. It\'s interest earned on both your original money AND on the interest you\'ve already earned!',
            image: 'growth'
          },
          {
            type: 'quiz',
            question: 'What makes compound interest different from simple interest?',
            options: [
              'Compound interest is always a lower amount',
              'Simple interest is only for adults',
              'Compound interest earns interest on your interest',
              'They are exactly the same thing'
            ],
            correctAnswer: 2
          },
          {
            type: 'drag-drop',
            title: 'Simple vs. Compound Interest',
            description: 'Drag each characteristic to the correct type of interest:',
            items: [
              { id: 'original', label: 'Earns on original amount only', category: 'simple' },
              { id: 'both', label: 'Earns on original + past interest', category: 'compound' },
              { id: 'grows', label: 'Grows faster over time', category: 'compound' },
              { id: 'linear', label: 'Grows at a steady rate', category: 'simple' },
              { id: 'power', label: 'Has the power of exponential growth', category: 'compound' },
              { id: 'banks', label: 'Used by most banks today', category: 'compound' }
            ]
          },
          {
            type: 'calculation',
            title: 'Comparing Interest Types',
            description: 'If you save $100 at 10% interest for 3 years: With simple interest, you\'d have $130. With compound interest, how much would you have? (Hint: Year 1: $110, Year 2: $121, Year 3: ?)',
            answer: 133
          },
          {
            type: 'completion',
            title: 'Compound Interest Master!',
            description: 'You now understand the power of compound interest! Remember, the earlier you start saving, the more time compound interest has to work its magic.',
            xpEarned: 100
          }
        ]
      },
      '3': {
        title: 'The Power of Time',
        description: 'Learn why starting to save early is so important with compound interest.',
        steps: [
          {
            type: 'intro',
            title: 'Time: The Secret Ingredient',
            content: 'When it comes to compound interest, time is like a superpower. The longer your money grows, the bigger it becomes - even if you start with a small amount!',
            image: 'clock'
          },
          {
            type: 'quiz',
            question: 'Why is starting to save early so important?',
            options: [
              'Because banks only pay interest to young people',
              'Because you\'ll have more time for compound interest to grow your money',
              'Because saving is easier when you\'re young',
              'Because you\'ll have less money when you\'re older'
            ],
            correctAnswer: 1
          },
          {
            type: 'drag-drop',
            title: 'The Rule of 72',
            description: 'The Rule of 72 helps estimate how long it takes money to double. Drag each statement to True or False:',
            items: [
              { id: 'divide', label: 'Divide 72 by interest rate to find years to double money', category: 'true' },
              { id: 'rate', label: 'Higher interest rates make money double faster', category: 'true' },
              { id: 'complex', label: 'The Rule of 72 is too complex for kids to understand', category: 'false' },
              { id: 'double', label: 'At 6% interest, money doubles in about 12 years', category: 'true' },
              { id: 'triple', label: 'Money that doubles twice has quadrupled', category: 'true' },
              { id: 'adults', label: 'Only adults can benefit from compound interest', category: 'false' }
            ]
          },
          {
            type: 'calculation',
            title: 'The Power of Starting Early',
            description: 'Alex saves $100 per year for 10 years, then stops. Jamie waits 10 years, then saves $100 per year for 40 years. With 7% interest, who has more at age 65? The answer is Alex! Estimate how much MORE Alex would have (in whole dollars)?',
            answer: 39000
          },
          {
            type: 'completion',
            title: 'Time Value Expert!',
            description: 'Now you understand why time is your best friend when saving money. Remember, it\'s not just about how much you save, but how long you let it grow!',
            xpEarned: 100
          }
        ]
      },
      '4': {
        title: 'Calculating Compound Interest',
        description: 'Learn to calculate how your savings will grow over time with compound interest.',
        steps: [
          {
            type: 'intro',
            title: 'Growing Your Money Mathematically',
            content: 'Calculating compound interest might seem tricky, but it\'s actually fun to see how your money can grow! Let\'s learn the simple steps to figure it out.',
            image: 'calculator'
          },
          {
            type: 'quiz',
            question: 'What information do you need to calculate compound interest?',
            options: [
              'Only the amount you start with',
              'Only the interest rate',
              'Starting amount, interest rate, time period, and compounding frequency',
              'Your age and favorite color'
            ],
            correctAnswer: 2
          },
          {
            type: 'drag-drop',
            title: 'Compound Interest Formula Components',
            description: 'Drag each element to its correct description:',
            items: [
              { id: 'principal', label: 'Principal', category: 'starting-amount' },
              { id: 'rate', label: 'Interest Rate', category: 'percentage-growth' },
              { id: 'time', label: 'Time', category: 'years-growing' },
              { id: 'compounding', label: 'Compounding Frequency', category: 'times-per-year' },
              { id: 'simple', label: 'Simple Interest', category: 'not-compound' },
              { id: 'final', label: 'Future Value', category: 'ending-amount' }
            ]
          },
          {
            type: 'calculation',
            title: 'Compound Interest Calculation',
            description: 'If you save $200 at 5% interest compounded annually, how much will you have after 3 years? (Hint: Year 1: $210, Year 2: $220.50, Year 3: ?)',
            answer: 232
          },
          {
            type: 'completion',
            title: 'Calculation Wizard!',
            description: 'You\'ve mastered calculating compound interest! This skill will help you plan your savings and watch your money grow over time.',
            xpEarned: 100
          }
        ]
      }
    },
    'investing-basics': {
      '1': {
        title: 'What is Investing?',
        description: 'Learn the basics of investing and why it\'s important for building wealth.',
        steps: [
          {
            type: 'intro',
            title: 'Introduction to Investing',
            content: 'Investing is like planting seeds that can grow into trees. Instead of keeping all your money in a piggy bank, you can put some of it to work and watch it grow even more!',
            image: 'sprout'
          },
          {
            type: 'quiz',
            question: 'What is investing?',
            options: [
              'Spending money on things you want',
              'Hiding money under your mattress',
              'Putting money into something that might grow in value over time',
              'Giving your money to a friend'
            ],
            correctAnswer: 2
          },
          {
            type: 'drag-drop',
            title: 'Investing vs. Saving',
            description: 'Drag each characteristic to the correct category:',
            items: [
              { id: 'safe', label: 'Very low risk', category: 'saving' },
              { id: 'growth', label: 'Potential for higher growth', category: 'investing' },
              { id: 'access', label: 'Easy access to money', category: 'saving' },
              { id: 'long', label: 'Usually long-term', category: 'investing' },
              { id: 'risk', label: 'Some level of risk involved', category: 'investing' },
              { id: 'bank', label: 'Typically done in a bank account', category: 'saving' }
            ]
          },
          {
            type: 'calculation',
            title: 'Investment Growth',
            description: 'If you invest $50 that grows by 10% each year, how much will you have after 2 years?',
            answer: 61
          },
          {
            type: 'completion',
            title: 'Investment Basics Champion!',
            description: 'You now understand what investing is all about! Remember, investing is a way to grow your money over time, but it requires patience.',
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
  
  const currentContent = content?.steps[currentStep];
  
  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  
  // Drag and drop state
  const [categories, setCategories] = useState({
    need: [] as string[],
    want: [] as string[],
    short: [] as string[],
    long: [] as string[],
    true: [] as string[],
    false: [] as string[],
    simple: [] as string[],
    compound: [] as string[],
    smart: [] as string[],
    "not-smart": [] as string[],
    "starting-amount": [] as string[],
    "percentage-growth": [] as string[],
    "years-growing": [] as string[],
    "times-per-year": [] as string[],
    "not-compound": [] as string[],
    "ending-amount": [] as string[],
    saving: [] as string[],
    investing: [] as string[],
    good: [] as string[],
    bad: [] as string[]
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
      const updatedNeed = categories.need?.filter(id => id !== draggedItem) || [];
      const updatedWant = categories.want?.filter(id => id !== draggedItem) || [];
      const updatedShort = categories.short?.filter(id => id !== draggedItem) || [];
      const updatedLong = categories.long?.filter(id => id !== draggedItem) || [];
      const updatedTrue = categories.true?.filter(id => id !== draggedItem) || [];
      const updatedFalse = categories.false?.filter(id => id !== draggedItem) || [];
      const updatedSimple = categories.simple?.filter(id => id !== draggedItem) || [];
      const updatedCompound = categories.compound?.filter(id => id !== draggedItem) || [];
      const updatedSmart = categories.smart?.filter(id => id !== draggedItem) || [];
      const updatedNotSmart = categories["not-smart"]?.filter(id => id !== draggedItem) || [];
      const updatedStartingAmount = categories["starting-amount"]?.filter(id => id !== draggedItem) || [];
      const updatedPercentageGrowth = categories["percentage-growth"]?.filter(id => id !== draggedItem) || [];
      const updatedYearsGrowing = categories["years-growing"]?.filter(id => id !== draggedItem) || [];
      const updatedTimesPerYear = categories["times-per-year"]?.filter(id => id !== draggedItem) || [];
      const updatedNotCompound = categories["not-compound"]?.filter(id => id !== draggedItem) || [];
      const updatedEndingAmount = categories["ending-amount"]?.filter(id => id !== draggedItem) || [];
      const updatedSaving = categories.saving?.filter(id => id !== draggedItem) || [];
      const updatedInvesting = categories.investing?.filter(id => id !== draggedItem) || [];
      const updatedGood = categories.good?.filter(id => id !== draggedItem) || [];
      const updatedBad = categories.bad?.filter(id => id !== draggedItem) || [];
      
      // Add to the correct category
      setCategories(prevCategories => {
        return {
          ...prevCategories,
          need: category === 'need' ? [...updatedNeed, draggedItem] : updatedNeed,
          want: category === 'want' ? [...updatedWant, draggedItem] : updatedWant,
          short: category === 'short' ? [...updatedShort, draggedItem] : updatedShort,
          long: category === 'long' ? [...updatedLong, draggedItem] : updatedLong,
          true: category === 'true' ? [...updatedTrue, draggedItem] : updatedTrue,
          false: category === 'false' ? [...updatedFalse, draggedItem] : updatedFalse,
          simple: category === 'simple' ? [...updatedSimple, draggedItem] : updatedSimple,
          compound: category === 'compound' ? [...updatedCompound, draggedItem] : updatedCompound,
          smart: category === 'smart' ? [...updatedSmart, draggedItem] : updatedSmart,
          "not-smart": category === 'not-smart' ? [...updatedNotSmart, draggedItem] : updatedNotSmart,
          "starting-amount": category === 'starting-amount' ? [...updatedStartingAmount, draggedItem] : updatedStartingAmount,
          "percentage-growth": category === 'percentage-growth' ? [...updatedPercentageGrowth, draggedItem] : updatedPercentageGrowth,
          "years-growing": category === 'years-growing' ? [...updatedYearsGrowing, draggedItem] : updatedYearsGrowing,
          "times-per-year": category === 'times-per-year' ? [...updatedTimesPerYear, draggedItem] : updatedTimesPerYear,
          "not-compound": category === 'not-compound' ? [...updatedNotCompound, draggedItem] : updatedNotCompound,
          "ending-amount": category === 'ending-amount' ? [...updatedEndingAmount, draggedItem] : updatedEndingAmount,
          saving: category === 'saving' ? [...updatedSaving, draggedItem] : updatedSaving,
          investing: category === 'investing' ? [...updatedInvesting, draggedItem] : updatedInvesting,
          good: category === 'good' ? [...updatedGood, draggedItem] : updatedGood,
          bad: category === 'bad' ? [...updatedBad, draggedItem] : updatedBad,
        };
      });
      
      setDraggedItem(null);
    }
  };
  
  const handleDragDropCheck = () => {
    if (currentContent.type !== 'drag-drop') return;
    
    // Check if all items are categorized
    const allItems = currentContent.items.map(item => item.id);
    const categorizedItems = [
      ...(categories.need || []), 
      ...(categories.want || []),
      ...(categories.short || []),
      ...(categories.long || []),
      ...(categories.true || []),
      ...(categories.false || []),
      ...(categories.simple || []),
      ...(categories.compound || []),
      ...(categories.smart || []),
      ...(categories["not-smart"] || []),
      ...(categories["starting-amount"] || []),
      ...(categories["percentage-growth"] || []),
      ...(categories["years-growing"] || []),
      ...(categories["times-per-year"] || []),
      ...(categories["not-compound"] || []),
      ...(categories["ending-amount"] || []),
      ...(categories.saving || []),
      ...(categories.investing || []),
      ...(categories.good || []),
      ...(categories.bad || [])
    ];
    
    if (categorizedItems.length !== allItems.length) {
      toast.error('Please categorize all items');
      return;
    }
    
    // Check if items are correctly categorized
    let allCorrect = true;
    
    for (const item of currentContent.items) {
      if (item.category === 'need' && !categories.need?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'want' && !categories.want?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'short' && !categories.short?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'long' && !categories.long?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'true' && !categories.true?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'false' && !categories.false?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'simple' && !categories.simple?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'compound' && !categories.compound?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'smart' && !categories.smart?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'not-smart' && !categories["not-smart"]?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'starting-amount' && !categories["starting-amount"]?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'percentage-growth' && !categories["percentage-growth"]?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'years-growing' && !categories["years-growing"]?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'times-per-year' && !categories["times-per-year"]?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'not-compound' && !categories["not-compound"]?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'ending-amount' && !categories["ending-amount"]?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'saving' && !categories.saving?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'investing' && !categories.investing?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'good' && !categories.good?.includes(item.id)) {
        allCorrect = false;
        break;
      }
      if (item.category === 'bad' && !categories.bad?.includes(item.id)) {
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
          short: [],
          long: [],
          true: [],
          false: [],
          simple: [],
          compound: [],
          smart: [],
          "not-smart": [],
          "starting-amount": [],
          "percentage-growth": [],
          "years-growing": [],
          "times-per-year": [],
          "not-compound": [],
          "ending-amount": [],
          saving: [],
          investing: [],
          good: [],
          bad: []
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
    if (currentStep < (content?.steps.length || 0) - 1) {
      setCurrentStep(currentStep
