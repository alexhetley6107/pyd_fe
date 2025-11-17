export const toggleTheme = () => {
  const theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const isDarkTheme = () => {
  return localStorage.getItem("theme") === "dark";
};
