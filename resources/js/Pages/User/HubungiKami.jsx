import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head, Link } from "@inertiajs/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTelegram, FaVoicemail, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function HubungiKami ({contacts}){
    // console.log(contacts)
    return(
        <LayoutPage>
            <Head title="Hubungi Kami" />
            <div className="mobile:pt-24">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl font-semibold dark:text-white">Social Media Kami</h1>
                </div>

                <div className="flex justify-center items-center mt-5">
                    <div className="mobile:w-full">
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.whatapps}>
                            <FaWhatsapp className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">WhatsApp</h1>
                        </a>
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.email}>
                            <MdOutlineEmail  className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">Email</h1>
                        </a>
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.facebook}>
                            <FaFacebook className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">Facebook</h1>
                        </a>
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.instagram}>
                            <FaInstagram className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">Instagram</h1>
                        </a>
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.linkedin}>
                            <FaLinkedin className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">LinkedIn</h1>
                        </a>
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.telegram}>
                            <FaTelegram className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">Telegram</h1>
                        </a>
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.youtube}>
                            <FaYoutube className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">Youtube</h1>
                        </a>
                        <a className="flex justify-center items-center bg-blue-300 w-72 rounded-xl mobile:w-full transition duration-500 hover:text-white mt-4" target="blank" href={contacts.phone}>
                            <FaPhone className="text-2xl"/>
                            <h1 className="text-2xl font-semibold">Phone</h1>
                        </a>
                    </div>
                </div>
            </div>
        </LayoutPage>
    )
}