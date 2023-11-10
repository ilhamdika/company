import Authenticated from "@/Layouts/AuthAdmin";
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import InputLabel from "@/Components/InputLabel"
import { Head,  useForm } from '@inertiajs/react';
import InputError from "@/Components/InputError"

export default function Create({auth}) {
    const { setData, post, processing, errors } = useForm({
        image: "",
        title: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.portfolio.store'));
    };

    return(
        <Authenticated auth={auth}>
            <Head title="Admin Add Portfolio" />
            <h1 className="text-3xl font-bold dark:text-white">Welcome to Admin Add Portfolio</h1>

            <form onSubmit={submit}>
            <InputError message={errors.image} className="mt-2" />
            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Image"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                type="file"
                name="image"
                placeholder="Image"
                handleChange={handleOnChange}
            />
            
            <InputError message={errors.title} className="mt-2" />
            
            <InputLabel
                className="text-2xl mt-2 dark:text-white"
                value="Title"
            />
            <TextInput
                className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2"
                label="Title"
                name="title"
                type="text"
                placeholder="Title"
                handleChange={handleOnChange}
            />

            <PrimaryButton className="mt-3 dark:bg-blue-300">
                Save
            </PrimaryButton>
        </form>
        </Authenticated>
    )
}