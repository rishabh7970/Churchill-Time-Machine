import React, { useState, useRef } from 'react';
import { Send, Mic, MicOff, Radio } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const toggleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice recognition apparatus not available in your wireless receiver.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-GB';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    }
  };

  return (
    <div className="bg-wartime-100 border-t-4 border-wartime-500 shadow-vintage">
      <form onSubmit={handleSubmit} className="flex gap-4 p-6 max-w-6xl mx-auto">
        <div className="flex-1 relative">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Address the Prime Minister..."
              className="w-full px-6 py-4 pr-16 border-3 border-wartime-500 rounded-sm focus:ring-2 focus:ring-victory-500 focus:border-victory-600 text-british-900 placeholder-british-600 font-times text-base bg-wartime-50 shadow-paper transition-all duration-200"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={toggleVoiceInput}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-sm transition-all duration-200 ${
                isListening
                  ? 'text-victory-700 bg-victory-100 border-2 border-victory-500 shadow-typewriter'
                  : 'text-british-500 hover:text-british-700 hover:bg-wartime-200 border-2 border-transparent'
              }`}
              title={isListening ? 'Cease wireless transmission' : 'Wireless voice transmission'}
            >
              {isListening ? <Radio className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5" />}
            </button>
          </div>
          
          {isListening && (
            <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-victory-100 border-2 border-victory-400 rounded-sm shadow-vintage">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-victory-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-typewriter text-victory-800 tracking-wide">
                  RECEIVING TRANSMISSION...
                </span>
              </div>
            </div>
          )}
        </div>
        
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="px-8 py-4 bg-british-700 hover:bg-british-600 disabled:bg-british-400 text-wartime-100 border-3 border-british-600 hover:border-british-500 disabled:border-british-300 rounded-sm shadow-typewriter hover:shadow-vintage disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-3 font-times font-semibold tracking-wide"
        >
          <Send className="w-5 h-5" />
          <span className="hidden sm:inline">
            {isLoading ? 'TRANSMITTING...' : 'DISPATCH'}
          </span>
        </button>
      </form>
    </div>
  );
}