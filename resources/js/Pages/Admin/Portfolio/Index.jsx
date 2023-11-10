import Authenticated from "@/Layouts/AuthAdmin";
import PrimaryButton from "@/Components/PrimaryButton"
import { Head,  useForm } from '@inertiajs/react';
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"
import { DotLoader } from "react-spinners";
import FlashMessage from "@/Components/FlashMessage";
import Swal from 'sweetalert2';
import { Inertia } from "@inertiajs/inertia";


export default function Index({auth, portfolios, flashMessage}) {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    const {delete: destroy} =useForm()

    // const handleDeleteClick = (itemId) => {
    //     // Menampilkan SweetAlert konfirmasi sebelum menghapus
    //     Swal.fire({
    //       title: 'Apakah Anda yakin?',
    //       text: 'Anda tidak akan dapat mengembalikan ini!',
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonText: 'Ya, hapus!',
    //       cancelButtonText: 'Batal',
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         // Lakukan penghapusan dengan menggunakan Inertia
    //         Inertia.delete(route('admin.dashboard.portfolio.destroy', itemId)).then(() => {
    //           // Tampilkan SweetAlert berhasil setelah penghapusan
    //           Swal.fire('Terhapus!', 'Item berhasil dihapus.', 'success');
    //         });
    //       }
    //     });
    //   };
    
    
    return(
        <Authenticated>
            <Head title="Admin Add Portfolio" />
            {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
            <div className="justify-center items-center h-screen">
                <h1 className="text-3xl font-bold my-3 dark:text-white">Welcome to Admin Portfolio</h1>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    <Link href={route('admin.dashboard.portfolio.create')}>
                        Create
                    </Link>
                </PrimaryButton>
                {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
            )}
                <table className="mt-3 w-full dark:text-white">
						<thead>
							<tr>
								<th className="border border-gray-500">No</th>
								<th className="border border-gray-500">Image</th>
								<th className="border border-gray-500">Title</th>
								<th className="border border-gray-500">Action</th>
							</tr>
						</thead>
						<tbody>
                            {portfolios.map((portfolio, i=1) => (
							<tr key={portfolio.id}>
                                <td className="border border-gray-500">{i+1}</td>
								<td className="border border-gray-500">
                                    <img src={`/storage/${portfolio.image}`} className="w-23 h-20" />
								</td>
								<td className="border border-gray-500">{portfolio.title}</td>
								<td className="w-auto border border-gray-500">
                                <div className="flex items-center justify-center h-full">
                                    <Link href={route('admin.dashboard.portfolio.edit', portfolio.id)}>
                                        <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600 mobile:w-10"
                                    onClick={()=> {
										destroy(route('admin.dashboard.portfolio.destroy', portfolio.id)) 
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
            </div>
}
        </Authenticated>
    )
}