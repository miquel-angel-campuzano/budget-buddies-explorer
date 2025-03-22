
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Award, BookOpen, BarChart3, Settings } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Learn', path: '/learn' },
    { icon: BarChart3, label: 'Progress', path: '/progress' },
    { icon: Award, label: 'Rewards', path: '/rewards' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-finblue-50">
      {/* Content area */}
      <main className="flex-1 overflow-y-auto pb-16">
        {children}
      </main>
      
      {/* Bottom navigation for mobile */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-2 py-1 z-10">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center px-3 py-2 rounded-xl transition-all ${
                  isActive 
                    ? 'text-finblue-600 bg-finblue-50' 
                    : 'text-muted-foreground hover:text-finblue-500 hover:bg-finblue-50/50'
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'animate-bounce-subtle' : ''}`} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
