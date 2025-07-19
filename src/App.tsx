import React, { useState, useRef, useEffect } from 'react';
import { Message as MessageType } from './types';
import { Header } from './components/Header';
import { Message } from './components/Message';
import { ChatInput } from './components/ChatInput';
import { WelcomeMessage } from './components/WelcomeMessage';
import { churchillPersona } from './services/churchill-persona';

function App() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (text: string) => {
    const userMessage: MessageType = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await churchillPersona.generateResponse(text);
      
      const churchillMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, churchillMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      const errorMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        text: "I beg your pardon, but there appears to be some interference in our wireless communication. Perhaps you could repeat your transmission?",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowQuote = async () => {
    const quote = churchillPersona.getRandomQuote();
    
    const quoteMessage: MessageType = {
      id: Date.now().toString(),
      text: `*Adjusts wireless transmission*\n\nAllow me to share a thought with you: "${quote}"\n\n*Static crackles over the airwaves*`,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, quoteMessage]);
  };

  return (
    <div className="min-h-screen bg-vintage-lines bg-heritage-50 flex flex-col">
      <Header onShowQuote={handleShowQuote} />
      
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            {messages.length === 0 ? (
              <WelcomeMessage />
            ) : (
              <>
                {messages.map(message => (
                  <Message key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-8">
                    <div className="flex items-center gap-6">
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
                        <div className="absolute inset-0 bg-british-900 bg-opacity-30 flex items-center justify-center rounded-sm">
                          <div className="w-6 h-6 border-3 border-victory-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        {/* Vintage corner accents */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-victory-600"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-victory-600"></div>
                      </div>
                      <div className="bg-paper bg-wartime-50 border-3 border-wartime-400 rounded-sm p-6 shadow-vintage">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-victory-600 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-victory-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-victory-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <p className="text-british-700 font-times italic">
                            The Prime Minister is considering your inquiry...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;