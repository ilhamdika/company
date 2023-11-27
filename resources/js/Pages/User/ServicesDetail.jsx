import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function ServicesDetail({service}){
    // console.log(service)
    return(
        <LayoutPage>
            <div>
                <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 px-10 mobile:px-1">
                        <div className='mt-10 mobile:h-100 mobile:w-full'>
                                <img src={`/storage/${service.image}`} alt="Elemen Atas" className="px-3 w-auto h-auto"/>
                        </div>
                        <div className="flex items-left pt-10 pb-10">
                            <div className=" dark:text-white rounded-md">
                                <h1 className="font-semibold text-4xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">{service.title}</h1>
                                <h1 className="font-light text-2xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">{service.motto}</h1>

                                <h1 className="font-semibold text-xl mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >{service.tugas1}</h1>
                                <h1 className="font-semibold text-xl mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >{service.tugas2}</h1>
                                <h1 className="font-light text-xl mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >{service.deskripsi}</h1>
                                <div className="pt-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <Link href={route('user.hubungi-kami')}>

                                    <PrimaryButton className="bg-blue-700 w-40 justify-center h-10 rounded-2xl">Hubungi Kami</PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </LayoutPage>
        
    )
}