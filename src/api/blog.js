const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getHomeBlogs = async () => {
  const response = await fetch(`${BASE_URL}blog/home`);
  if (!response.ok) throw new Error("Failed to fetch blogs");

  const result = await response.json();

  return result?.body?.data || [];
};

export const getBlog = async (id) => {
  const response = await fetch(`${BASE_URL}blog/?id=${id}`);
  if (!response.ok) throw new Error("Failed to fetch blogs");

  const result = await response.json();
  return result?.body;
};
