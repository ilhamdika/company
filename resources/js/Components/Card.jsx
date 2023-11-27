import PrimaryButton from "./PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Card ({className, thumbnail, title, description, href}){
    return(
        <div className={`mr-3 ml-3 mobile:h-100 mobile:w-full mobile:my-8` + className }>
            <Link href={href}>
                <img src={thumbnail} alt="Gambar" className="w-full mb-4 h-56 justify-center mobile:h-56 mobile:w-72 mobile:mx-auto " />
            </Link>
            <div className="h-20">
                <Link href={href}>
                    <h3 className="text-xl mb-2 dark:text-white font-semibold text-center duration-500 hover:text-blue-500 ">
                    {title}
                </h3>
                </Link>
            </div>
            <div className="h-20">
                <p className="dark:text-white font-light text-center">
                    {description}
                </p>
            </div>
            
            {/* <div className="flex justify-center mt-4 mobile:mb-4">
                <Link className="text-blue-600 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500 bottom-0" href={href}>Lebih lanjut</Link>
            </div> */}
        </div>
    )
}