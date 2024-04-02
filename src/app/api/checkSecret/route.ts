import bcrypt from "bcrypt";

const SECRET_HASH =
  "$2b$10$mDqBuxX8ETeigaVCsteu6..H6VXbBJaKa8l24O1y7EGkFcvVdspCm";

export async function POST(request: Request) {
  const reqParams = await request.json();
  const { secretStr } = reqParams;
  try {
    const match = await bcrypt.compare(secretStr, SECRET_HASH);
    return Response.json({ match });
  } catch (error) {}
}
