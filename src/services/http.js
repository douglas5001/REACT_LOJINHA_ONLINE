export function apiUrl(path) {
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") || "";
  const clean = path.replace(/^\/+/, "");
  return `${base}/${clean}`;
}

export async function postJson(path, body) {
  const res = await fetch(apiUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || "falha na requisição";
    const error = new Error(message);
    error.status = res.status;
    error.data = data;
    throw error;
  }
  return data;
}
