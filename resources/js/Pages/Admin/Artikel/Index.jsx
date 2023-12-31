import Authenticated from "@/Layouts/AuthAdmin/Index";
import PrimaryButton from "@/Components/PrimaryButton"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import { Head,  useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";


export default function Artikel({flashMessage, artikels}){
    // console.log(artikels)
    const {delete: destroy} =useForm()
    return(
        <Authenticated>
             <Head title="Admin Add Portfolio" />
             <h1 className="text-3xl font-bold my-3 dark:text-white">Artikel</h1>
                <PrimaryButton className="bg-green-500 dark:bg-green-500">
                    <Link href={route('admin.dashboard.artikel.create')}>
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
                        {artikels.map((artikel, i=1) => (
							<tr key={artikel.id}>
                                <td className="border border-gray-500">{i+1}</td>
								<td className="border border-gray-500">
                                    <img src={`/storage/${artikel.image}`} className="w-23 h-20" />
								</td>
								<td className="border border-gray-500">{artikel.title}</td>
								<td className="w-auto border border-gray-500">
                                <div className="flex items-center justify-center h-full">
                                    <Link href={route('admin.dashboard.artikel.edit', artikel.id)}>
                                        <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600 mobile:w-10"
                                    onClick={()=> {
										destroy(route('admin.dashboard.artikel.destroy', artikel.id)) 
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
        </Authenticated>
    )
}