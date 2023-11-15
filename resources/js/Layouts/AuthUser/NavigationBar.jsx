import { useState, useEffect } from "react";
import { Link } from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";

export default function NavigationBar ({text, click}){
    let Menu =[
        {
          name:"Home",
          link: "user.index"
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

    return (
        <div className={`navbar ${visible ? 'mobile:show' : 'mobile:hidden'}`}>

        <div className='shadow-tablet w-full fixed-absolute top-0 left-0 mobile:fixed mobile:bg-green-500 '>
      <div className='tablet:flex items-center justify-between py-4 tablet:px-10 px-7'>
      <div className='text-3xl cursor-pointer flex items-center
      dark:text-white'>
        <Link href={route('user.index')}>
            <img src="/images/logo.png" alt="Logo" className="w-20 h-20"/>
        </Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer tablet:hidden py-4'>
      
      {open ? <IoCloseSharp /> : <BsList />}
      
      </div>

      <ul className={`tablet:flex tablet:items-center tablet:pb-0 pb-12 absolute tablet:static  tablet:z-auto z-[-1] left-0 w-full tablet:w-auto mobile:bg-green-500 tablet:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
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
            <li key={menu.name} className='text-xl tablet:my-0 my-7'>
              <Link href={route(menu.link)} className='dark:text-white text-black hover:text-gray-400 duration-500 ml-5 mr-10'>
                {menu.name}
              </Link>
            </li>
          ))
        }
       <li className='text-xl tablet:my-0 my-7'>
       <div className="relative group">
          <button onClick={toggleDropdown} className="dark:text-white text-black hover:text-gray-400 duration-500">
            Berita & Artikel <AiFillCaretDown className="inline-block" />
          </button>
          {isDropdownOpen && (
            <div className="absolute mobile:relative mt-2 p-2 rounded-md border">
              <Link href={route('user.berita')} className="block text-black dark:text-white hover:bg-gray-700 px-2 py-1">Berita</Link>
              <Link href={route('user.artikel')} className="block text-black dark:text-white hover:bg-gray-700 px-2 py-1">Artikel</Link>
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