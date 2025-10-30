import { NextResponse } from 'next/server';
import { createQuote } from '../../core/application/quote/create-quote';
import { quoteMongoRepo } from '../../infra/db/quote-mongo-repo';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nome, email e mensagem são obrigatórios' }, { status: 400 });
    }

    const quote = await createQuote(quoteMongoRepo())({ name, email, phone, message });

    return NextResponse.json(quote, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar orçamento:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}