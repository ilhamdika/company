import PrimaryButton from "@/Components/PrimaryButton";
import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import Card from "@/Components/Card";
import AOS from 'aos';
import { format } from "date-fns";

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

    const applyWaveBackground = (element) => {
        if (element) {
            const waveSVG = `
               <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 459L30 452C60 445 120 431 180 435C240 439 300 461 360 447.8C420 434.7 480 386.3 540 361.5C600 336.7 660 335.3 720 342C780 348.7 840 363.3 870 370.7L900 378L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z" fill="#4FACF7" stroke-linecap="round" stroke-linejoin="miter"></path></svg>`;
            const encodedSVG = encodeURIComponent(waveSVG).replace(/'/g, "%27").replace(/"/g, "%22");
            element.style.backgroundImage = `url("data:image/svg+xml,${encodedSVG}")`;
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundPosition = 'bottom';
            element.style.backgroundSize = 'cover';
        }
    };
    const applyWaveBackground2 = (element) => {
        if (element) {
            const waveSVG = `
               <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M212 0L222.3 20C232.7 40 253.3 80 247.2 120C241 160 208 200 227.7 240C247.3 280 319.7 320 356.8 360C394 400 396 440 386 480C376 520 354 560 343 580L332 600L0 600L0 580C0 560 0 520 0 480C0 440 0 400 0 360C0 320 0 280 0 240C0 200 0 160 0 120C0 80 0 40 0 20L0 0Z" fill="#4FACF7" stroke-linecap="round" stroke-linejoin="miter"></path></svg>`;
            const encodedSVG = encodeURIComponent(waveSVG).replace(/'/g, "%27").replace(/"/g, "%22");
            element.style.backgroundImage = `url("data:image/svg+xml,${encodedSVG}")`;
            element.style.backgroundRepeat = 'no-repeat';
            element.style.backgroundPosition = 'top';
            element.style.backgroundSize = 'cover';
        }
    };

    useEffect(() => {
        const element = document.getElementById('wave-bg-container');
        applyWaveBackground(element);
    }, []);
    useEffect(() => {
        const element = document.getElementById('wave-bg-container2');
        applyWaveBackground2(element);
    }, []);

    useEffect(() => {
        AOS.init();
      }, []);

    return <LayoutPage>
        <Head title="Home" />
       
            <div className="w-full">
                <div id="wave-bg-container" className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-10 mobile:mt-20">
                    <div className="px-10">
                        <div className="flex items-center justify-center">
                            <div className=" dark:text-white pt-10 pb-10 rounded-md">
                                <h1 className="font-semibold text-4xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >{landing.title_hero}</h1>
                                <p className="mt-10">{landing.title_hero_sub}</p>
                                <div className="pt-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <Link href={route('user.hubungi-kami')}>
                                    <PrimaryButton className="bg-blue-700 w-40 justify-center h-10 rounded-2xl">Hubungi Kami</PrimaryButton>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src='images/heroImg.png' alt="Elemen Atas" className="w-auto h-auto bottom"/>
                    </div>
                </div>

                <div id="wave-bg-container2" className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 dark:bg-slate-600 px-2">
                    <div className="py-2 px-10">
                        <div className="flex justify-center">
                            <img src='/images/heroThumbnail.png' alt="Elemen Atas" className="px-3 w-60 h-100"/>
                        </div>
                        <h1 className="dark:text-white">{landing.motto_sub}</h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <h1 className="font-light text-3xl dark:text-white border border-2 border-black">{landing.motto_title}</h1>
                    </div>
                </div>
                <div className="mobile:my-10">
                    <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 dekstop:grid-cols-4 gap-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    {artikel.map((artikel, i=1) => (
                        <Card
                        key={artikel.id}
                        thumbnail={`/storage/${artikel.image}`}
                        title={artikel.title.split(' ').slice(0, 5).join(' ')}
                        date={format(new Date(artikel.date), 'dd MMMM yyyy')}
                        description={artikel.content.split(' ').slice(0, 10).join(' ')}
                        href={route('user.artikel_detail', artikel.slug)}
                        />
                    ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500" href={route('user.artikel')}>Lihat semua</Link>
                </div>

                <div className="grid grid-cols-3 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 dark:bg-slate-600 rounded-xl px-2">
                    <div className="flex items-center justify-center py-10 mobile:py-1 px-1">
                        <img src="/images/indonesiaMap.png" alt="Elemen Atas" className="px-3 w-auto h-auto"/>
                    </div>
                    <div className="flex items-center justify-center py-10 mobile:py-1 px-1">
                        <h1 className="font-semibold text-2xl dark:text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">{landing.branding_title}</h1>
                    </div>
                    <div className=' py-10 mobile:py-1 px-1'>
                        <p className="dark:text-white" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">{landing.branding_sub}</p>
                        <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-xl inline-flex items-center hover:border-b-2 hover:border-blue-500 mobile:mb-2" href={route('user.tentang-kami')}>Lebih lanjut</Link>
                    </div>
                </div>

                <div className="mt-5 px-2">
                    <h1 className="font-semibold text-3xl dark:text-white">Apa yang baru dari Dakara?</h1>
                    <p className="font-light dark:text-white mt-3">Cari tahu lebih lanjut tentang aktivitas kami.</p>

                    <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 dekstop:grid-cols-4 gap-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    {berita.map((berita, i=1) => (
                        <Card
                        key={berita.id}
                        thumbnail={`/storage/${berita.image}`}
                        title={berita.title.split(' ').slice(0, 5).join(' ')}
                        date={format(new Date(berita.date), 'dd MMMM yyyy')}
                        description={berita.content.split(' ').slice(0, 10).join(' ')}
                        href={route('user.berita_detail', berita.slug)}
                        />
                    ))}
                    </div>
                    <div className="flex justify-center mb-10">
                        <Link className="bg-blue-600 mt-10 border-b w-40 justify-center h-10 rounded-3xl inline-flex items-center hover:border-b-2 hover:border-blue-500" href={route('user.berita')}>Lihat semua</Link>
                    </div>
                </div>
            </div>

            
            
        </LayoutPage>
    
}