import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthAdmin/Index";
import { Link } from "@inertiajs/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { Head,  useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";

export default function Index ({auth, strukturOrganisasi, flashMessage}){
    // console.log(strukturOrganisasi);
    const {delete: destroy} =useForm()
    return(
        <Authenticated auth={auth}>
            <Head title="Struktur Organisasi" />
            <Link href={route('admin.dashboard.tentang-kami.index')}>
                <PrimaryButton className="bg-green-500 hover:bg-green-600">
                    kembali
                </PrimaryButton>
            </Link>
            <div className="justify-center items-center">
                <h1>Struktur Organisasi</h1>
            </div>
            <Link href={route('admin.dashboard.struktur-organisasi.create')}>
                <PrimaryButton className="bg-green-500 hover:bg-green-600">
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
								<th className="border border-gray-500">Jabatan</th>
								<th className="border border-gray-500">Action</th>
							</tr>
						</thead>
						<tbody>
                            {strukturOrganisasi.map((struktur, i=1) => (
                            <tr key={struktur.id}>
                                <td className="border border-gray-500">{i + 1}</td>
                                <td className="border border-gray-500">{struktur.nama}</td>
                                <td className="border border-gray-500">{struktur.jabatan}</td>
                                <td className="border border-gray-500">
                                    <Link href={route('admin.dashboard.struktur-organisasi.edit', struktur.id)}>
                                        <PrimaryButton className="bg-yellow-500">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600"
                                    onClick={()=> {
                                        destroy(route('admin.dashboard.struktur-organisasi.destroy', struktur.id))
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