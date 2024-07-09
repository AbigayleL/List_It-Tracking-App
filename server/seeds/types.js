/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  return knex("types")
    .del()
    .then(function () {
      return knex("types").insert([
        { type_name: "Manga" },
        { type_name: "TV Shows (American)" },
        { type_name: "Asian TV Shows" },
        { type_name: "Movies (American)" },
        { type_name: "Asian Movies" },
        { type_name: "Anime" },
        { type_name: "Books" },
        { type_name: "Custom" },
      ]);
    });
}
