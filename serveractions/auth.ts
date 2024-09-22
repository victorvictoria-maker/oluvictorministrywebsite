"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  console.log(data);

  try {
    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
      console.error("Supabase Auth Error:", error.message);
      redirect("/error");
    }

    revalidatePath("/", "layout");
  } catch (error) {
    console.error("Unexpected Login Error:", error);
  } finally {
    redirect("/admin");
  }
}

// export async function signup(formData: FormData) {
//   const supabase = createClient();

// type-casting here for convenience
// in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     redirect("/error");
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }

export const logout = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};
