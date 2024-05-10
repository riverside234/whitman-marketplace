const sql = require("better-sqlite3");
const db = sql("items.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS items (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       user_id TEXT NOT NULL,
       item TEXT NOT NULL,
       price TEXT NOT NULL,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       description TEXT NOT NULL,
       image TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO items VALUES (
         null,
         @user_id,
         @item,
         @price,
         @name,
         @email,
         @description,
         @image
      )
   `);
}

initData();
