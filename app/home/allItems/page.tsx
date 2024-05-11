"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { getItems } from "../../../items.js";
import ItemsGrid from "@/lib/itemsGrid.jsx";

export default async function allItems() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  const items = await getItems();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <ItemsGrid items={items} user={user} />;
}
