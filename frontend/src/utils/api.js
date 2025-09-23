// /src/util/api.js
//
export const API_BASE = "http://localhost:5000/api";

export const fetchBusinesses = async () => {
  const res = await fetch(`${API_BASE}/businesses`);
  return res.json();
};

export const addBusiness = async (data) => {
  const res = await fetch(`${API_BASE}/businesses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
