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
      type_id: 1,
      image:
        "https://th.bing.com/th/id/OIP.tAtXyoL2-mPDT4nVK8kwpgHaEU?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      list_name: "Wattpad Read",
      type_id: 8,
      image:
        "https://th.bing.com/th/id/R.f08ed6faf189d44f6dae890db47ed418?rik=%2bLM0a4rcDl7mhA&pid=ImgRaw&r=0",
    },
  ]);
}
