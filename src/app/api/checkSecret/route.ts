import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const reqParams = await request.json();
  const { secretStr } = reqParams;
  try {
    if (process.env.NEXT_PUBLIC_SECRET_HASH) {
      const match = await bcrypt.compare(
        secretStr,
        process.env.NEXT_PUBLIC_SECRET_HASH
      );
      return Response.json({ match });
    }
    throw new Error("Secret Hash not defined");
  } catch (error) {}
}
