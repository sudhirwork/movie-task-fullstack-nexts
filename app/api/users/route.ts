import { NextRequest, NextResponse } from "next/server";
import { connectDb, disconnectDb } from "@/lib/connection";
import * as Yup from "yup";
import User from "@/models/Users";

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await schema.validate(data);

    await connectDb();
    const user = await User.findOne(
      {
        email: data.email,
        password: data.password,
      },
      { password: 0 }
    );
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  {
    disconnectDb();
  }
}
