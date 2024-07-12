/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("custom").del();
  await knex("custom").insert([
    {
      main_list_id: 2,
      title: "After",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      description:
        "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship. Based on the novel by Anna Todd.",
      progress: "Completed",
      notes: "First book in the series, highly popular on Wattpad.",
    },
    {
      main_list_id: 2,
      title: "The Bad Boy's Girl",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      description:
        "Tessa O'Connell is a fat girl who has always had a rough life. Her mother walked out on her and her father when she was only 10 years old.",
      progress: "Ongoing",
      notes: "Started as a Wattpad sensation, later published.",
    },
    {
      main_list_id: 2,
      title: "My Wattpad Love",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      description:
        "Julie has always been the shy type. Her only outlet is her writing, which she shares on Wattpad.",
      progress: "Completed",
      notes: "A classic Wattpad love story.",
    },
    {
      main_list_id: 2,
      title: "The Cellar",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      description:
        "A young woman is kidnapped and locked in a cellar with several other girls, where she must find a way to survive and escape.",
      progress: "Completed",
      notes: "A gripping thriller that gained massive popularity.",
    },
    {
      main_list_id: 2,
      title: "She's With Me",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
      description:
        "New town, new life, new friends. Amelia Collins is determined to change her identity, hide from her past and keep to herself.",
      progress: "Ongoing",
      notes: "A fan-favorite on Wattpad.",
    },
  ]);
}
