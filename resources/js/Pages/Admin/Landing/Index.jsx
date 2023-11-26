import Authenticated from "@/Layouts/AuthAdmin";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"
import TextArea from "@/Components/TextArea";
import InputLabel from "@/Components/InputLabel";
import { Inertia } from "@inertiajs/inertia";
import FlashMessage from "@/Components/FlashMessage";
import { Head, useForm } from "@inertiajs/react";

export default function Index({auth, landing, flashMessage}) {
    console.log(landing)

    const { data, setData, post, processing, errors } = useForm({
        ...landing,
     });

     const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === landing.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.landing.update', landing.id),{
            _method: 'PUT',
            ...data
        });
    };

    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    return(
        <Authenticated auth={auth}>
            <Head title="Landing Page" />
         {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
                <div>
                    {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
                )}
                    <form onSubmit={submit}>
                    <div className="flex">
                                <div className="w-1/2">
                                    <div className="py-14">

                                        <InputLabel
                                            className="text-2xl mt-2 dark:text-white"
                                            value="Judul Depan"
                                        />
                                        <TextArea
                                            className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                            label="Judul Depan"
                                            name="title_hero"
                                            type="text"
                                            defaultValue={landing.title_hero}
                                            handleChange={handleOnChange}
                                        />
                                        <InputLabel
                                            className="text-2xl mt-2 dark:text-white"
                                            value="Sub Judul Depan"
                                        />
                                        <TextArea
                                            className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                            label="Sub Judul Depan"
                                            name="title_hero_sub"
                                            type="text"
                                            defaultValue={landing.title_hero_sub}
                                            handleChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <h1 className="text-3xl font-bold my-3 dark:text-white mx-3">Halaman Depan bagian paling atas</h1>
                                    <h1 className="text-xl font-light my-3 text-red-600 dark:text-white mx-3">contohnya gambar dibawah</h1>
                                    <img src="/images/hero_example.png" alt="Elemen Atas" className="laptop:ml-14 w-auto h-auto"/>
                                </div>

                    </div>
                    <div className="flex">
                                <div className="w-1/2">
                                    <h1 className="text-xl font-light my-3 text-red-600 dark:text-white mx-3">contohnya gambar dibawah</h1>
                                    <img src="/images/mot.png" alt="Elemen Atas" className="px-10 w-auto h-auto mx-10"/>
                                </div>
                                <div className="w-1/2">
                                    
                                    <div className="py-14">

                                        <InputLabel
                                            className="text-2xl mt-2 dark:text-white"
                                            value="Text kiri"
                                        />
                                        <TextArea
                                            className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                            label="Judul Depan"
                                            name="motto_sub"
                                            type="text"
                                            defaultValue={landing.motto_sub}
                                            handleChange={handleOnChange}
                                        />
                                        <InputLabel
                                            className="text-2xl mt-2 dark:text-white"
                                            value="Text kanan"
                                        />
                                        <TextArea
                                            className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                            label="Text kanan"
                                            name="motto_title"
                                            type="text"
                                            defaultValue={landing.motto_title}
                                            handleChange={handleOnChange}
                                        />
                                    </div>
                                </div>

                    </div>

                    <div className="flex">
                                <div className="w-1/2">
                                    <div className="py-14">

                                        <InputLabel
                                            className="text-2xl mt-2 dark:text-white"
                                            value="Text kiri"
                                        />
                                        <TextArea
                                            className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                            label="Text kiri"
                                            name="branding_title"
                                            type="text"
                                            defaultValue={landing.branding_title}
                                            handleChange={handleOnChange}
                                        />
                                        <InputLabel
                                            className="text-2xl mt-2 dark:text-white"
                                            value="Text Kanan"
                                        />
                                        <TextArea
                                            className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                            label="Text Kanan"
                                            name="branding_sub"
                                            type="text"
                                            defaultValue={landing.branding_sub}
                                            handleChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <h1 className="text-xl font-light my-3 text-red-600 dark:text-white mx-3">contohnya gambar dibawah</h1>
                                    <img src="/images/motto.png" alt="Elemen Atas" className="px-10 w-auto h-auto mx-10"/>
                                </div>

                    </div>
                    <div className="flex">
                        <PrimaryButton className="ml-auto bg-blue-500 dark:bg-blue-500 w-40 justify-center h-10 rounded-2xl">Simpan</PrimaryButton>
                    </div>
                    </form>
                </div>

                
}
        </Authenticated>
    )
}