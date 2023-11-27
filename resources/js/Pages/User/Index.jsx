import PrimaryButton from "@/Components/PrimaryButton";
import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import Card from "@/Components/Card";
import AOS from 'aos';

export default function Index({landing ,berita, artikel}) {
    // console.log(berita)
    // console.log(artikel, berita, landing)
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

    useEffect(() => {
        AOS.init();
      }, []);

    return <LayoutPage>
        <Head title="Home" />
        {
            loading ? <div className="flex justify-center items-center h-screen">
            <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
        </div> :

        <div className="mobile:pt-14">
            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 px-10 mobile:px-1">
                    <div className="flex items-center justify-center pt-10 pb-10">
                        <div className=" dark:text-white pt-10 pb-10 rounded-md">
                            <h1 className="font-semibold text-4xl" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >{landing.title_hero}</h1>
                            <p className="mt-10">{landing.title_hero_sub}</p>
                            <div className="pt-10" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                            <Link href={route('user.hubungi-kami')}>
                                <PrimaryButton className="bg-blue-700 w-40 justify-center h-10 rounded-2xl">Hubungi Kami</PrimaryButton>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 mobile:h-100 mobile:w-full'>
                        {/* <img src="/images/heroThumbnail.png" alt="Background" className="w-full h-full object-cover" /> */}

                            {/* <img src="/images/key.png" alt="Elemen Atas" className="w-32 h-32 animate-bounce"/> */}
                            <img src="/images/Security On.gif" alt="Elemen Atas" className="laptop:ml-14 w-auto h-auto"/>
                            {/* <img src="/images/key.png" alt="Elemen Atas" className="w-32 h-32 motion-safe:animate-spin float-right"/> */}
                        {/* <div className="pt-10 absolute top-0 left-20 w-full h-full flex items-center justify-center">
                        </div> */}
                    </div>
            </div>


            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 bg-gray-100 dark:bg-slate-600 rounded-xl">
                    <div className="flex items-center justify-center pt-10 pb-10 px-1">
                        <h1 className="dark:text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">{landing.motto_sub}</h1>
                    </div>
                    <div className=' pt-10 pb-10 px-1'>
                        <h1 className="font-semibold text-4xl dark:text-white" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">{landing.motto_title}</h1>
                    </div>
            </div>


            <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                {/* {[1,2,3,4].map(i=> (
                <Card
                key={i}
                thumbnail={'https://i.pinimg.com/564x/bb/a6/67/bba667e0370042ca691fd5c08bfd14ca.jpg'}
                title={'Web Developer'}
                description={'Create a website for information, business etc., which can be accessed digitally'}
                href={'https://www.google.com'}
                />
                ))} */}

                {artikel.map((artikel, i=1) => (
                    <Card
                    key={artikel.id}
                    thumbnail={`/storage/${artikel.image}`}
                    title={artikel.title.split(' ').slice(0, 5).join(' ')}
                    description={artikel.content.split(' ').slice(0, 10).join(' ')}
                    href={route('user.artikel_detail', artikel.slug)}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                    <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500" href={route('user.artikel')}>Lihat semua</Link>
            </div>


            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-10 bg-gray-100 dark:bg-slate-600 rounded-xl">
                    <div className="flex items-center justify-center">
                        <h1 className="font-semibold text-5xl dark:text-white" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{landing.branding_title}</h1>
                    </div>
                    <div className=' pt-10 pb-10 px-1'>
                        <h1 className="dark:text-white" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{landing.branding_sub}</h1>
                        <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-xl inline-flex items-center hover:border-b-2 hover:border-blue-500" href={route('user.tentang-kami')}>Lebih lanjut</Link>
                    </div>
            </div>

            <div className="mt-5">
                <h1 className="font-semibold text-3xl dark:text-white">Apa yang baru dari Dakara?</h1>
                <p className="font-light dark:text-white mt-3">Cari tahu lebih lanjut tentang aktivitas kami.</p>

                <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    {/* {[1,2,3,4].map(i=> (
                    <Card
                    key={i}
                    thumbnail={'https://i.pinimg.com/564x/bb/a6/67/bba667e0370042ca691fd5c08bfd14ca.jpg'}
                    title={'Web Developer'}
                    description={'Create a website for information, business etc., which can be accessed digitally'}
                    href={'https://www.google.com'}
                    />
                    ))} */}

                {berita.map((berita)=> (
                    <Card
                    key={berita.id}
                    thumbnail={`/storage/${berita.image}`}
                    title={berita.title.split(' ').slice(0, 5).join(' ')}
                    description={berita.content.split(' ').slice(0, 10).join(' ')}
                    href={route('user.berita_detail', berita.slug)}
                    />
                ))}
                </div>
                <div className="flex justify-center">
                    <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500" href={route('user.artikel')}>Lihat semua</Link>
                </div>
            </div>

        </div>

        
        }
            
        </LayoutPage>
    
}