import React from "react";
import { sql } from "@vercel/postgres";

export default async function ListWines({}: {}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from wine`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.Name}
        </div>
      ))}
    </div>
  );
}
