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

export const registerUser = async (payload) => {
  const response = await fetch(`${BASE_URL}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Failed to register");

  const result = await response.json();
  return result?.body;
};

export const loginUser = async (payload) => {
  const response = await fetch(`${BASE_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Failed to login");

  const result = await response.json();
  return result?.body;
};
