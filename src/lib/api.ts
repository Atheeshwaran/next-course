export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const httpMethod: Record<HttpMethod, HttpMethod> = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const wrappedFetch = async (url: string, type: string) => {
  try {
    const response = await fetch(url, {
      method: type,
    });
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default wrappedFetch;
