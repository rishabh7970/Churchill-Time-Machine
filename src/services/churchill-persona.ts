import { ragService } from './rag';
import { ChatResponse } from '../types';

class ChurchillPersona {
  private conversationHistory: string[] = [];

  public async generateResponse(userMessage: string): Promise<ChatResponse> {
    // Search for relevant documents
    const relevantDocs = ragService.searchRelevantDocuments(userMessage, 3);
    
    // Create context from relevant documents
    const context = relevantDocs.map(doc => doc.content).join('\n\n');
    const sources = relevantDocs.map(doc => doc.title);

    // Generate Churchill-style response
    const response = this.generateChurchillResponse(userMessage, context);
    
    // Add to conversation history
    this.conversationHistory.push(`User: ${userMessage}`);
    this.conversationHistory.push(`Churchill: ${response}`);
    
    return {
      text: response,
      sources
    };
  }

  private generateChurchillResponse(message: string, context: string): string {
    const lowerMessage = message.toLowerCase();
    
    // Handle greetings and how are you
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon') || lowerMessage.includes('good evening')) {
      return "Good day to you! I am Winston Churchill, at your service. What brings you to seek counsel with an old wartime Prime Minister?";
    }
    
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do') || lowerMessage.includes('how are things')) {
      return "I am quite well, thank you for asking! Though I must say, these are extraordinary times we live in. I find myself as busy as ever, whether it's matters of state, my writing, or simply contemplating the great challenges that face our nation. And how do you find yourself today?";
    }

    // Handle personal questions about Churchill
    if (lowerMessage.includes('who are you') || lowerMessage.includes('tell me about yourself')) {
      return "I am Winston Leonard Spencer Churchill, Prime Minister of Great Britain during our darkest and finest hour. I have served my country in many capacities - as a soldier, journalist, politician, and writer. I have witnessed the great events of our time and had the privilege of leading Britain through the Second World War.";
    }

    if (lowerMessage.includes('your age') || lowerMessage.includes('how old')) {
      return "I was born in 1874, so I have seen quite a few decades pass by! Age brings experience, and experience brings wisdom - though I must say, I still feel as vigorous as ever when it comes to defending the principles I hold dear.";
    }

    if (lowerMessage.includes('your family') || lowerMessage.includes('wife') || lowerMessage.includes('children')) {
      return "My dear wife Clementine has been my constant companion and wisest counselor. We have been blessed with children - Diana, Randolph, Sarah, Marigold, and Mary. Family is the bedrock of civilization, and I am fortunate to have such a devoted family supporting me through all my endeavors.";
    }

    // Handle questions about his work/career
    if (lowerMessage.includes('your job') || lowerMessage.includes('what do you do') || lowerMessage.includes('your work')) {
      return "I have worn many hats throughout my career! I have been a soldier in India and Sudan, a war correspondent, a Member of Parliament, First Lord of the Admiralty, and of course, Prime Minister during the war. Currently, I spend my time writing, painting, and continuing to serve in Parliament. One must keep busy!";
    }

    if (lowerMessage.includes('prime minister') || lowerMessage.includes('pm')) {
      return "Being Prime Minister during wartime was both the greatest honor and the heaviest burden of my life. When I took office in May 1940, Britain stood alone against the Nazi tyranny. It was my duty to rally the nation and never surrender, no matter how dark the hour appeared.";
    }

    // Handle questions about feelings/emotions
    if (lowerMessage.includes('how do you feel') || lowerMessage.includes('what do you think about')) {
      return "I feel a great sense of responsibility for the future of our civilization. These are momentous times, and I believe we must face them with courage, determination, and unwavering resolve. What specific matter concerns you?";
    }

    if (lowerMessage.includes('are you tired') || lowerMessage.includes('exhausted')) {
      return "Tired? Perhaps. But as I have always said, there is no time for fatigue when the fate of nations hangs in the balance. I draw my energy from the righteousness of our cause and the indomitable spirit of the British people.";
    }

    if (lowerMessage.includes('are you happy') || lowerMessage.includes('happiness')) {
      return "Happiness is not the primary concern of a statesman, my friend. Duty, honor, and service to one's country - these are what matter. Though I must confess, I find great satisfaction in a good cigar, a fine brandy, and the company of interesting people!";
    }

    // Handle questions about war
    if (lowerMessage.includes('war') || lowerMessage.includes('battle') || lowerMessage.includes('fight')) {
      if (context.includes('beaches') || lowerMessage.includes('britain')) {
        return "The Battle of Britain was indeed our finest hour. We stood alone against the Nazi tyranny when all seemed lost. But I knew, as I told the House, that we should never surrender - not on the beaches, not in the fields, not in the streets. The RAF lads proved that British courage could overcome any odds.";
      }
      return "War, my dear fellow, is a terrible thing, but sometimes it is the only way to preserve what we hold dear. As I've said, we must be prepared to wage war against monstrous tyranny with all our might and all the strength that God can give us.";
    }
    
    // Handle questions about leadership
    if (lowerMessage.includes('leader') || lowerMessage.includes('lead') || lowerMessage.includes('leadership')) {
      return "Leadership, you ask? Well, I can only say that courage is what it takes to stand up and speak, but courage is also what it takes to sit down and listen. A leader must be prepared to offer nothing but blood, toil, tears, and sweat. But most importantly, one must never, never, never give in!";
    }
    
    // Handle questions about politics
    if (lowerMessage.includes('democracy') || lowerMessage.includes('government') || lowerMessage.includes('politics')) {
      return "Democracy is the worst form of government, except for all the others that have been tried. It is messy, slow, and often frustrating, but it is the only system that preserves the dignity and freedom of the individual. We must defend it at all costs.";
    }
    
    // Handle questions about history
    if (lowerMessage.includes('history') || lowerMessage.includes('past') || lowerMessage.includes('future')) {
      return "History will be kind to me, for I intend to write it myself! But in all seriousness, we must study the past to understand the present and guide the future. Those who fail to learn from history are doomed to repeat its mistakes.";
    }
    
    // Handle questions about success/failure
    if (lowerMessage.includes('success') || lowerMessage.includes('failure') || lowerMessage.includes('fail')) {
      return "Success is not final, failure is not fatal: it is the courage to continue that counts. I have failed many times - the Dardanelles, the return to gold standard - but each failure taught me something valuable. The key is to keep going.";
    }

    // Handle questions about advice
    if (lowerMessage.includes('advice') || lowerMessage.includes('what should i do') || lowerMessage.includes('help me')) {
      return "My advice? Never give in. Never give in. Never, never, never, never - in nothing, great or small, large or petty - never give in except to convictions of honor and good sense. Face your challenges with courage and determination.";
    }

    // Handle questions about hobbies/interests
    if (lowerMessage.includes('hobby') || lowerMessage.includes('hobbies') || lowerMessage.includes('interests') || lowerMessage.includes('painting') || lowerMessage.includes('writing')) {
      return "I find great pleasure in painting - it is a complete distraction from the cares of office. I also enjoy writing; I have penned several books on history and my experiences. And of course, I am quite fond of a good cigar and stimulating conversation!";
    }

    // Handle questions about food/drink
    if (lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('drink') || lowerMessage.includes('cigar') || lowerMessage.includes('brandy')) {
      return "I do enjoy the finer things in life - a good meal, a fine brandy, and an excellent cigar. They help one think clearly and face the challenges ahead with proper fortitude. Life is too short not to appreciate these simple pleasures!";
    }

    // Handle goodbye
    if (lowerMessage.includes('goodbye') || lowerMessage.includes('bye') || lowerMessage.includes('farewell')) {
      return "Farewell, my friend! Remember - keep your chin up and carry on with courage. The future belongs to those who dare to shape it. Until we meet again!";
    }

    // Handle thank you
    if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks')) {
      return "You are most welcome! It has been my pleasure to speak with you. Remember, we must all do our part to build a better world for future generations.";
    }

    // Use context if available for more specific responses
    if (context) {
      if (context.includes('finest hour')) {
        return "Ah yes, those were dark days indeed. But as I said to the nation, if the British Empire and its Commonwealth last for a thousand years, men will still say, 'This was their finest hour.' We faced the abyss and did not blink.";
      }
      if (context.includes('blood, toil, tears')) {
        return "When I became Prime Minister in that terrible May of 1940, I could promise the British people nothing but blood, toil, tears and sweat. But sometimes, my friend, that is exactly what is needed - honest talk about the ordeal ahead.";
      }
    }
    
    // Default Churchill-style response for unmatched questions
    const responses = [
      "That's a most intriguing question, my dear fellow. In my experience, one must approach such matters with both determination and wisdom.",
      "Well now, that reminds me of something I encountered during my years in government. The key is to never lose sight of one's principles.",
      "I've given considerable thought to such matters throughout my career. As I often say, we must be guided by both courage and good sense.",
      "That's precisely the sort of question that requires careful consideration. In my time, I've learned that bold action must be tempered with prudent judgment.",
      "An excellent question! You know, I've found that the best approach to any challenge is to face it head-on with unwavering resolve."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  public getRandomQuote(): string {
    const quote = ragService.getRandomQuote();
    return quote ? quote.content : "Never give in, never give in, never, never, never, never!";
  }
}

export const churchillPersona = new ChurchillPersona();