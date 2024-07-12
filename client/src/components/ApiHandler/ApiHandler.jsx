import axios from "axios";

//Testing in edit data

const ApiHandler = async (title) => {
  try {
    const response = await axios.get("https://api.mangadex.org/lists", {
      params: {
        title: title,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default ApiHandler;
