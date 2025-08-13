import api from "./api";

export async function login({ email, password }) {
  const { data } = await api.post("/login", { email, password });
  return data;
}
