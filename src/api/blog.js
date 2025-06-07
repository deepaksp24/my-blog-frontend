const dummyBlogs = [
  {
    id: 1,
    title: "First Blog",
    tags: "This is a summary.",
    content: "Full content of the first blog.",
  },
  {
    id: 2,
    title: "Second Blog",
    tags: "Another summary.",
    content: "Full content of the second blog.",
  },
];

export const getBlogs = async () => dummyBlogs;
export const getBlogById = async (id) =>
  dummyBlogs.find((blog) => blog.id === Number(id));
export const createBlog = async (blog) =>
  dummyBlogs.push({ id: dummyBlogs.length + 1, ...blog });
