export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  audioUrl?: string;
}

export interface HistoricalDocument {
  id: string;
  title: string;
  content: string;
  type: 'speech' | 'quote' | 'biography' | 'letter';
  date?: string;
  embedding?: number[];
}

export interface ChatResponse {
  text: string;
  sources: string[];
}