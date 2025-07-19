import React from 'react';
import { Crown, Zap, Mic2, Radio, FileText, Users } from 'lucide-react';

export function WelcomeMessage() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12 px-6">
      {/* Main portrait with vintage styling */}
      <div className="relative mx-auto mb-8 w-32 h-32">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-vintage border-4 border-wartime-500 bg-wartime-100 p-2">
          <div className="w-full h-full rounded border-3 border-wartime-700 overflow-hidden">
            <img 
              src="public\Churchill_portrait_NYP_45063 copy.webp"
              alt="The Right Honourable Sir Winston Churchill"
              className="w-full h-full object-cover sepia-[0.4] contrast-110 brightness-105"
            />
          </div>
        </div>
        {/* Vintage corner decorations */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-victory-600"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-victory-600"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-victory-600"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-victory-600"></div>
      </div>
      
      {/* Title with 1940s typography */}
      <div className="mb-8">
        <h2 className="text-5xl font-garamond font-bold text-british-900 mb-2 tracking-wide">
          CHURCHILL
        </h2>
        <h3 className="text-3xl font-garamond font-semibold text-victory-700 -mt-2 tracking-wider">
          TIME MACHINE
        </h3>
        <div className="w-32 h-1 bg-gradient-to-r from-victory-600 to-wartime-600 mx-auto mt-4 mb-6"></div>
      </div>
      
      <div className="bg-paper bg-wartime-50 border-4 border-wartime-400 shadow-vintage rounded-sm p-8 mb-8">
        <p className="text-xl font-times text-british-800 mb-6 leading-relaxed italic">
          "Step into the corridors of Downing Street and engage in discourse with 
          the Right Honourable Winston Spencer Churchill, Prime Minister of Great Britain 
          during our nation's finest hour."
        </p>
        
        <p className="text-lg font-times text-british-700 leading-relaxed">
          Seek counsel on matters of state, inquire about the great events of our time, 
          or simply engage in the art of conversation with Britain's wartime leader.
        </p>
      </div>
      
      {/* Features grid with 1940s styling */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-wartime-100 border-3 border-wartime-500 shadow-paper rounded-sm p-6 hover:shadow-vintage transition-shadow duration-300">
          <div className="w-12 h-12 bg-british-700 rounded-sm flex items-center justify-center mx-auto mb-4 shadow-typewriter">
            <FileText className="w-6 h-6 text-wartime-100" />
          </div>
          <h3 className="font-garamond font-bold text-british-800 mb-3 text-lg tracking-wide">
            HISTORICAL ACCURACY
          </h3>
          <p className="text-sm font-times text-british-700 leading-relaxed">
            Responses drawn from Churchill's documented speeches, 
            parliamentary records, and personal correspondence
          </p>
        </div>
        
        <div className="bg-wartime-100 border-3 border-wartime-500 shadow-paper rounded-sm p-6 hover:shadow-vintage transition-shadow duration-300">
          <div className="w-12 h-12 bg-victory-700 rounded-sm flex items-center justify-center mx-auto mb-4 shadow-typewriter">
            <Radio className="w-6 h-6 text-wartime-100" />
          </div>
          <h3 className="font-garamond font-bold text-british-800 mb-3 text-lg tracking-wide">
            WIRELESS TRANSMISSION
          </h3>
          <p className="text-sm font-times text-british-700 leading-relaxed">
            Hear the Prime Minister's responses through our 
            wireless transmission system with authentic British delivery
          </p>
        </div>
        
        <div className="bg-wartime-100 border-3 border-wartime-500 shadow-paper rounded-sm p-6 hover:shadow-vintage transition-shadow duration-300">
          <div className="w-12 h-12 bg-wartime-700 rounded-sm flex items-center justify-center mx-auto mb-4 shadow-typewriter">
            <Crown className="w-6 h-6 text-wartime-100" />
          </div>
          <h3 className="font-garamond font-bold text-british-800 mb-3 text-lg tracking-wide">
            AUTHENTIC PERSONA
          </h3>
          <p className="text-sm font-times text-british-700 leading-relaxed">
            Experience Churchill's distinctive wit, gravitas, 
            and unwavering resolve in every exchange
          </p>
        </div>
      </div>
      
      {/* Suggested topics with vintage styling */}
      <div className="bg-heritage-100 border-4 border-heritage-400 rounded-sm p-6 shadow-paper">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-1 bg-victory-600"></div>
          <h4 className="font-garamond font-bold text-heritage-800 text-lg tracking-wider">
            SUGGESTED DISCOURSE
          </h4>
          <div className="w-8 h-1 bg-victory-600"></div>
        </div>
        <p className="text-sm font-times text-heritage-700 leading-relaxed">
          <span className="font-semibold">Topics for consideration:</span> The Great War, 
          matters of leadership and governance, the British Empire, parliamentary affairs, 
          or request one of the Prime Minister's celebrated orations
        </p>
      </div>
    </div>
  );
}