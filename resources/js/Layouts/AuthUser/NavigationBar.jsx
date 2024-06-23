import { useState, useEffect } from "react";
import { Link } from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";

export default function NavigationBar ({text, click}){
    const [activeMenu, setActiveMenu] = useState('user.index');

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

    let Menu =[
        {
          name:"Home",
          link: "user.index"
        },
        {
          name:"Karir",
          link: "user.karir"
        },
        {
          name:"Portfolio",
          link:"user.portfolio"
        },
        {
          name:"Services",
          link: "user.services"
        },
        {
          name:"Tentang Kami",
          link: "user.tentang-kami"
        },
        
      ];
      let [open,setOpen]=useState(false);

      const [prevScrollPos, setPrevScrollPos] = useState(0);
      const [visible, setVisible] = useState(true);

        useEffect(() => {
            const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, [prevScrollPos]);

        const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isBeritaOrArtikelActive = activeMenu === 'user.berita' || activeMenu === 'user.artikel';

    return (
        <div className={`navbar ${visible ? 'mobile:block mobile:relative' : 'mobile:hidden'}`}>

          <div className='shadow-tablet w-full fixed-absolute top-0 left-0 mobile:fixed mobile:bg-green-500 '>
            <div className='tablet:flex items-center justify-between py-4 tablet:px-10 px-7 mobile:px-3'>
              <div className='text-3xl cursor-pointer flex items-center dark:text-white'>
                <Link href={route('user.index')}>
                    <img src="/images/logo.png" alt="Logo" className="w-20 h-20 mobile:w-12 mobile:h-12"/>
                </Link>
              </div>
              <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-5 top-4 cursor-pointer tablet:hidden py-4 mr-3'>
                {open ? <IoCloseSharp /> : <BsList />}
              </div>
              <ul className={`tablet:flex tablet:items-center tablet:pb-0 pb-12 absolute tablet:static  tablet:z-auto z-[-1] left-0 w-full tablet:w-auto mobile:bg-green-500 mobile:pb-1 tablet:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                  {/* <li>
                        <Link href='/'>Home</Link>
                  </li>
                  <li>
                        <Link href='/'>Portfolio</Link>
                  </li>
                  <li>
                        <Link href='/'>About Me</Link>
                  </li> */}
                  {
                    Menu.map((menu)=>(
                      <li key={menu.name} className='text-xl tablet:my-0 my-7' onClick={() => handleClick(menu.link)}>
                        <Link href={route(menu.link)} className={`dark:text-white text-black hover:text-cyan-400 duration-500 ml-2 mr-5 ${menu.link === activeMenu ? 'font-semibold border-b-2 border-black' : 'hover:border-b-2'}`}>
                          {menu.name}
                        </Link>
                      </li>
                    ))
                  }
                  <li className={`text-xl tablet:my-0 my-7 mobile:my-7 ${'user.berita' === activeMenu  || 'user.artikel' ===  activeMenu ? 'font-semibold border-b-2 border-black' : 'hover:border-b-2'}`}>
                    <div className="relative group">
                      <button onClick={toggleDropdown} className="dark:text-white text-black hover:text-cyan-400 duration-500 mobile:ml-3">
                        Berita & Artikel <AiFillCaretDown className="inline-block" />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute mobile:relative mobile:ml-5 mobile:border-none p-2 rounded-md border">
                          <Link href={route('user.berita')} className={`block text-black dark:text-white hover:bg-gray-700 px-2 py-1 ${'user.berita' === activeMenu ? 'font-semibold' : 'font-light'}`} onClick={() => handleClick('user.berita')}>Berita</Link>
                          <Link href={route('user.artikel')} className={`block text-black dark:text-white hover:bg-gray-700 px-2 py-1 ${'user.artikel' === activeMenu ? 'font-semibold' : 'font-light'}`} onClick={() => handleClick('user.artikel')}>Artikel</Link>
                        </div>
                      )}
                    </div>
                  </li>
                
                  {/* <PrimaryButton onClick={click}
                      className="text-white bg-slate-600 dark:bg-white dark:text-black "
                      >
                        {text}
                      </PrimaryButton> */}
              </ul>
            </div>
          </div>
        </div>
    )
}