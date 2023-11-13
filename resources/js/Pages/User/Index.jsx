import PrimaryButton from "@/Components/PrimaryButton";
import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import styles from '../../../css/style.css'
import Card from "@/Components/Card";

export default function Index() {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    const bgHero = {
        backgroundImage: 'url("/images/security 1.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return <LayoutPage>
        {
            loading ? <div className="flex justify-center items-center h-screen">
            <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
        </div> :

        <div className="mobile:pt-14">
            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 px-10 mobile:px-1">
                    <div className="flex items-center justify-center pt-10 pb-10">
                        <div className=" dark:text-white pt-10 pb-10 rounded-md">
                            <h1 className="font-semibold text-4xl">Layanan satpam kami tidak hanya melibatkan pengawasan, tetapi juga pencegahan dan respons cepat."</h1>
                            <p className="mt-10">Jaga Properti Anda dengan Layanan Satpam Terbaik.</p>
                            <div className="pt-10">
                                <PrimaryButton className="bg-blue-700 w-40 justify-center h-10 rounded-2xl">Hubungi Kami</PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 mob' style={bgHero}>
                        {/* <img src="/images/heroThumbnail.png" alt="Background" className="w-full h-full object-cover" /> */}

                            <img src="/images/key.png" alt="Elemen Atas" className="w-32 h-32 animate-bounce"/>
                        {/* <div className="pt-10 absolute top-0 left-20 w-full h-full flex items-center justify-center">
                        </div> */}
                    </div>
            </div>


            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 bg-gray-100 dark:bg-slate-600 rounded-xl">
                    <div className="flex items-center justify-center pt-10 pb-10 px-1">
                        <h1 className="dark:text-white">Solusi kebutuhan keamanan Anda bukan hanya sekedar perlindungan fisik. Kami melindungi Anda lebih jauh dengan framework terintegrasi yang terdiri dari Plan-Prevent-Protect, solusi komprehensif untuk melindungi aset berharga Anda dan mencegah kerugian.</h1>
                    </div>
                    <div className=' pt-10 pb-10 px-1'>
                        <h1 className="font-semibold text-4xl dark:text-white">Kami memastikan keamanan Anda lebih dari sekedar perlindungan.</h1>
                    </div>
            </div>


            <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10">
                {[1,2,3,4].map(i=> (
                <Card
                key={i}
                thumbnail={'https://i.pinimg.com/564x/bb/a6/67/bba667e0370042ca691fd5c08bfd14ca.jpg'}
                title={'Web Developer'}
                description={'Create a website for information, business etc., which can be accessed digitally'}
                href={'https://www.google.com'}
                />
                ))}
            </div>
            <div className="flex justify-center">
                    <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500">Lihat semua</Link>
            </div>


            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-10 bg-gray-100 dark:bg-slate-600 rounded-xl">
                    <div className="flex items-center justify-center">
                        <h1 className="font-semibold text-5xl dark:text-white">25+ tahun menjaga aset Anda di berbagai penjuru negeri.</h1>
                    </div>
                    <div className=' pt-10 pb-10 px-1'>
                        <h1 className="dark:text-white">Nawakara didirikan oleh sekelompok lulusan angkatan ke-9 Akademi Kepolisian Indonesia di tahun 1996. Dengan 25+ tahun pengalaman, Nawakara telah dikenal dalam skala global dengan cabang di berbagai wilayah Indonesia.</h1>
                        <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500">Lebih lanjut</Link>
                    </div>
            </div>

            <div className="mt-5">
                <h1 className="font-semibold text-3xl dark:text-white">Apa yang baru dari Nawakara?</h1>
                <p className="font-light dark:text-white mt-3">Cari tahu lebih lanjut tentang aktivitas kami.</p>

                <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10">
                    {[1,2,3,4].map(i=> (
                    <Card
                    key={i}
                    thumbnail={'https://i.pinimg.com/564x/bb/a6/67/bba667e0370042ca691fd5c08bfd14ca.jpg'}
                    title={'Web Developer'}
                    description={'Create a website for information, business etc., which can be accessed digitally'}
                    href={'https://www.google.com'}
                    />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500">Lihat semua</Link>
                </div>
            </div>

        </div>

        
        }
            
        </LayoutPage>
    
}