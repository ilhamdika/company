import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import FlashMessage from "@/Components/FlashMessage";

export default function Index ({contact, flashMessage, auth}){
    // console.log(contact)
    const { data, setData, post, processing, errors } = useForm({
        ...contact,
     });

     const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === contact.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.contact.update', contact.id),{
            _method: 'PUT',
            ...data
        });
    };
    // console.log(contact)
    return(
        <Authenticated auth={auth}>
            <Head title="Admin Contact" />
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
                )}
            <form onSubmit={submit}>
            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 bg-gray-100 dark:bg-slate-600 rounded-xl">
                    <div className="w-full">
                        <div className="mt-5 items-center w-full">
                            <div className="flex">
                                <RiInstagramFill size={32} />
                                <h1 className="text-xl font-semibold ml-2">Instagram</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="Instagram"
                                name="instagram"
                                type="text"
                                placeholder="Instagram"
                                defaultValue={contact.instagram}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <FaFacebook size={32} />
                                <h1 className="text-xl font-semibold ml-2">Facebook</h1>
                            </div>
                            
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="Facebook"
                                name="facebook"
                                type="text"
                                placeholder="Facebook"
                                defaultValue={contact.facebook}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <FaYoutube size={32} />
                                <h1 className="text-xl font-semibold ml-2">Youtube</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center text-xl font-thin w-full"
                                label="Youtube"
                                name="youtube"
                                type="text"
                                placeholder="Youtube"
                                defaultValue={contact.youtube}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <MdEmail size={32} />
                                <h1 className="text-xl font-semibold ml-2">Email</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="Email"
                                name="email"
                                type="text"
                                placeholder="Email"
                                defaultValue={contact.email}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <FaPhone size={32} />
                                <h1 className="text-xl font-semibold ml-2">Telephone</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="Telephone"
                                name="phone"
                                type="text"
                                placeholder="Telephone"
                                defaultValue={contact.phone}
                                handleChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <FaPhone size={32} />
                                <h1 className="text-xl font-semibold ml-2">Telephone</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="Telephone"
                                name="phone"
                                type="text"
                                placeholder="Telephone"
                                defaultValue={contact.phone}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <FaAddressCard size={32} />
                                <h1 className="text-xl font-semibold ml-2">Address</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="Address"
                                name="address"
                                type="text"
                                placeholder="Address"
                                defaultValue={contact.address}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <FaLinkedin size={32} />
                                <h1 className="text-xl font-semibold ml-2">LinkedIn</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="LinkedIn"
                                name="linkedin"
                                type="text"
                                placeholder="LinkedIn"
                                defaultValue={contact.linkedin}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <IoLogoWhatsapp size={32} />
                                <h1 className="text-xl font-semibold ml-2">WhatsApp</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="WhatsApp"
                                name="whatapps"
                                type="text"
                                placeholder="WhatsApp"
                                defaultValue={contact.whatapps}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 items-center">
                            <div className="flex">
                                <FaTelegram size={32} />
                                <h1 className="text-xl font-semibold ml-2">Telegram</h1>
                            </div>
                            <TextInput
                                className="dark:text-black justify-center items-center flex text-xl font-thin w-full"
                                label="Telegram"
                                name="telegram"
                                type="text"
                                placeholder="Telegram"
                                defaultValue={contact.telegram}
                                handleChange={handleOnChange}
                            />
                        </div>
                        <div className="mt-5 flex justify-end">
                            <PrimaryButton className="mt-3 dark:bg-blue-300 bg-blue-500">
                                Save
                            </PrimaryButton>
                        </div>

                    </div>
            </div>
            </form>
        </Authenticated>
    )
}