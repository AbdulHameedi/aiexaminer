import React from 'react';
import { 
  Home, 
  Upload, 
  FileText, 
  Brain, 
  BarChart3, 
  Lightbulb, 
  Trophy,
  BookOpen,
  Zap
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'quiz', label: 'Quiz', icon: Brain },
    { id: 'study-tools', label: 'Study Tools', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'hints', label: 'Hints & Rewards', icon: Trophy },
  ];

  return (
    <nav className="bg-white border-r border-gray-200 w-64 min-h-screen">
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Documents</span>
              <span className="text-sm font-semibold text-primary-600">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Quizzes Taken</span>
              <span className="text-sm font-semibold text-secondary-600">47</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Avg. Score</span>
              <span className="text-sm font-semibold text-accent-600">87%</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};