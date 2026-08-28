import {
  createContext,
  useContext,
  useState,
} from "react";
const ThemeContext = createContext();
function ThemeContent() {
  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ? "dark" : ""
      }
    >
      <h2> Theme System</h2>
      <p>
        Current Theme: {theme}
      </p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
export default function Challenge16() {
  const [theme, setTheme] =
    useState("light");

  function toggleTheme() {
    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    );
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeContent />
    </ThemeContext.Provider>
  );
}