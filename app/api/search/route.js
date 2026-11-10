import { NextResponse } from 'next/server';
import { executeSearchQuery } from '../../../lib/search';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  const results = executeSearchQuery(q);
  return NextResponse.json({ query: q, results });
}
