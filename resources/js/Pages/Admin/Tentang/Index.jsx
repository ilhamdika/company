import Authenticated from "@/Layouts/AuthAdmin";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from "@ckeditor/ckeditor5-react";


export default function Index() {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };
    
    return(
        <Authenticated>
         {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
            <div className="justify-center items-center h-screen">
                <h1 className="text-3xl font-bold my-3 dark:text-white">Tentang Kami</h1>

                <form>
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Tentang Kami"
                />
                <textarea className="w-full h-96" name="tentang_kami"></textarea>

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
                    value="Perusahaan Saat Ini"
                />
                <textarea className="w-full h-96" name="perusahaan_saat_ini"></textarea>

                        <div className="flex">
                            <div className="w-1/2">
                                <InputLabel
                                    className="text-2xl mt-2 dark:text-white"
                                    value="Visi"
                                />
                                <textarea className="w-full h-96" name="misi"></textarea>
                            </div>
                            <div className="w-1/2">
                                <InputLabel
                                    className="text-2xl mt-2 dark:text-white"
                                    value="Misi"
                                />
                                <textarea className="w-full h-96" name="misi"></textarea>
                            </div>

                        </div>
                        {/* <CKEditor
                            editor={ClassicEditor}
                            data={editorData}
                            onChange={handleEditorChange}
                            name="deskripsi"
                        /> */}
                        <PrimaryButton className="bg-green-500 dark:bg-green-500">
                            Save
                        </PrimaryButton>

                        
                </form>
                </div>
}
        </Authenticated>
    )
}