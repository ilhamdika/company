import Authenticated from "@/Layouts/AuthAdmin/Index";
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"

export default function Create(){
    return<Authenticated>

            <h1 className="text-3xl font-bold dark:text-white">Add News</h1>

            <form>
                
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Title"
                />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Title"
                    name="title"
                    type="text"
                    placeholder="Title"
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Tanggal"
                />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Tanggal"
                    name="date"
                    type="date"
                    placeholder="Tanggal"
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Image"
                />

                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Image"
                    name="image"
                    type="file"
                />
                
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Deskripsi"
                />
                <textarea className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full" name="description" id="description" cols="30" rows="10"></textarea>


                <PrimaryButton className="mt-3 dark:bg-blue-300">
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    
}