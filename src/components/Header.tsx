import React from 'react';
import { Crown, Clock, BookOpen, Radio } from 'lucide-react';

interface HeaderProps {
  onShowQuote: () => void;
}

export function Header({ onShowQuote }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-british-900 via-british-800 to-wartime-800 text-wartime-50 shadow-vintage border-b-4 border-victory-600">
      {/* Top decorative border */}
      <div className="h-2 bg-gradient-to-r from-victory-600 via-wartime-600 to-victory-600"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Churchill Portrait with vintage frame */}
            <div className="relative">
              <div className="w-16 h-16 rounded-lg overflow-hidden shadow-vintage border-4 border-wartime-400 bg-wartime-100 p-1">
                <div className="w-full h-full rounded border-2 border-wartime-600 overflow-hidden">
                  <img 
                    src="public\Churchill_portrait_NYP_45063 copy.webp"
                    alt="The Right Honourable Sir Winston Churchill"
                    className="w-full h-full object-cover sepia-[0.3] contrast-110"
                  />
                </div>
              </div>
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-wartime-400"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-wartime-400"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-wartime-400"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-wartime-400"></div>
            </div>
            
            <div className="text-left">
              <h1 className="text-3xl font-garamond font-bold text-wartime-100 tracking-wide">
                THE CHURCHILL
              </h1>
              <h2 className="text-xl font-garamond font-semibold text-victory-300 -mt-1">
                TIME MACHINE
              </h2>
              <p className="text-wartime-300 text-sm font-times mt-1 tracking-wider">
                WARTIME CORRESPONDENCE • EST. 1940
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Quote button styled as vintage radio button */}
            <button
              onClick={onShowQuote}
              className="flex items-center gap-3 px-6 py-3 bg-wartime-700 hover:bg-wartime-600 border-2 border-wartime-500 rounded-sm shadow-typewriter transition-all duration-200 hover:shadow-vintage group"
              title="Receive a transmission from the Prime Minister"
            >
              <Radio className="w-5 h-5 text-wartime-200 group-hover:text-wartime-100" />
              <span className="font-times font-semibold text-wartime-200 group-hover:text-wartime-100 tracking-wide">
                TRANSMISSION
              </span>
            </button>
            
            {/* Era indicator styled as vintage badge */}
            <div className="flex items-center gap-3 px-4 py-2 bg-british-800 border-2 border-british-600 rounded-sm shadow-paper">
              <Clock className="w-4 h-4 text-wartime-300" />
              <div className="text-right">
                <div className="text-xs text-wartime-400 font-typewriter tracking-wider">ERA</div>
                <div className="text-sm font-times font-bold text-wartime-200">1874-1965</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="h-1 bg-gradient-to-r from-wartime-600 via-victory-500 to-wartime-600"></div>
    </header>
  );
}