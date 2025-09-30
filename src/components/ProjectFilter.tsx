import React from 'react';
import { Filter } from 'lucide-react';

interface ProjectFilterProps {
  darkMode: boolean;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ darkMode, activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'content', label: 'Content' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center mr-4">
        <Filter className={`w-5 h-5 mr-2 ${darkMode ? 'text-gold-400' : 'text-black'}`} />
        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Filter:</span>
      </div>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            activeFilter === filter.id
              ? darkMode
                ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black shadow-gold-500/25'
                : 'bg-black text-white shadow-gray-500/25'
              : darkMode
                ? 'glass-card text-gray-300 hover:text-gold-400 hover:bg-gray-800/50'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;