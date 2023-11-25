import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Link } from "@inertiajs/react";
import { Head, useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export default function Index ({auth, dukunganLayanan, flashMessage}){
    // console.log(dukunganLayanan);
    const {delete: destroy} =useForm()
    return(
        <Authenticated auth={auth}>
            <Head title="Dukungan Layanan" />
            <Link href={route('admin.dashboard.tentang-kami.index')}>
                <PrimaryButton className="bg-green-500 hover:bg-green-600">
                    kembali
                </PrimaryButton>
            </Link>
            <div className="justify-center items-center">
                <h1>Dukungan Layanan</h1>
            </div>
            <h1 className="text-xl font-bold my-3 dark:text-white">Dukungan Layanan Tenaga Jasa Pengamanan</h1>
            <Link href={route('admin.dashboard.dukungan-layanan.create')}>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    Add
                </PrimaryButton>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
            )}
                    <table className="mt-3 w-full dark:text-white border border-gray-500">
                        <thead>
                            <tr className="border border-gray-500">
                                <th className="border border-gray-500">No</th>
                                <th className="border border-gray-500">Nama</th>
                                <th className="border border-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dukunganLayanan.map((dukungan, i=1) => (
                            <tr key={dukungan.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{dukungan.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.dukungan-layanan.edit', dukungan.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.dukungan-layanan.destroy', dukungan.id))
                                        }
                                    }
                                    >
                                        <AiFillDelete size="20" />
                                    </PrimaryButton>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
        </Authenticated>
    )
}