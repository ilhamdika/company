import Authenticated from "@/Layouts/AuthAdmin/Index";
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import { useState, useEffect } from "react";
import { Head,  useForm } from '@inertiajs/react';
import TextArea from "@/Components/TextArea";
import InputError from "@/Components/InputError";

export default function Create({auth}){
    const {setData, post, processing, errors} = useForm({
        title: "",
        date: "",
        image: "",
        content: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
    
        post(route('admin.dashboard.artikel.store'));
    };

    return<Authenticated auth={auth}>
            <Head title="Admin Add Artikel" />
            <h1 className="text-3xl font-bold dark:text-white">Add Artikel</h1>

            <form onSubmit={submit}>
                
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Title"
                />
                <InputError message={errors.title} className="mt-2" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                    handleChange={handleOnChange}
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Tanggal"
                />
                <InputError message={errors.date} className="mt-2" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                    label="Tanggal"
                    name="date"
                    type="date"
                    placeholder="Tanggal"
                    handleChange={handleOnChange}
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Image"
                />
                <InputError message={errors.image} className="mt-2" />

                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Image"
                    name="image"
                    type="file"
                    handleChange={handleOnChange}
                />
                
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Content"
                />

                <InputError message={errors.content} className="mt-2" />
                <TextArea
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Content"
                    name="content"
                    type="text"
                    placeholder="Content"
                    handleChange={handleOnChange}
                />


                <PrimaryButton className="mt-3 dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    
}