import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Inertia } from "@inertiajs/inertia";
import { Head,  useForm, Link } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton"
import TextArea from "@/Components/TextArea";
import InputLabel from "@/Components/InputLabel";

export default function Edit ({auth, fisik_mental}){
    // console.log(fisik_mental);
    const { data, setData, post, processing, errors} = useForm({
        ...fisik_mental,
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === fisik_mental.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.fisik-mental.update', fisik_mental.id),{
            _method: 'PUT',
            ...data
        });
    };
    return(
        <Authenticated auth={auth}>
            <Head title="Edit Fisik Mental" />
            <Link href={route('admin.dashboard.pengetahuan.index')}>
                <PrimaryButton className="mt-3 bg-green-500 hover:bg-green-600">
                    Back
                </PrimaryButton>
            </Link>
            <div>
                <h1>Edit Fisik Mental</h1>
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
                    defaultValue={fisik_mental.title}
                />

                <PrimaryButton className="mt-3 dark:text-white dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}