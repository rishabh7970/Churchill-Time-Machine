import React from 'react';
import { Volume2, VolumeX, Radio } from 'lucide-react';

interface VoiceIndicatorProps {
  isSpeaking: boolean;
  onToggle: () => void;
}

export function VoiceIndicator({ isSpeaking, onToggle }: VoiceIndicatorProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-3 rounded-sm border-2 transition-all duration-300 shadow-typewriter hover:shadow-vintage ${
        isSpeaking
          ? 'bg-victory-600 text-wartime-100 border-victory-500 animate-pulse'
          : 'bg-wartime-200 text-british-700 border-wartime-400 hover:bg-wartime-300 hover:border-wartime-500'
      }`}
      title={isSpeaking ? 'Cease wireless transmission' : 'Begin wireless transmission'}
    >
      {isSpeaking ? (
        <Radio className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </button>
  );
}