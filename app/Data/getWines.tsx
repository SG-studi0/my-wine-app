import { sql } from "@vercel/postgres";

export default async function getWines() {
const wines = await sql`SELECT * FROM wine;`;
}