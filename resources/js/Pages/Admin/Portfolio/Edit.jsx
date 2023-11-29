import InputLabel from "@/Components/InputLabel"
import Authenticated from "@/Layouts/AuthAdmin/Index"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"
import { Head,  useForm } from '@inertiajs/react';
import InputError from "@/Components/InputError"
import { Inertia } from "@inertiajs/inertia";

export default function Edit({auth, portfolio}){
    const { data, setData, post, processing, errors } = useForm({
        ...portfolio,
     });
     
 
     const handleOnChange = (event) => {
         setData(event.target.name,
             event.target.type === 'file' 
             ? event.target.files[0]
             : event.target.value);
     };
 
     const submit = (e) => {
         e.preventDefault();
 
         if(data.image === portfolio.image){
             delete data.image;
         }
 
         Inertia.post(route('admin.dashboard.portfolio.update', portfolio.id),{
             _method: 'PUT',
             ...data
         });
     };

     return<Authenticated auth={auth}>
     <Head title="Edit Portfolio" />
     <h1 className="text-3xl font-bold dark:text-white">Welcome to Admin Add Portfolio</h1>

     <form onSubmit={submit}>

     <img src={`/storage/${portfolio.image}`} className="w-23 h-20" />
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
     <InputError message={errors.image} className="mt-2" />
     
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
         defaultValue={portfolio.title}
     />
     <InputError message={errors.title} className="mt-2" />

     <PrimaryButton className="mt-3 dark:bg-blue-300 bg-blue-500">
         Save
     </PrimaryButton>
 </form>
 </Authenticated>
}