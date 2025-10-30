import { MongoClient } from 'mongodb';
import { Quote } from '../../core/domain/quote';
import { QuoteRepository } from '../../core/ports/quote-repository';

async function getQuotesCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('A variável de ambiente MONGODB_URI não está definida.');
  }
  const client = new MongoClient(uri);
  await client.connect();
  return client.db('lcs').collection<Quote>('quotes');
}

export const quoteMongoRepo = (): QuoteRepository => ({
  async save(quote: Quote) {
    const collection = await getQuotesCollection();
    await collection.insertOne(quote);
  },
});