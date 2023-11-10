import Authenticated from "@/Layouts/AuthAdmin/Index";
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import ImageUploader from "@/Components/ImageUploader"
import PrimaryButton from "@/Components/PrimaryButton"

export default function Create(){
    return<Authenticated>

            <h1 className="text-3xl font-bold dark:text-white">Add Services</h1>

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
                    value="Motto"
                />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Motto"
                    name="motto"
                    type="text"
                    placeholder="Motto"
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
                    value="Tugas 1"
                />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Tugas 1"
                    name="tugas1"
                    type="text"
                    placeholder="Tugas 1"
                />
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Tugas 2"
                />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Tugas 2"
                    name="tugas2"
                    type="text"
                    placeholder="Tugas 2"
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