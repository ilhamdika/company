import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Link } from "@inertiajs/react";
import { Head, useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export default function Index ({auth, flashMessage, bentuk_kerjasama}){
    const {delete: destroy} =useForm()
    // console.log(bentuk_kerjasama)
    return(
        <Authenticated auth={auth}>
            <Head title="Bentuk Kerjasama" />
            <Link href={route('admin.dashboard.tentang-kami.index')}>
                <PrimaryButton className="bg-green-500 hover:bg-green-600">
                    kembali
                </PrimaryButton>
            </Link>

            <h1 className="text-xl font-bold my-3 dark:text-white" id="rekrutmen">Bentuk kerjasama dan keuntungan pengguna jasa</h1>

            <Link href={route('admin.dashboard.bentuk-kerjasama.create')}>
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
                            {bentuk_kerjasama.map((kerja, i=1) => (
                            <tr key={kerja.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{kerja.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.bentuk-kerjasama.edit', kerja.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.bentuk-kerjasama.destroy', kerja.id))
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