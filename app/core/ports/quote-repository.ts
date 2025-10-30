import { Quote } from '../domain/quote';

export interface QuoteRepository {
  save(quote: Quote): Promise<void>;
}