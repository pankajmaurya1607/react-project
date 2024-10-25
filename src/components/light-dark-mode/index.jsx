import useLocalStorage from "./useLocalStorage";
import './style.css'
import { useState } from "react";

export default function LightDarkMode() {

//   const [theme, setTheme] = useLocalStorage("theme", "light")
  const [theme, setTheme] = useState("light")

  function handleToggleTheme() {
      setTheme(theme === "light" ? "dark" : "light")
  }

  return (
      <div className="light-dark-mode" data-theme={theme}>
          <div className="container">
              <p>Hello World</p>
              <button onClick={handleToggleTheme}>Change Theme</button>
          </div>
      </div>
  );
}