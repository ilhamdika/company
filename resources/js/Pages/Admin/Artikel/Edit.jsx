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

export default function Edit({auth, artikel}){
    const { data, setData, post, processing, errors} = useForm({
        ...artikel,
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === artikel.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.artikel.update', artikel.id),{
            _method: 'PUT',
            ...data
        });
    };

    return<Authenticated auth={auth}>
            <Head title="Admin Edit Artikel" />
            <h1 className="text-3xl font-bold dark:text-white">Edit Artikel</h1>

            <form onSubmit={submit}>
                
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Title"
                />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                    handleChange={handleOnChange}
                    defaultValue={artikel.title}
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Tanggal"
                />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                    label="Tanggal"
                    name="date"
                    type="date"
                    placeholder="Tanggal"
                    handleChange={handleOnChange}
                    defaultValue={artikel.date}
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Image"
                />
                <img src={`/storage/${artikel.image}`} className="w-23 h-20" />
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
                {/* <textarea className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full" name="content" id="description" cols="30" rows="10" onChange={handleOnChange} defaultValue={artikel.content}>
                    {artikel.content}
                </textarea> */}
                <TextArea
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Content"
                    name="content"
                    placeholder="Content"
                    handleChange={handleOnChange}
                    defaultValue={artikel.content}
                />
                <div className="h-96">
                 {/* <CKEditor
                            editor={ClassicEditor}
                            data={editorData}
                            onChange={handleEditorChange}
                            name="content"
                        /> */}
                <PrimaryButton className="mt-3 dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
                </div>


            </form>
        </Authenticated>
    
}