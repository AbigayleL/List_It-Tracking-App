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
        { id: 2, type_name: "TV Shows" },
        { id: 4, type_name: "Movies" },
        { id: 6, type_name: "Anime" },
        { id: 7, type_name: "Books" },
        { id: 8, type_name: "Custom" },
      ]);
    });
}
