import { Link } from '@inertiajs/react'

export default function Footer (){
    return(
        <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3">
            <div className='grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-2 mt-3 px-5 py-10 mobile:py-2'>
                <div>
                    <Link>
                        <h1 className='font-medium text-2xl hover:text-blue-500'>Tentang Kami</h1>
                    </Link>
                    <Link>
                        <h1 className='font-medium text-2xl mt-5 hover:text-blue-500'>Berita</h1>
                    </Link>
                </div>
                <div>
                    <h1 className='font-medium text-2xl hover:text-blue-500'>Kantor Pusat</h1>
                    <p className='mt-5'>Kompleks Golden Plaza Blok C No. 1-3 Jl. R.S. Fatmawati No. 15 Jakarta 12420</p>
                </div>
            </div>
            <div className="">
                <div className='grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mobile:py-1 mt-3 px-5 py-10'>
                    <div>
                        <Link>
                            <h1 className='font-medium text-2xl hover:text-blue-500'>Tentang Kami</h1>
                        </Link>
                    </div>
                    <div>
                        <h1 className='font-medium text-2xl hover:text-blue-500'>Kantor Pusat</h1>
                        <p className='mt-5'>Kompleks Golden Plaza Blok C No. 1-3 Jl. R.S. Fatmawati No. 15 Jakarta 12420</p>
                    </div>
                </div>
            </div>
        </div>
    )
}