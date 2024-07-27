import SideBar from "./SideBar";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Topbar from "./Topbar";

export default function Authenticated({ auth, children }) {
    const [dark, setDark] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleTheme = () => {
        setDark(!dark);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`flex ${dark ? 'dark' : ''} bg-white dark:bg-dark`} auth={auth}>
            <div className="fixed top-0 left-0 w-20 h-screen bg-white dark:bg-dark">
                <SideBar
                    icon={dark ? <FiMoon /> : <FiSun />}
                    click={toggleTheme}
                    toggleSidebar={toggleSidebar}
                    isOpen={sidebarOpen}
                    auth={auth}
                />
            </div>
            <div className={`h-auto flex-1 p-7 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-16'}`}>
                <div className="mb-3">
                    <Topbar />
                </div>
                <main className="dark:bg-dark">
                    {children}
                </main>
            </div>
        </div>
    );
}
