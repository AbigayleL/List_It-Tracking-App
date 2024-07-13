import axios from "axios";

export async function fetchMangaDetails(title) {
  console.log(title);
  try {
    const mangaInfo = await axios.get("https://api.mangadex.org/manga", {
      params: {
        title: title,
      },
    });

    const manga = mangaInfo.data.data[0];
    console.log(manga);
    const mangadescription = manga.attributes.description.en;
    const mangaid = manga.id;

    return {
      mangaid: mangaid,
      mangadescription: mangadescription,
      title: manga.attributes.title.en,
    };
  } catch (error) {
    console.error("Error fetching manga details:", error);
    throw error;
  }
}

export async function fetchMangaChapters(mangaid) {
  try {
    let totalChapters = 0;
    let hasMore = true;
    let offset = 0;

    while (hasMore) {
      const response = await axios.get(
        `https://api.mangadex.org/manga/${mangaid}/feed`,
        {
          params: {
            limit: 100,
            offset: offset,
            translatedLanguage: ["en"],
            order: {
              chapter: "asc",
            },
          },
        }
      );
      const mangaChapters = response.data.data.length;
      console.log(parseInt(mangaChapters));
      const mangaChaptersLength = parseInt(mangaChapters);
      totalChapters += mangaChaptersLength;

      hasMore = mangaChaptersLength === 100;
      offset += 100;
    }

    console.log(totalChapters);
    return totalChapters;
  } catch (error) {
    console.error("Error fetching manga chapters:", error);
    throw error;
  }
}

export async function fetchMangaCoverImage(title, mangaid) {
  try {
    const mangaInfo = await axios.get("https://api.mangadex.org/manga", {
      params: {
        title: title,
        includes: ["cover_art"],
      },
    });

    const manga = mangaInfo.data.data[0];

    const coverRelationship = manga.relationships.find(
      (rel) => rel.type === "cover_art"
    );
    const coverId = coverRelationship.id;

    const coverInfo = await axios.get(
      `https://api.mangadex.org/cover/${coverId}`
    );
    const coverFilename = coverInfo.data.data.attributes.fileName;

    const coverImageUrl = `https://uploads.mangadex.org/covers/${mangaid}/${coverFilename}`;

    return coverImageUrl;
  } catch (error) {
    console.error("Error fetching manga cover image:", error);
    throw error;
  }
}
