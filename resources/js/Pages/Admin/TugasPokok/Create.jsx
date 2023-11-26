import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import { Head,  useForm } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";

export default function Create({auth}) {
    const { setData, post, processing, errors } = useForm({
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

        post(route('admin.dashboard.tugas-pokok.store'));
    };
    return(
        <Authenticated auth={auth}>
            <Head title="Create Tugas Pokok & Jam Kerja Satuan Pengamanan" />
            <div>
                <h1>Create Tugas Pokok & Jam Kerja Satuan Pengamanan</h1>
            </div>

            <form onSubmit={submit}>
                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Title"
                />
                <TextArea
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Title"
                    name="title"
                    type="text"
                    handleChange={handleOnChange}
                />

                <PrimaryButton className="mt-3 dark:text-white dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}