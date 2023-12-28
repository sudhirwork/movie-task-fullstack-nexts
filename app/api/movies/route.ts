import Movie from "@/models/Movie";
import { NextRequest, NextResponse } from "next/server";
import { connectDb, disconnectDb } from "@/lib/connection";
import * as Yup from "yup";
import { put } from "@vercel/blob";

const schema = Yup.object({
  title: Yup.string().required(),
  publishingYear: Yup.number().required(),
  poster: Yup.string().required(),
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const PAGE_SIZE = 8;

  try {
    let page: string | number | null = req.nextUrl.searchParams.get("page");

    let skip = 0;
    let limit = PAGE_SIZE;

    if (page) {
      page = parseInt(page);
      skip = (page - 1) * PAGE_SIZE;
      limit = PAGE_SIZE;
    }

    await connectDb();
    const res = await Movie.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const items = await Movie.countDocuments();

    return NextResponse.json({
      data: res,
      totalPages: Math.ceil(items / PAGE_SIZE),
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    disconnectDb();
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const publishingYear = formData.get("publishingYear");
    const file: File | null = formData.get("file") as unknown as File;

    if (!file) throw new Error("File is required");

    // upload file
    const { url } = await put(`poster/${file.name}`, file, {
      access: "public",
    });

    // validate payload
    const payload = { title, publishingYear, poster: url };
    await schema.validate(payload);

    await connectDb();
    const res = await Movie.create(payload);

    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    disconnectDb();
  }
}

export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const id = formData.get("id");
    const title = formData.get("title");
    const publishingYear = formData.get("publishingYear");

    const file: File | null = formData.get("file") as unknown as File;

    let url;

    if (file !== null) {
      const { url: newUrl } = await put(`poster/${file.name}`, file, {
        access: "public",
      });
      url = newUrl;
    }

    const update: any = { title, publishingYear };
    if (url || url !== "undefined") update.poster = url;

    await connectDb();
    const res = await Movie.findByIdAndUpdate(id, update);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
