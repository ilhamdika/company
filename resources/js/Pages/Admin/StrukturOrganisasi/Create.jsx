import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Head,  useForm } from '@inertiajs/react';

export default function Create({auth}){
    const { setData, post, processing, errors } = useForm({
        nama: "",
        jabatan: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.struktur-organisasi.store'));
    };

    return(
        <Authenticated auth={auth}>
            <Head title="Create Struktur Organisasi" />
            <div>
                <h1>Create Struktur Organisasi</h1>
            </div>

            <form onSubmit={submit}>
                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Nama"
                />
                <TextInput
                    className="text-xl mt-2 dark:text-white"
                    type="text"
                    label = "Nama"
                    name= "nama"
                    handleChange={handleOnChange}
                />
                <InputLabel
                    className="text-xl mt-2 dark:text-white"
                    value="Jabatan"
                />
                <TextInput
                    className="text-xl mt-2 dark:text-white"
                    type="text"
                    label = "Jabatan"
                    name= "jabatan"
                    handleChange={handleOnChange}
                />

                <PrimaryButton className="mt-3 dark:text-white dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}