"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import ItemsGrid from "@/lib/itemsGrid.jsx";

export default async function allItems() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //get item from session Storage
  return <ItemsGrid user={user} />;
}
