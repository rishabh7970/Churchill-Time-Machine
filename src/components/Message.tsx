import React, { useState } from 'react';
import { Message as MessageType } from '../types';
import { VoiceIndicator } from './VoiceIndicator';
import { speechService } from '../services/speech';
import { User, Crown } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleVoiceToggle = async () => {
    if (isSpeaking) {
      speechService.stop();
      setIsSpeaking(false);
    } else {
      try {
        setIsSpeaking(true);
        await speechService.speak(message.text);
        setIsSpeaking(false);
      } catch (error) {
        console.error('Speech error:', error);
        setIsSpeaking(false);
      }
    }
  };

  return (
    <div className={`flex gap-6 mb-8 ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      {!message.isUser && (
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-14 h-14 rounded-sm overflow-hidden shadow-vintage border-3 border-wartime-500 bg-wartime-100 p-1">
              <div className="w-full h-full rounded border-2 border-wartime-700 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/The_Rt_Hon_Sir_Winston_S_Churchill%2C_1954-mod.jpg/256px-The_Rt_Hon_Sir_Winston_S_Churchill%2C_1954-mod.jpg"
                  alt="Winston Churchill"
                  className="w-full h-full object-cover sepia-[0.3] contrast-110"
                />
              </div>
            </div>
            {/* Vintage corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-victory-600"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-victory-600"></div>
          </div>
        </div>
      )}
      
      <div className={`max-w-2xl ${message.isUser ? 'order-1' : ''}`}>
        <div
          className={`p-6 shadow-vintage border-3 ${
            message.isUser
              ? 'bg-british-700 text-wartime-100 ml-auto border-british-600 rounded-sm'
              : 'bg-paper bg-wartime-50 text-british-900 border-wartime-400 rounded-sm'
          }`}
        >
          {!message.isUser && (
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-wartime-300">
              <Crown className="w-4 h-4 text-victory-600" />
              <span className="text-xs font-garamond font-bold text-british-700 tracking-wider uppercase">
                The Prime Minister
              </span>
            </div>
          )}
          <p className={`leading-relaxed whitespace-pre-wrap ${
            message.isUser ? 'font-times text-sm' : 'font-times text-base'
          }`}>
            {message.text}
          </p>
        </div>
        
        {!message.isUser && (
          <div className="flex items-center justify-between mt-3 px-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-victory-600 rounded-full"></div>
              <span className="text-xs font-typewriter text-british-600 tracking-wider">
                TRANSMITTED: {message.timestamp.toLocaleTimeString('en-GB', { 
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            <VoiceIndicator isSpeaking={isSpeaking} onToggle={handleVoiceToggle} />
          </div>
        )}
      </div>

      {message.isUser && (
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-gradient-to-br from-british-600 to-british-800 rounded-sm flex items-center justify-center shadow-vintage border-3 border-british-500">
            <User className="w-7 h-7 text-wartime-100" />
          </div>
        </div>
      )}
    </div>
  );
}