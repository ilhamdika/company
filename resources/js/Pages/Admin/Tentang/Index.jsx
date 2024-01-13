import Authenticated from "@/Layouts/AuthAdmin/Index";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import FlashMessage from "@/Components/FlashMessage";
import TextArea from "@/Components/TextArea";
import { Head, Link, useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Index({about, flashMessage, auth}) {
    // console.log(about)
    const { data, setData, post, processing, errors } = useForm({
        ...about,
     });

     const handleOnChange = (event) => {
        setData(event.target.name,
            event.target.type === 'file' 
            ? event.target.files[0]
            : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if(data.image === about.image){
            delete data.image;
        }

        Inertia.post(route('admin.dashboard.tentang-kami.update', about.id),{
            _method: 'PUT',
            ...data
        });
    };

    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

//     const [editorData, setEditorData] = useState('');

//   const handleEditorChange = (event, editor) => {
//     const data = editor.getData();
//     setEditorData(data);
//   };
    
    return(
        <Authenticated auth={auth}>
            <Head title="Tentang Kami" />
         {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
            <div className="justify-center items-center h-screen">

                <h1 className="text-3xl font-bold my-3 dark:text-white">Struktur Organisasi</h1>
                <h1>Ingin melihat struktur organisasi?</h1>
                <Link href={route('admin.dashboard.struktur-organisasi.index')}>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500">
                        Lihat Struktur Organisasi 
                    </PrimaryButton>
                </Link>

                <h1 className="text-3xl font-bold my-3 dark:text-white">Dukungan Layanan Tenaga Jasa Pengamanan</h1>
                <h1>Dukungan Layanan Tenaga Jasa Pengamanan</h1>
                <Link href={route('admin.dashboard.dukungan-layanan.index')}>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500">
                        Lebih
                    </PrimaryButton>
                </Link>

                <h1 className="text-3xl font-bold my-3 dark:text-white">Tugas Pokok Dan Jam Kerja Satuan Pengamanan </h1>
                <h1>Tugas Pokok</h1>
                <Link href={route('admin.dashboard.tugas-pokok.index')}>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500">
                        Lebih
                    </PrimaryButton>
                </Link>

                <h1 className="text-3xl font-bold my-3 dark:text-white">Profile Tenaga Satuan yang direkrut</h1>
                <h1>PT. DAYA WINEKA SEJAHTERA NUSANTARA MELAKUKAN REQRUITMEN</h1>
                <Link href={route('admin.dashboard.rekrutmen.index')}>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500">
                        Lebih
                    </PrimaryButton>
                </Link>

                <h1 className="text-3xl font-bold my-3 dark:text-white">Materi Dan Kemampuan Pengetahuan Tenaga Jasa Pengamanan</h1>
                <h1>PT. Daya Wineka Sejahtera Nusantara telah mempersiapkan pemuda/pemudi yang di didik dan diberi kemampuan pengetahuan bidang satpam agar menjadi satuan pengamanan yang terampil dan profesional dalam tugasnya</h1>
                <Link href={route('admin.dashboard.pengetahuan.index')}>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500">
                        Lebih
                    </PrimaryButton>
                </Link>

                <h1 className="text-3xl font-bold my-3 dark:text-white">Bentuk kerjasama dan keuntungan pengguna jasa</h1>
                <Link href={route('admin.dashboard.bentuk-kerjasama.index')}>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500">
                        Lebih
                    </PrimaryButton>
                </Link>


                <h1 className="text-3xl font-bold my-3 dark:text-white">Tentang Kami</h1>
                {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
                )}
            <form onSubmit={submit}>
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Tentang Kami"
                />
                <TextArea
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Tentang Kami"
                    name="tentang_kami"
                    type="text"
                    defaultValue={about.tentang_kami}
                    handleChange={handleOnChange}
                />

                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Image"
                />
<img src={`/storage/${about.image}`} className="w-23 h-20" />
                <TextInput
                    className="dark:text-black justify-center items-center flex text-2xl font-thin mt-2 w-full"
                    label="Image"
                    name="image"
                    type="file"
                    handleChange={handleOnChange}
                />
                
                <InputLabel
                    className="text-2xl mt-2 dark:text-white"
                    value="Perusahaan Saat Ini"
                />
                {/* <textarea className="w-full h-96" name="perusahaan_saat_ini"></textarea> */}
                <TextArea
                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                    label="Perusahaan Saat Ini"
                    name="perusahaan_saat_ini"
                    type="text"
                    defaultValue={about.perusahaan_saat_ini}
                    handleChange={handleOnChange}
                />

                        <div className="flex">
                            <div className="w-1/2">
                                <InputLabel
                                    className="text-2xl mt-2 dark:text-white"
                                    value="Visi"
                                />
                                {/* <textarea className="w-full h-96" name="misi"></textarea> */}
                                <TextArea
                                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                    label="Visi"
                                    name="visi"
                                    type="text"
                                    defaultValue={about.visi}
                                    handleChange={handleOnChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <InputLabel
                                    className="text-2xl mt-2 dark:text-white"
                                    value="Misi"
                                />
                                <TextArea
                                    className="dark:text-black justify-center items-center flex text-xl font-thin mt-2 w-full"
                                    label="Misi"
                                    name="misi"
                                    type="text"
                                    defaultValue={about.misi}
                                    handleChange={handleOnChange}
                                />
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