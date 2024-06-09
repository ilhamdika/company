import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { AiFillAlert, AiOutlineFileText } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaBeer } from 'react-icons/fa';
import { HiOutlineViewList } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import PrimaryButton from "@/Components/PrimaryButton";
import { AiOutlineClear } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { set } from "lodash";

export default function SideBar({ click, icon, toggleSidebar, isOpen, auth }) {
    const [activeMenu, setActiveMenu] = useState('admin.dashboard.landing.index');

    const handleClick = (menuLink) => {
      setActiveMenu(menuLink);
      localStorage.setItem('activeMenu', menuLink);
    };

    useEffect(() => {
      const storedActiveMenu = localStorage.getItem('activeMenu');
      if (storedActiveMenu) {
          setActiveMenu(storedActiveMenu);
      }
    }, []); 

    
    const Menus = [
        {
            name: "Landing",
            link: 'admin.dashboard.landing.index',
            src: <MdDashboard size="32" color="black" className="dark:bg-slate-200 rounded-xl" />,
        },
        {
            name: "Portfolio",
            link: 'admin.dashboard.portfolio.index',
            src: <AiOutlineFileText size="32" color="black" className="dark:bg-slate-200 rounded-xl" />,
        },
        {
            name: "Tentang Kami",
            link: 'admin.dashboard.tentang-kami.index',
            src: <SiAboutdotme size="32" color="black" className="dark:bg-slate-200 rounded-xl" />,
        },
        {
            name: "Services",
            link: 'admin.dashboard.services.index',
            src: <AiOutlineClear size="32" color="black" className="dark:bg-slate-200 rounded-xl" />,
        },
        {
            name: "News",
            link: 'admin.dashboard.news.index',
            src: <AiFillAlert size="32" color="black" className="dark:bg-slate-200 rounded-xl" />
        },
        {
            name: "Artikel",
            link: 'admin.dashboard.artikel.index',
            src: <FaBeer size="32" color="black" className="dark:bg-slate-200 rounded-xl" />
        },
        {
            name: "Contact",
            link: 'admin.dashboard.contact.index',
            src: <IoIosContact size="32" color="black" className="dark:bg-slate-200 rounded-xl" />
        }
    ];

    return (
        <div className={`fixed h-full ${isOpen ? 'w-72' : 'w-20'} bg-emerald-300 dark:bg-slate-500 p-5 pt-8 relative duration-300`}>
            <HiOutlineViewList
                size={30}
                className={`absolute cursor-pointer -right-3 top-9 w-7 dark:bg-slate-200 rounded-xl ${!isOpen && 'rotate-180'}`}
                onClick={toggleSidebar}
            />
            <div className="flex gap-x-4 items-center">
                <img src="/images/logo.png" className="w-10" alt="logo" />
                <h1 className={`text-black origin-left font-medium text-xl duration-200 dark:text-white ${!isOpen && 'scale-0'}`}>
                    Admin
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'} ${Menu.link === activeMenu ? 'bg-blue-500' : ''} ${index === 0 && 'bg-light-white'}`}
                    >
                        <Link href={route(Menu.link)} onClick={() => handleClick(Menu.link)}>
                            {Menu.src}
                        </Link>
                        <Link href={route(Menu.link)} className={`w-10 ${!isOpen && 'hidden'} origin-left duration-200 text-black dark:text-white`} onClick={() => handleClick(Menu.link)}>
                            {Menu.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="absolute bottom-0 mb-5">
                {/* <PrimaryButton onClick={click} className="text-white bg-slate-600 dark:bg-white dark:text-black">
                    {icon}
                </PrimaryButton> */}
                <p className="text-black text-sm">© 2021 MeIlham</p>
            </div>
        </div>
    );
}
