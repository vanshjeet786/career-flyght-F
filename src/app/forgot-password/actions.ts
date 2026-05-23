"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function resetPassword(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/confirm?next=/update-password`,
  });

  if (error) {
    redirect("/error");
  }

  redirect("/login?message=Check your email for the reset link");
}
