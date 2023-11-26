import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Inertia } from "@inertiajs/inertia";
import { Head,  useForm, Link } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton"
import TextArea from "@/Components/TextArea";
import InputLabel from "@/Components/InputLabel";

export default function Edit ({auth, keterampilan}){
    // console.log(keterampilan);
    const { data, setData, post, processing, errors} = useForm({
        ...keterampilan,
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === keterampilan.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.keterampilan.update', keterampilan.id),{
            _method: 'PUT',
            ...data
        });
    };
    return(
        <Authenticated auth={auth}>
            <Head title="Edit Keterampilan" />
            <Link href={route('admin.dashboard.pengetahuan.index')}>
                <PrimaryButton className="mt-3 bg-green-500 hover:bg-green-600">
                    Back
                </PrimaryButton>
            </Link>
            <div>
                <h1>Edit Keterampilan</h1>
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
                    defaultValue={keterampilan.title}
                />

                <PrimaryButton className="mt-3 dark:text-white dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}