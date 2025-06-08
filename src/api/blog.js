const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getHomeBlogs = async () => {
  const response = await fetch(`${BASE_URL}blog/home`);
  if (!response.ok) throw new Error("Failed to fetch blogs");

  const result = await response.json();

  return result?.body?.data || [];
};

// export const getBlogById = async (id) =>
//   dummyBlogs.find((blog) => blog.id === Number(id));
// export const createBlog = async (blog) =>
//   dummyBlogs.push({ id: dummyBlogs.length + 1, ...blog });
