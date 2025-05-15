const API_URL = import.meta.env.VITE_BACKEND_URL;

export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/_health`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
}; 