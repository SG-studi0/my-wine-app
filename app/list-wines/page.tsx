import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';

export default async function GET(request: Request) {
  try {
    const wines = await sql`SELECT * from wine;`;
    console.log(JSON.stringify(wines ,null,2));
    //return NextResponse.json(wines, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ error }, { status: 500 });
}
}