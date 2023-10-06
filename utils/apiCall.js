import axios from "axios";


export const revalidate = 3600
export const getMethod = async (url, params, headers = {}) => {
  // Convert the params object to a URLSearchParams object
  const queryParams = new URLSearchParams(params);

  try {
    const response = await fetch(`${url}?${queryParams.toString()}`, {
      method: 'GET',
      headers: { ...headers },
      // cache: 'no-store', // Place the cache option here
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error("Error in GET request: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here, e.g., by logging or throwing a custom error
    throw new Error("Error in GET request: " + error.message);
  }
};



