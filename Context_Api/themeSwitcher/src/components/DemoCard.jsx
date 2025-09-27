import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const DemoCard = () => {

  const { theme} = useContext(ThemeContext);

  return (
    <div className="min-h-screen dark:bg-black flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-600 rounded-2xl shadow-lg overflow-hidden max-w-sm hover:shadow-2xl transition-shadow duration-300">
        {theme==="dark"? <img
          src="https://images.unsplash.com/photo-1656252117277-119a18b19de5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Nature"
          className="w-full h-48 object-cover"
        />  : <img
          src="https://images.unsplash.com/photo-1758621518225-9248e65dbaee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Nature"
          className="w-full h-48 object-cover"
        />}
        
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 dark:text-slate-300">Serene Lake</h2>
          <p className="text-gray-600 mb-4 dark:text-slate-400">
            Experience the calm and beauty of a pristine lake surrounded by
            mountains. Perfect place to relax and enjoy nature.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;