import { Quote } from '../../domain/quote';
import { QuoteRepository } from '../../ports/quote-repository';

export function createQuote(repo: QuoteRepository) {
  return async (data: Omit<Quote, 'id' | 'createdAt'>) => {
    const quote: Quote = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    await repo.save(quote);
    return quote;
  };
}