import Authenticated from "@/Layouts/AuthAdmin/Index";
import PrimaryButton from "@/Components/PrimaryButton"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import { Head,  useForm } from '@inertiajs/react';
import FlashMessage from "@/Components/FlashMessage";


export default function Artikel({flashMessage}){
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
							<tr>
                                <td>1</td>
								<td>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									
								</td>
								<td>Naruto</td>
								
								<td>
                                    <div className="flex items-center justify-center h-full">

                                    <Link>
                                        <PrimaryButton className="bg-yellow-500 dark:bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                   
                                    <PrimaryButton className="bg-red-600 dark:bg-red-600 mobile:w-10">
                                        <AiFillDelete size="20" />
                                    </PrimaryButton>
                                    </div>
                                </td>
							</tr>
							
						</tbody>
					</table>
        </Authenticated>
    )
}