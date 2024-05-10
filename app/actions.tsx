"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/utils/supabase/server";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = loginSchema.safeParse(data);

  if (!validationResult.success) {
    throw new Error("Invalid input data");
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/");
  }

  revalidatePath("/", "layout");
  redirect("/home");
}

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = signupSchema.safeParse(data);

  if (!validationResult.success) {
    throw new Error("Invalid input data");
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/");
  }

  revalidatePath("/", "layout");
  redirect("/home");
}
