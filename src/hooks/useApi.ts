const wrappedFetch = async (
  url: string,
  type: string,
  body: Body | null = null,
  token: string | null = null
) => {
  const headers = {
    "Content-Type": "application/json",
    ...(token !== null ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const response = await fetch(url, {
      method: type,
      body: JSON.stringify(body) || null,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default wrappedFetch;
