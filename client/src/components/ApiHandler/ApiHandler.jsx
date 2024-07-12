import axios from "axios";

export async function fetchMangaDetails(title) {
  console.log(title);
  try {
    const mangaInfo = await axios.get("https://api.mangadex.org/manga", {
      params: {
        title: title,
      },
    });

    const manga = mangaInfo.data.data[0]; // Assuming first manga in response
    console.log(manga);
    const mangadescription = manga.attributes.description.en;
    const mangaid = manga.id;

    /*
    const mangaInfocover = await axios.get("https://api.mangadex.org/manga", {
      params: {
        title: title,
        includes: ["cover_art"],
        includeFuturePublishingChapters: true,
      },
    });
    const mangaCover = mangaInfocover.data.data[0]; // Assuming first manga in response
    const coverId = mangaCover.relationships.cover_art.data.id; // Get cover id
    const coverFilename =
      mangaCover.relationships.cover_art.data.attributes.fileName;
*/
    return {
      mangaid: mangaid,
      mangadescription: mangadescription,
      title: manga.attributes.title.en, // Assuming English title
      // coverFilename: coverFilename,
    };
  } catch (error) {
    console.error("Error fetching manga details:", error);
    throw error;
  }
}

export async function fetchMangaChapters(mangaid) {
  try {
    const response = await axios.get(
      `https://api.mangadex.org/manga/${mangaid}/feed`
    );
    const mangaChapters = response.data.data.length;
    console.log(parseInt(mangaChapters));
    const mangaChaptersLength = parseInt(mangaChapters);
    return mangaChaptersLength;
  } catch (error) {
    console.error("Error fetching manga chapters:", error);
    throw error;
  }
}

export async function fetchMangaCoverImage(mangaid, coverFilename) {
  try {
    const response = await axios.get(
      `https://api.mangadex.org/covers/${mangaid}/${coverFilename}`
    );

    // Assuming the response contains the cover image URL
    const coverImageUrl = response.data.data.attributes.fileName;

    return coverImageUrl;
  } catch (error) {
    console.error("Error fetching manga cover image:", error);
    throw error;
  }
}
