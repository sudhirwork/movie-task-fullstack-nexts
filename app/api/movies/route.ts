import Movie from "@/models/Movie";
import { NextRequest, NextResponse } from "next/server";
import { connectDb, disconnectDb } from "@/lib/connection";
import * as Yup from "yup";

const schema = Yup.object({
  title: Yup.string().required(),
  publishingYear: Yup.number().required(),
  poster: Yup.string().required(),
});

export async function GET(req: NextRequest) {
  try {
    await connectDb();
    const res = await Movie.find();
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    disconnectDb();
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    await schema.validate(payload);

    await connectDb();
    const res = await Movie.create(payload);

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    disconnectDb();
  }
}
