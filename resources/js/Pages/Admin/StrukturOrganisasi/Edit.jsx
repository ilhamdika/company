import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Head,  useForm } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

export default function Create({auth , strukturOrganisasi}){
    // console.log(strukturOrganisasi);
    const { data, setData, post, processing, errors } = useForm({
        ...strukturOrganisasi,
     });

     const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === strukturOrganisasi.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.struktur-organisasi.update', strukturOrganisasi.id),{
            _method: 'PUT',
            ...data
        });
    };


    return(
        <Authenticated auth={auth}>
            <div>
                <h1>Edit anggota</h1>
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
                    defaultValue={strukturOrganisasi.nama}
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
                    defaultValue={strukturOrganisasi.jabatan}
                />

                <PrimaryButton className="mt-3 dark:text-white dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}