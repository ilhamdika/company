import Authenticated from "@/Layouts/AuthAdmin/Index";
import PrimaryButton from "@/Components/PrimaryButton"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import { Head,  useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";


export default function Berita({auth, flashMessage, beritas}){
    // console.log(beritas)

    const {delete: destroy} =useForm()
    return(
        <Authenticated auth={auth}>
             <Head title="Admin Add Portfolio" />
             <h1 className="text-3xl font-bold my-3 dark:text-white">Berita</h1>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    <Link href={route('admin.dashboard.news.create')}>
                        Create
                    </Link>
                </PrimaryButton>
                {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
                )}
            <table className="mt-3 w-full dark:text-white">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Thumbail</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {beritas.data.map((berita, i=1) => (
                    <tr key={berita.id}>
                        <td className="border border-gray-500">{i+1}</td>
                        <td className="border border-gray-500">
                            <img src={`/storage/${berita.image}`} className="w-23 h-20" />
                        </td>
                        <td className="border border-gray-500">{berita.title}</td>
                        <td className="w-auto border border-gray-500">
                        <div className="flex items-center justify-center h-full">
                            <Link href={route('admin.dashboard.news.edit', berita.id)}>
                                <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                    <AiFillEdit size="20" />
                                </PrimaryButton>
                            </Link>
                            <PrimaryButton className="bg-red-600 mobile:w-10"
                            onClick={()=> {
                                destroy(route('admin.dashboard.news.destroy', berita.id)) 
                                }}
                            >
                                <AiFillDelete size="20" />
                            </PrimaryButton>
                        </div>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className="pagination-links flex justify-end mt-4 space-x-1 text-sm">
                {beritas.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`px-2 py-1 border rounded ${link.active ? 'bg-emerald-300 text-white border-emerald-500' : 'bg-white border-gray-300 hover:bg-gray-200'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </Authenticated>
    )
}