"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function resendConfirmation(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;

  const { error } = await supabase.auth.resend({
    type: 'signup',
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  }

  redirect("/login?message=Confirmation email sent, please check your inbox");
}
