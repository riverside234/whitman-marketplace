import { Button } from "@nextui-org/button";
import classes from "./page.module.css";
import ImagePicker from "./image-picker";
import { createClient } from "@/utils/supabase/server";
import { saveItems } from "@/items";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function FormItem() {
  async function submitItem(formData) {
    "use server";

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const item = {
      user_id: user.id,
      item: formData.get("item"),
      price: formData.get("price"),
      name: formData.get("name"),
      email: formData.get("email"),
      description: formData.get("description"),
      image: formData.get("image"),
    };

    await saveItems(item);
    revalidatePath("/home");
    redirect("/home/success");
  }

  return (
    <main className={classes.main}>
      <form className={classes.form} action={submitItem}>
        <div className={classes.row}>
          <p>
            <label htmlFor="item">Your item's name</label>
            <input type="text" id="item" name="item" required />
          </p>
          <p>
            <label htmlFor="price">Price (number)</label>
            <input type="text" id="price" name="price" required />
          </p>
        </div>
        <div className={classes.row}>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">(email/phone)</label>
            <input type="text" id="email" name="email" required />
          </p>
        </div>
        <p>
          <label htmlFor="description">Description of your item</label>
          <textarea id="description" name="description" required></textarea>
        </p>
        <ImagePicker label="Your image" name="image" />
        <p className={classes.actions}>
          <Button type="submit">Submit your item</Button>
        </p>
      </form>
    </main>
  );
}
