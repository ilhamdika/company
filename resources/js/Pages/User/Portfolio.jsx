import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head } from "@inertiajs/react";

export default function Portfolio({portfolios}){
    // console.log(portfolios)
    return<LayoutPage>
        <Head title="Portfolio" />
        <div className="mobile:pt-36">
            <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Portofolio Kami</h1>
                <div className="grid grid-cols-6 laptop:flex-row dekstop:flex-row mobile:grid-cols-2 rounded-xl mobile:h-auto mt-10">
                    
                    {portfolios.map((portfolio)=>(
                        <div className="mx-2" key={portfolio.id}>
                            <img src={`/storage/${portfolio.image}`} className="rounded-xl"/> 
                        </div>
                    ))}
                </div>
        </div>
    </LayoutPage>
}