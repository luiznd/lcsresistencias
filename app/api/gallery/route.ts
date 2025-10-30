import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryDirectory = path.join(process.cwd(), 'public/images/galeria');
    const filenames = fs.readdirSync(galleryDirectory);
    const images = filenames.map(name => `/images/galeria/${name}`);
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read gallery images' }, { status: 500 });
  }
}