import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/connection";
import Movie from "@/models/Movie";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    await connectDb();
    const res = await Movie.findById(id);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
