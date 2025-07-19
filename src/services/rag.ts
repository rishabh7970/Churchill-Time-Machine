import { HistoricalDocument } from '../types';
import { churchillKnowledge } from '../data/churchill-knowledge';
import { createEmbedding, cosineSimilarity } from './embedding';

class RAGService {
  private documents: HistoricalDocument[] = [];

  constructor() {
    this.initializeDocuments();
  }

  private initializeDocuments() {
    this.documents = churchillKnowledge.map(doc => ({
      ...doc,
      embedding: createEmbedding(doc.content)
    }));
  }

  public searchRelevantDocuments(query: string, topK: number = 3): HistoricalDocument[] {
    const queryEmbedding = createEmbedding(query);
    
    const similarities = this.documents.map(doc => ({
      document: doc,
      similarity: cosineSimilarity(queryEmbedding, doc.embedding || [])
    }));

    return similarities
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK)
      .map(item => item.document);
  }

  public getRandomQuote(): HistoricalDocument | null {
    const quotes = this.documents.filter(doc => doc.type === 'quote');
    return quotes.length > 0 ? quotes[Math.floor(Math.random() * quotes.length)] : null;
  }
}

export const ragService = new RAGService();