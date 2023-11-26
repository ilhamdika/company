import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Link } from "@inertiajs/react";
import { Head, useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export default function Index({auth, flashMessage, fisik_mental, akademik, keterampilan}){
    // console.log(fisik_mental)
    // console.log(akademik)
    // console.log(keterampilan)
    const {delete: destroy} =useForm()
    return(
        <Authenticated auth={auth}>
           <Head title="Pengetahuan" />
            <Link href={route('admin.dashboard.tentang-kami.index')}>
                <PrimaryButton className="bg-green-500 hover:bg-green-600">
                    kembali
                </PrimaryButton>
            </Link>
        <div className="mb-10">
            <h1 className="text-xl font-bold my-3 dark:text-white" id="rekrutmen">Materi Dan Kemampuan Pengetahuan Tenaga Jasa Pengamanan</h1>

            
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
            )}

            <h1 className="text-xl font-bold my-3 dark:text-white" id="fisik">Fisik dan Mental</h1>
            <Link href={route('admin.dashboard.fisik-mental.create')}>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    Add
                </PrimaryButton>
            </Link>

                    <table className="mt-3 w-full dark:text-white border border-gray-500">
                        <thead>
                            <tr className="border border-gray-500">
                                <th className="border border-gray-500">No</th>
                                <th className="border border-gray-500">Nama</th>
                                <th className="border border-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fisik_mental.map((fis, i=1) => (
                            <tr key={fis.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{fis.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.fisik-mental.edit', fis.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.fisik-mental.destroy', fis.id))
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


            <h1 className="text-xl font-bold my-3 dark:text-white" id="akademik">Akademik</h1>
            <Link href={route('admin.dashboard.akademik.create')}>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    Add
                </PrimaryButton>
            </Link>

            <table className="mt-3 w-full dark:text-white border border-gray-500">
                        <thead>
                            <tr className="border border-gray-500">
                                <th className="border border-gray-500">No</th>
                                <th className="border border-gray-500">Nama</th>
                                <th className="border border-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {akademik.map((aka, i=1) => (
                            <tr key={aka.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{aka.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.akademik.edit', aka.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.akademik.destroy', aka.id))
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

                    <h1 className="text-xl font-bold my-3 dark:text-white" id="keterampilan">Keterampilan</h1>
                    <Link href={route('admin.dashboard.keterampilan.create')}>
                        <PrimaryButton className="bg-green-500 dark:bg-green-500">
                            Add
                        </PrimaryButton>
                    </Link>

                    <table className="mt-3 w-full dark:text-white border border-gray-500">
                        <thead>
                            <tr className="border border-gray-500">
                                <th className="border border-gray-500">No</th>
                                <th className="border border-gray-500">Nama</th>
                                <th className="border border-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {keterampilan.map((ket, i=1) => (
                            <tr key={ket.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{ket.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.keterampilan.edit', ket.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.keterampilan.destroy', ket.id))
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

                    <div className="flex fixed bottom-5 right-5">
                        <a href="#fisik" className="mx-1">
                            <PrimaryButton className="bg-lime-500 dark:bg-lime-500">
                                Fisik & Mental
                            </PrimaryButton>
                        </a>
                        <a href="#akademik" className="mx-1">
                            <PrimaryButton className="bg-lime-500 dark:bg-lime-500">
                                Akademik
                            </PrimaryButton>
                        </a>
                        <a href="#keterampilan" className="mx-1">
                            <PrimaryButton className="bg-lime-500 dark:bg-lime-500">
                                Keterampilan
                            </PrimaryButton>
                        </a>
                        
                    </div>
        </div>
        </Authenticated>
    )
}