/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("tv_shows").del();
  await knex("tv_shows").insert([
    {
      main_list_id: 3,
      title: "Stranger Things",
      image:
        "https://th.bing.com/th/id/R.183ee7bc8e0f61b6195f9346778c59b4?rik=OFaYr21SL39Mbg&pid=ImgRaw&r=0",
      description:
        "A group of kids uncover supernatural mysteries in their small town.",
      completed: true,
      progress: "Completed",
      episodes_watched: 25,
      location: "Netflix",
    },
    {
      main_list_id: 3,
      title: "The Crown",
      image:
        "https://th.bing.com/th/id/OIP.KgtLoza2wECUxo6NY_a4vQHaLG?rs=1&pid=ImgDetMain",
      description:
        "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      completed: false,
      progress: "Ongoing",
      episodes_watched: 30,
      location: "Netflix",
    },
  ]);
}
