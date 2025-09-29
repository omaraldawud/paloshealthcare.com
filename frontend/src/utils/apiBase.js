// src/utils/apiBase.js
export function getApiBase() {
  const useLocal = import.meta.env.VITE_USE_LOCAL_API === "true";
  return useLocal
    ? `${import.meta.env.VITE_LOCAL_API_BASE_URL}/api`
    : `${import.meta.env.VITE_API_BASE_URL}/api`;
}
