import Authenticated from "@/Layouts/AuthAdmin";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"

export default function Index() {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])
    
    return(
        <Authenticated>
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
							<tr>
                                <td className="border border-gray-500">1</td>
								<td className="border border-gray-500">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TdYsTZ2WFbJLwPwgbVfexWzppcvGaUxEcg&usqp=CAU" />
									
								</td>
								<td className="border border-gray-500">Naruto</td>
								<td>Action</td>
								<td className="border border-gray-500">Action border border-gray-500border border-gray-500</td>
								<td>Action border border-gray-500border border-gray-500</td>
								<td className="w-21 border border-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati quisquam assumenda explicabo perferendis aperiam cupiditate quam provident voluptate, voluptatibus porro vero ipsum quidem eius sequi facilis numquam fugiat at corporis?</td>
								<td className="w-auto">
                                <div className="flex items-center justify-center h-full">
                                    <Link>
                                        <PrimaryButton className="bg-yellow-500 mobile:w-10">
                                            <AiFillEdit size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <Link>
                                        <PrimaryButton className="bg-green-500 mobile:w-10">
                                            <BiDetail size="20" />
                                        </PrimaryButton>
                                    </Link>
                                    <PrimaryButton className="bg-red-600 mobile:w-10">
                                        <AiFillDelete size="20" />
                                    </PrimaryButton>
                                </div>
                                </td>
							</tr>
							
						</tbody>
					</table>
            </div>
}
        </Authenticated>
    )
}