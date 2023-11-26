import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Inertia } from "@inertiajs/inertia";
import { Head,  useForm, Link } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton"
import TextArea from "@/Components/TextArea";
import InputLabel from "@/Components/InputLabel";

export default function Edit ({auth, mental_ideologi}){
    // console.log(mental_ideologi);
    const { data, setData, post, processing, errors} = useForm({
        ...mental_ideologi,
    });

    const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === mental_ideologi.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.mental-ideologi.update', mental_ideologi.id),{
            _method: 'PUT',
            ...data
        });
    };
    return(
        <Authenticated auth={auth}>
            <Head title="Edit Mental Ideologi" />
            <Link href={route('admin.dashboard.rekrutmen.index')}>
                <PrimaryButton className="mt-3 bg-green-500 hover:bg-green-600">
                    Back
                </PrimaryButton>
            </Link>
            <div>
                <h1>Edit Mental Ideologi</h1>
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
                    defaultValue={mental_ideologi.title}
                />

                <PrimaryButton className="mt-3 dark:text-white dark:bg-blue-300 bg-blue-500">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    )
}