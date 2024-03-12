import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`, {cache: "no-cache"}
  );
  const data = await response.json();
  return NextResponse.json({data}, {status: 200});
}
