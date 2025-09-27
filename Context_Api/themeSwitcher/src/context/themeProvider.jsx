import { useState, useEffect } from "react"
import { ThemeContext } from "./themeContext";


export const ThemeProvider = ({children}) => {

  const [theme,setTheme] = useState( localStorage.getItem('theme') || 'light');
 

  useEffect(() => {
    const root = document.documentElement;

    console.log(root);
    // console.log('Current theme:', theme); // Debug log
    if (theme === 'dark') {
      root.classList.add('dark');
      // console.log('Added dark class to root'); // Debug log
    } else {
      root.classList.remove('dark');
      // console.log('Removed dark class from root'); // Debug log
    }

    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };






  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
