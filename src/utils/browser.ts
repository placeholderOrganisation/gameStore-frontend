export const isMobile = () => {
  return window.screen.width <= 900;
};

export const isDesktop = () => {
  return window.screen.width > 900;
};

export const scrollToTop = () => {
  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const setSessionStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string) => {
  const data = sessionStorage.getItem(key);
  if (!data) return null;
  return JSON.parse(data);
};

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
