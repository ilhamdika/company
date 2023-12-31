import Authenticated from "@/Layouts/AuthAdmin/Index";
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import TextArea from "@/Components/TextArea";
import { Head,  useForm } from '@inertiajs/react';
import InputError from "@/Components/InputError";

export default function Create({auth}){
    const {setData, post, processing, errors} = useForm({
        title: "",
        motto: "",
        image: "",
        tugas1: "",
        tugas2: "",
        description: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
    
        post(route('admin.dashboard.services.store'));
    };

    return<Authenticated auth={auth}>
            <Head title="Add Services" />
            <h1 className="text-3xl font-bold dark:text-white">Add Services</h1>

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
                />

                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Image"
                />
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
                />


                <PrimaryButton className="mt-3 dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    
}