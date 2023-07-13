import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {name:string, email:string, password:string};

    const hashPassword = await hash(password, 12);
    console.log(name,email,hashPassword);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashPassword,
      },
    });

    return NextResponse.json({
      status: "ok",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        error: err.message,
      }),
      { status: 500 }
    );
  }
}
