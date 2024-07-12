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
      image:
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421528427/naruto-vol-41-9781421528427_hr.jpg",
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
      image:
        "https://th.bing.com/th/id/OIP.Pz73Vwt3aHD6d6HSX92DRAHaLc?rs=1&pid=ImgDetMain",
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
      image:
        "https://th.bing.com/th/id/R.8fd0ca4e565644b24a172790d486a80c?rik=7vF%2btWzUvq8UGg&pid=ImgRaw&r=0",
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
