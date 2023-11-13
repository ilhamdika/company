import NavigationBar from "./NavigationBar"
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Footer from "./Footer";
import PrimaryButton from "@/Components/PrimaryButton";


export default function LayoutPage ({children, click}){
    
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

    
    return(
        <>
        <div className="dark:bg-dark">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <NavigationBar
                
                
                />

                {/* Konten */}
                <div>
                    <main className="">
                        {children}
                    </main>
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-slate-500">
                <Footer/>
            </div>
            <button onClick={toggleTheme}
                className="text-white bg-slate-600 h-10 w-10 dark:bg-white dark:text-black fixed bottom-5 right-5 rounded-full"
                >
                {dark ? <FiMoon size="32"/> : <FiSun size="32"/> }
            </button>
        </div>
        </>
    )
}