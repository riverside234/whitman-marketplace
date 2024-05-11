"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import SaveGrid from "./saveGrid";

export default async function allItems() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return <SaveGrid />;
}
