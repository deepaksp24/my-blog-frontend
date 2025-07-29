const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getHomeBlogs = async () => {
  const response = await fetch(`${BASE_URL}blog/home`);
  if (!response.ok) throw new Error("Failed to fetch blogs");

  const result = await response.json();

  return result || [];
};

export const getBlog = async (id) => {
  const response = await fetch(`${BASE_URL}blog/?id=${id}`);
  if (!response.ok) throw new Error("Failed to fetch blogs");

  const result = await response.json();
  return result;
};

export const postBlog = async (payload) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}blog/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return response.json();
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

export async function verifyUser(token) {
  try {
    const res = await fetch(`${BASE_URL}auth/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    });

    const data = await res.json();

    if (data.body?.status) {
      return {
        username: data.body.user_name,
        email: data.body.display_name,
      };
    }

    return null;
  } catch (err) {
    console.error("Verification failed:", err);
    return null;
  }
}
