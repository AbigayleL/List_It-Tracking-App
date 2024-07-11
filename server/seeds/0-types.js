/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  return knex("types")
    .del()
    .then(function () {
      return knex("types").insert([
        { id: 1, type_name: "Manga" },
        { id: 2, type_name: "TV Shows (American)" },
        { id: 3, type_name: "Asian TV Shows" },
        { id: 4, type_name: "Movies (American)" },
        { id: 5, type_name: "Asian Movies" },
        { id: 6, type_name: "Anime" },
        { id: 7, type_name: "Books" },
        { id: 8, type_name: "Custom" },
      ]);
    });
}
