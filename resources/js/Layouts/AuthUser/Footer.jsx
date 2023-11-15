import { Link } from '@inertiajs/react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer (){
    return(
        <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3">
            <div className='grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-2 mt-3 px-5 py-10 mobile:py-2'>
                <div>
                    <Link>
                        <h1 className='font-medium text-xl hover:text-blue-500'>Tentang Kami</h1>
                    </Link>
                    <Link>
                        <h1 className='font-medium text-xl mt-5 hover:text-blue-500'>Berita</h1>
                    </Link>
                    <Link>
                        <h1 className='font-medium text-xl mt-5 hover:text-blue-500'>Services</h1>
                    </Link>
                    <Link>
                        <h1 className='font-medium text-xl mt-5 hover:text-blue-500'>Portfolio</h1>
                    </Link>
                </div>
                <div>
                    <h1 className='font-medium text-xl hover:text-blue-500'>Kantor Pusat</h1>
                    <p className='mt-5'>Kompleks Golden Plaza Blok C No. 1-3 Jl. R.S. Fatmawati No. 15 Jakarta 12420</p>
                </div>
            </div>
            <div className="">
                <div className='grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-2 mobile:py-1 mt-3 px-5 py-10'>
                    <div>
                        <h1 className='font-medium text-xl hover:text-blue-500'>Hubungi Kami</h1>
                        <div className='flex mt-5'>
                            <FaPhoneAlt size="24" className="mr-3"/>
                            <p>021-12345678</p>
                        </div>
                        <div className='flex mt-5'>
                            <FaWhatsapp size="24" className="mr-3"/>
                            <p>08123456789</p>
                        </div>
                        <div className='flex py-5'>
                            <Link>
                                <FaInstagram size="30" className="mr-3"/>
                            </Link>
                            <Link>
                                <FaFacebookF size="30" className="mr-3"/>
                            </Link>
                            <Link>
                                <CiLinkedin size="30" className="mr-3"/>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src="/images/logo.png" alt="Logo" className="w-24 h-24"/>
                    </div>
                </div>
            </div>
        </div>
    )
}