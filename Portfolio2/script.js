const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("span");
const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    themeIcon.textContent = isDark ? "☀" : "☾";
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#171c19" : "#f6f4ee";
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
});
