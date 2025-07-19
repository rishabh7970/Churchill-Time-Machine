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
      {/* Logo for Assistant */}
      {!message.isUser && (
        <div className="flex-shrink-0">
          <div className="flex flex-col justify-center bg-wartime-700 border border-wartime-500 px-4 py-3 rounded shadow-typewriter w-48">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-victory-400" />
              <span className="font-garamond text-lg font-bold text-wartime-100 tracking-wide">
                THE CHURCHILL
              </span>
            </div>
            <div className="-mt-1">
              <span className="text-sm font-garamond font-semibold text-victory-300 tracking-wide">
                TIME MACHINE
              </span>
            </div>
            <span className="text-[10px] mt-1 text-wartime-300 font-times tracking-wider">
              WARTIME CORRESPONDENCE • EST. 1940
            </span>
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

      {/* User Avatar */}
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
