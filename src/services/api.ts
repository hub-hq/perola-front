import axios from "axios";

const TOKEN_KEY = "token";

export const api = axios.create({
  baseURL: "https://api.seusite.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Injeta o token Bearer em todas as requisições autenticadas
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Se a API retornar 401, limpa a sessão local
api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 401
    ) {
      localStorage.removeItem(TOKEN_KEY);
      window.location.href = "/ativista/login";
    }
    return Promise.reject(error);
  },
);
