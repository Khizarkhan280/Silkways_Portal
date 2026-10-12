// Single place for backend calls. Token (if login saved one as "token" in localStorage) is attached automatically.
const getToken = () => {
  try { return localStorage.getItem("token"); } catch { return null; }
};

export async function api(path, options = {}) {
  const token = getToken();
  const res = await fetch(`/api${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data.errors && Object.values(data.errors)[0]) || data.message || "SOMETHING WENT WRONG.");
  }
  return data;
}