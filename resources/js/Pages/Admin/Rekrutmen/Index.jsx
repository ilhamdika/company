import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Link } from "@inertiajs/react";
import { Head, useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export default function Index({auth, rekrutmen, administrasi, flashMessage, mental_ideologi, kemampuan_fisik}){
    // console.log(rekrutmen);
    // console.log(administrasi);
    // console.log(mental_ideologi)
    console.log(kemampuan_fisik)
    const {delete: destroy} =useForm()
    return(
        <Authenticated>
            <Head title="Rekrutmen" />
            <Link href={route('admin.dashboard.tentang-kami.index')}>
                <PrimaryButton className="bg-green-500 hover:bg-green-600">
                    kembali
                </PrimaryButton>
            </Link>
            <h1 className="text-xl font-bold my-3 dark:text-white">Syarat Rekurtmen Tenaga Jasa Pengamanan</h1>

            <Link href={route('admin.dashboard.rekrutmen.create')}>
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
                            {rekrutmen.map((rek, i=1) => (
                            <tr key={rek.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{rek.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.rekrutmen.edit', rek.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.rekrutmen.destroy', rek.id))
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

                    <h1 className="text-xl font-bold my-3 dark:text-white">Administrasi</h1>
                    <Link href={route('admin.dashboard.administrasi.create')}>
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
                        {administrasi.map((ad, i=1) => (
                            <tr key={ad.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{ad.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.administrasi.edit', ad.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.administrasi.destroy', ad.id))
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

                    <h1 className="text-xl font-bold my-3 dark:text-white">Mental Ideologi</h1>

                    <Link href={route('admin.dashboard.mental-ideologi.create')}>
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
                        {mental_ideologi.map((mental, i=1) => (
                            <tr key={mental.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{mental.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.mental-ideologi.edit', mental.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.mental-ideologi.destroy', mental.id))
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

                    <h1 className="text-xl font-bold my-3 dark:text-white">Kemampuan Fisik</h1>

                    <Link href={route('admin.dashboard.kemampuan-fisik.create')}>
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
                        {kemampuan_fisik.map((fisik, i=1) => (
                            <tr key={fisik.id}>
                                <td className="border border-gray-500">{i +1}</td>
                                <td className="border border-gray-500">{fisik.title}</td>
                                <td className="border border-gray-500">
                                <Link href={route('admin.dashboard.kemampuan-fisik.edit', fisik.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.kemampuan-fisik.destroy', fisik.id))
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