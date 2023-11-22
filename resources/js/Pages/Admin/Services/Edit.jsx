import Authenticated from "@/Layouts/AuthAdmin/Index";
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState, useEffect } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Head,  useForm } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";
import InputError from "@/Components/InputError"
import TextArea from "@/Components/TextArea";

export default function Edit({auth, service}){
    // console.log(service)
    const { data, setData, post, processing, errors} = useForm({
        ...service,
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === service.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.services.update', service.id),{
            _method: 'PUT',
            ...data
        });
    };
    return<Authenticated auth={auth}>
            <Head title="Edit Services" />
            <h1 className="text-3xl font-bold dark:text-white">Edit Services</h1>

            <form onSubmit={submit}>
                
                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Title"
                />
                 <InputError message={errors.title} className="mt-2" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                    handleChange={handleOnChange}
                    defaultValue={service.title}
                />

                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Motto"
                />
                <InputError message={errors.motto} className="mt-2" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Motto"
                    name="motto"
                    type="text"
                    placeholder="Motto"
                    handleChange={handleOnChange}
                    defaultValue={service.motto}
                />

                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Image"
                />
                <img src={`/storage/${service.image}`} className="w-23 h-20" />
                <InputError message={errors.image} className="mt-2" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Image"
                    name="image"
                    type="file"
                    placeholder="Image"
                    handleChange={handleOnChange}
                />
                
                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Tugas 1"
                />
                <InputError message={errors.tugas1} className="mt-2" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Tugas 1"
                    name="tugas1"
                    type="text"
                    placeholder="Tugas 1"
                    handleChange={handleOnChange}
                    defaultValue={service.tugas1}
                />
                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Tugas 2"
                />
                <InputError message={errors.tugas2} className="mt-2" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Tugas 2"
                    name="tugas2"
                    type="text"
                    placeholder="Tugas 2"
                    handleChange={handleOnChange}
                    defaultValue={service.tugas2}
                />

                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Deskripsi"
                />
                <InputError message={errors.deskripsi} className="mt-2" />
                <TextArea
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Deskripsi"
                    name="deskripsi"
                    type="text"
                    placeholder="Deskripsi"
                    handleChange={handleOnChange}
                    defaultValue={service.deskripsi}
                />


                <PrimaryButton className="mt-3 dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
}