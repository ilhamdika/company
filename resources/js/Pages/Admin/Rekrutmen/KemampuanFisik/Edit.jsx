import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Inertia } from "@inertiajs/inertia";
import { Head,  useForm } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton"
import TextArea from "@/Components/TextArea";
import InputLabel from "@/Components/InputLabel";

export default function Edit ({auth, kemampuan_fisik}){
    // console.log(kemampuan_fisik);
    const { data, setData, post, processing, errors} = useForm({
        ...kemampuan_fisik,
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === kemampuan_fisik.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.kemampuan-fisik.update', kemampuan_fisik.id),{
            _method: 'PUT',
            ...data
        });
    };
    return(
        <Authenticated auth={auth}>
            <Head title="Edit Kemampuan Fisik" />
            <div>
                <h1>Edit Kemampuan Fisik</h1>
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
                    defaultValue={kemampuan_fisik.title}
                />

                <PrimaryButton className="mt-3 dark:text-white dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}