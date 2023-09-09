import axios from "axios";

const getMethod = async (url, params, headers = {}) => {
  try {
    const response = await axios.get(url, {
      params,
      headers: { ...headers }, // Use a spread operator to include existing headers
    });
    return response.data;
  } catch (error) {
    // Handle errors here, e.g., by logging or throwing a custom error
    throw new Error("Error in GET request: " + error.message);
  }
};

export { getMethod };
