import React, { useState } from 'react';
import LandingOption1 from './LandingOption1';
import LandingOption2 from './LandingOption2';
import LandingOption3 from './LandingOption3';

/**
 * Demo component to showcase all three brutalist landing page options
 * Allows easy switching between different design directions
 */

const LandingPageDemo: React.FC = () => {
  const [activeOption, setActiveOption] = useState<1 | 2 | 3>(1);

  const options = [
    { id: 1, name: 'Raw Concrete', description: 'Monochromatic minimalist brutalism' },
    { id: 2, name: 'Geometric Chaos', description: 'Bold colors with Swiss design' },
    { id: 3, name: 'Digital Terminal', description: 'Terminal aesthetic with stark contrast' },
  ];

  return (
    <div className="min-h-screen">
      {/* Floating option switcher */}
      <div className="fixed top-4 right-4 z-[9999] bg-white shadow-2xl rounded-lg border-2 border-gray-900">
        <div className="p-4">
          <div className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-600">
            Design Options
          </div>
          <div className="space-y-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveOption(option.id as 1 | 2 | 3)}
                className={`w-full text-left px-4 py-3 rounded transition-all ${
                  activeOption === option.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <div className="font-bold text-sm">Option {option.id}</div>
                <div className="text-xs opacity-80">{option.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Render active landing page */}
      {activeOption === 1 && <LandingOption1 />}
      {activeOption === 2 && <LandingOption2 />}
      {activeOption === 3 && <LandingOption3 />}
    </div>
  );
};

export default LandingPageDemo;
