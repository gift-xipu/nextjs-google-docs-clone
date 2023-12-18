import { auth } from '@clerk/nextjs';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request, response: Response) {
//   const { searchParams } = new URL(request.url);
//   const petName = searchParams.get('petName');
//   const ownerName = searchParams.get('ownerName');
    const {newDocumentName} = await request.json();
    const {userId} = await auth()
  try {
    if (!newDocumentName || !userId) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Docs (FileName, Owner) VALUES (${newDocumentName}, ${userId});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const Docs = await sql`SELECT * FROM Docs;`;
  return NextResponse.json({ Docs }, { status: 200 });
}