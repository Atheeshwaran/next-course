import { db } from "server/db";
import { SignupFormSchema } from "./definition";
import bcrypt from "bcryptjs";

const createUser = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const validationFields = SignupFormSchema.safeParse(formData);

    if (!validationFields.success) {
      return new Response(
        JSON.stringify({
          errors: validationFields.error.flatten().fieldErrors,
        }),
        { status: 400 }
      );
    }

    const { email, password } = validationFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await db(createUser, [email, hashedPassword]);
    const user = data[0];

    if (!user) {
      return new Response(
        JSON.stringify({
          message: "An error occurred while creating your account.",
        }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Server error", error: err }),
      { status: 500 }
    );
  }
}
