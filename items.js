"use server";
import xss from "xss";
import sql from "better-sqlite3";
import { v4 as uuidv4 } from "uuid";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "us-east-2",
});

const db = sql("items.db");

export async function getItems() {
  return db.prepare("SELECT * FROM items").all();
}

export async function saveItems(item) {
  item.description = xss(item.description);

  const uuid = require("uuid");

  const extension = item.image.name.split(".").pop();
  const fileName = `${uuidv4()}.${extension}`;

  const bufferedImage = await item.image.arrayBuffer();

  s3.putObject({
    Bucket: "y-nextjs-demo-users-image",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: item.image.type,
  });

  item.image = fileName;

  db.prepare(
    `
    INSERT INTO items
      (user_id, item, price, name, email, description, image)
    VALUES (
      @user_id,
      @item,
      @price,
      @name,
      @email,
      @description,
      @image
    )
  `
  ).run(item);
}

export async function deleteItem(itemId) {
  const itemData = db.prepare("SELECT * FROM items WHERE id = ?").get(itemId);

  if (itemData) {
    const deletedItem = db
      .prepare("DELETE FROM items WHERE id = ?")
      .run(itemId);

    if (deletedItem.changes > 0) {
      if (itemData.image) {
        s3.deleteObject({
          Bucket: "y-nextjs-demo-users-image",
          Key: itemData.image,
        });
      }

      return true;
    }
  }

  return false;
}
