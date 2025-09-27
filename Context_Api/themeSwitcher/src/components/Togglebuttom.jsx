import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Togglebuttom = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // console.log("Toggle button - current theme:", theme); // Debug log

  return (
    <div className="h-2xl w-full bg-emerald-300 p-2 text-center dark:bg-orange-500">
      <button className="cursor-pointer rounded border-2" onClick={toggleTheme}>
        {theme === "dark" ? (
          <Moon strokeWidth={1} className="" />
        ) : (
          <Sun strokeWidth={1} className="" />
        )}
      </button>
    </div>
  );
};

export default Togglebuttom;
