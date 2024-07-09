/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("list").del();
  await knex("list").insert([
    {
      id: 1,
      list_name: "Manga - Currently Reading",
      type: "Manga",
      image: "../images/manga-image.jpg",
    },
    {
      id: 2,
      list_name: "Wattpad Read",
      type: "Custom",
      image: "",
    },
  ]);
}
