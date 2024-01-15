import { Link, usePage } from '@inertiajs/react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer (){
    const {contact} = usePage().props

    const no = contact.whatapps;
    const noWa = no.substring(14);
    const no2 = contact.whatapps2;
    const noWa2 = no2.substring(14);
    return(
        <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3">
            <div className='grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-2 mt-3 px-5 py-10 mobile:py-2'>
                <div>
                    <Link href={route('user.tentang-kami')}>
                        <h1 className='font-medium text-xl hover:text-blue-500'>Tentang Kami</h1>
                    </Link>
                    <Link href={route('user.berita')}>
                        <h1 className='font-medium text-xl mt-5 hover:text-blue-500'>Berita</h1>
                    </Link>
                    <Link href={route('user.services')}>
                        <h1 className='font-medium text-xl mt-5 hover:text-blue-500'>Services</h1>
                    </Link>
                    <Link href={route('user.portfolio')}>
                        <h1 className='font-medium text-xl mt-5 hover:text-blue-500'>Portfolio</h1>
                    </Link>
                </div>
                <div>
                    <h1 className='font-medium text-xl hover:text-blue-500'>Kantor Pusat</h1>
                    <p className='mt-5'>{contact.address}</p>
                </div>
            </div>
            <div className="">
                <div className='grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-2 mobile:py-1 mt-3 px-5 py-10'>
                    <div>
                        <h1 className='font-medium text-xl hover:text-blue-500'>Hubungi Kami</h1>
                        <div className='flex mt-5'>
                            <FaPhoneAlt size="24" className="mr-3"/>
                            <p>{contact.phone}</p>
                        </div>
                        <a target='blank' href={contact.whatapps}>
                            <div className='flex mt-5'>
                                <FaWhatsapp size="24" className="mr-3"/>
                                <p>+{noWa}</p>
                            </div>
                        </a>
                        <a target='blank' href={contact.whatapps2}>
                            <div className='flex mt-5'>
                                <FaWhatsapp size="24" className="mr-3"/>
                                <p>+{noWa2}</p>
                            </div>
                        </a>
                        <a target='blank' href='https://wa.me/6281292025833'>
                            <div className='flex mt-5'>
                                <FaWhatsapp size="24" className="mr-3"/>
                                <p>+6281292025833</p>
                            </div>
                        </a>
                        <a target='blank' href='https://wa.me/6281210688511'>
                            <div className='flex mt-5'>
                                <FaWhatsapp size="24" className="mr-3"/>
                                <p>+6281210688511</p>
                            </div>
                        </a>
                        
                    </div>
                    <div className='justify-center items-center laptop:pl-10 desktop:pl-10'>
                        <div className='flex py-5'>
                            <Link href={contact.instagram}>
                                <FaInstagram size="30" className="mr-3"/>
                            </Link>
                            <Link href={contact.facebook}>
                                <FaFacebookF size="30" className="mr-3"/>
                            </Link>
                            <Link href={contact.linkedin}>
                                <CiLinkedin size="30" className="mr-3"/>
                            </Link>
                        </div>
                        <Link href={route('user.index')}>
                            <img src="/images/logo.png" alt="Logo" className="w-24 h-24"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}