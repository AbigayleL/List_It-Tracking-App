/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("manga").del();
  await knex("manga").insert([
    {
      main_list_id: 1,
      title: "Naruto",
      image: "../images/naruto.jpg",
      description:
        "A story about a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the village leader.",
      completed: false,
      chapters: 700,
      chapter_read: 450,
      progress: "Ongoing",
      link: "https://www.mangaread.org/manga/naruto/",
      last_updated: knex.fn.now(),
      last_read: knex.fn.now(),
    },
    {
      main_list_id: 1,
      title: "One Piece",
      image: "../images/onepiece.jpg",
      description:
        "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
      completed: false,
      chapters: 1120,
      chapter_read: 1000,
      progress: "Ongoing",
      link: "https://ww10.readonepiece.com/manga/one-piece?ref=w3use/",
      last_updated: knex.fn.now(),
      last_read: knex.fn.now(),
    },
    {
      main_list_id: 1,
      title: "Attack on Titan",
      image: "../images/aot.jpg",
      description:
        "Humanity battles against giant humanoid Titans in a post-apocalyptic world.",
      completed: true,
      chapters: 139,
      chapter_read: 139,
      progress: "Completed",
      link: "https://readaot.com/",
      last_updated: knex.fn.now(),
      last_read: knex.fn.now(),
    },
  ]);
}
