import Authenticated from "@/Layouts/AuthAdmin/Index";
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState, useEffect } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Head,  useForm } from '@inertiajs/react';
import TextArea from "@/Components/TextArea";

export default function Create(){
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

    const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData('content');
    setEditorData(data);
    setData(data)
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('admin.dashboard.news.store'));
};

    return<Authenticated>

            <h1 className="text-3xl font-bold dark:text-white">Add News</h1>

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
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Tanggal"
                />
                <TextInput
                    className="dark:text-black justify-center items-left flex text-2xl font-thin mt-2"
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
                <TextArea
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Content"
                    name="content"
                    type="text"
                    placeholder="Content"
                    handleChange={handleOnChange}
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