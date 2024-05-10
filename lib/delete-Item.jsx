"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteItem } from "../items";

export default async function deleteIt(itemId) {
  await deleteItem(itemId);
  revalidatePath("/home");
}
