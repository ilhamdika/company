import Authenticated from "@/Layouts/AuthAdmin/Index";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { BiDetail } from "react-icons/bi";
import FlashMessage from "@/Components/FlashMessage";
import { Head,  useForm } from '@inertiajs/react';

export default function Index({auth, flashMessage, services}) {
    // console.log(services)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    const {delete: destroy} =useForm()

    return(
        <Authenticated auth={auth}>
            <Head title="Services" />
         {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
            <div className="justify-center items-center h-screen">
                <h1 className="text-3xl font-bold my-3 dark:text-white">Welcome Services</h1>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    <Link href={route('admin.dashboard.services.create')}>
                        Create
                    </Link>
                </PrimaryButton>

                {flashMessage?.message && (
                <FlashMessage message={flashMessage.message}/>
                )}
                <table className="mt-3 w-full dark:text-white border border-gray-500">
						<thead>
							<tr className="border border-gray-500">
								<th className="border border-gray-500">No</th>
								<th className="border border-gray-500">Thumbail</th>
								<th className="border border-gray-500">Title</th>
								<th className="border border-gray-500">Motto</th>
								<th className="border border-gray-500">Tugas</th>
								<th className="border border-gray-500">Tugas</th>
								<th className="border border-gray-500">Deskripsi</th>
								<th className="border border-gray-500">Action</th>
							</tr>
						</thead>
						<tbody>
                            {services.map((service, i=1) => (
							<tr key={service.id}>
                                <td className="border border-gray-500">{i+ 1}</td>
								<td className="border border-gray-500">
									<img src={`/storage/${service.image}`} />
									
								</td>
								<td className="border border-gray-500">{service.title}</td>
								<td className="border border-gray-500">{service.motto}</td>
								<td className="border border-gray-500">{service.tugas1}</td>
								<td className="border border-gray-500">{service.tugas2}</td>
								<td className="w-21 border border-gray-500">{service.deskripsi}</td>
								<td className="w-auto border border-gray-500">
                                <div className="flex items-center justify-center h-full">
                                    <Link href={route('admin.dashboard.services.edit', service.id)}>
                                        <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    {/* <Link>
                                        <PrimaryButton className="bg-green-500 mobile:w-10">
                                            <BiDetail size="20" />
                                        </PrimaryButton>
                                    </Link> */}
                                    <PrimaryButton className="bg-red-600 mobile:w-10" onClick={()=>{
                                        destroy(route('admin.dashboard.services.destroy', service.id))
                                    }}>
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