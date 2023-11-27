import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Karir({rekruitmens, administrasis, mental_ideologis, kemampuan_fisiks, tugas_pokoks, fisik_mentals, akademiks, keterampilans}) {
    // console.log(rekruitmens)
    return (
        <LayoutPage>
            <Head title="Karir" />
            <div className="mobile:pt-14">
                <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 px-10 mobile:px-1">
                        <div className='mt-10 mobile:h-100 mobile:w-full'>
                            <img src="/images/join.png" alt="Elemen Atas" className="px-3 w-auto h-auto"/>
                        </div>
                        <div className="flex items-center justify-center pt-10 pb-10">
                            <div className=" dark:text-white rounded-md">
                                <h1 className="font-semibold text-xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >PT.Daya Wineka Sejahtera Nusantara melaksanakan requritmen terhadap para pemuda/pemudi adalah:</h1>
                                {rekruitmens.map((rekruitmen, i = 1) => (
                                <p className="mt-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" key={rekruitmen.id}><span className="font-semibold">{i+1}. </span>{rekruitmen.title}</p>
                                ))}
                                <div className="pt-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <Link href={route('user.hubungi-kami')}>
                                        <PrimaryButton className="bg-blue-700 w-40 justify-center h-10 rounded-2xl">Hubungi Kami</PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            
        <div className="items-left justify py-2 laptop:px-20">
            <h1 className="font-semibold text-xl dark:text-white mt-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Administrasi</h1>

            {administrasis.map((administrasi, i = 1) => (
            <p className="mt-1 dark:text-white" key={administrasi.id}><span className="font-semibold">{i+1}. </span> {administrasi.title}</p>
            ))}

            <h1 className="font-semibold text-xl dark:text-white mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Mental Ideologi</h1>

            {mental_ideologis.map((mental, i = 1) => (
            <p className="mt-1 dark:text-white" key={mental.id}><span className="font-semibold" >{i+1}. </span> {mental.title}</p>
            ))}

            <h1 className="font-semibold text-xl dark:text-white mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Kemampuan Fisik</h1>

            {kemampuan_fisiks.map((fisik, i = 1) => (
            <p className="mt-1 dark:text-white" key={fisik.id}><span className="font-bold">{i+1} .</span> {fisik.title}</p>
            ))}
        </div>
        <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 px-10 mobile:px-1">
                <div className="items-left justify mx-auto py-2">
                    <h1 className="font-semibold text-2xl dark:text-white mt-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Materi Dan Kemampuan Pengetahuan Tenaga Jasa Pengamanan</h1>
                    <h1 className="font-light text-xl dark:text-white mt-3">PT. Daya Wineka Sejahtera Nusantara telah mempersiapkan pemuda/pemudi yang di didik dan diberi kemampuan pengetahuan bidang satpam agar menjadi satuan pengaman yang terampil dan profesional dalam bidang tugasnya</h1>
                    <img src="/images/logo.png" alt="Elemen Atas" className="py-10 w-20"/>
                </div>
                <div className="items-left justify py-2">
                    <h1 className="font-semibold text-2xl dark:text-white mt-2">Fisik dan mental</h1>
                    {fisik_mentals.map((tugas, i = 1) => (
                        <p className="mt-2" key={tugas.id}><span className="font-semibold">{i+1}. </span>{tugas.title}</p>
                    ))}
                    <h1 className="font-semibold text-2xl dark:text-white mt-2">Akademik</h1>
                    {akademiks.map((tugas, i = 1) => (
                        <p className="mt-2" key={tugas.id}><span className="font-semibold">{i+1}. </span>{tugas.title}</p>
                    ))}
                    <h1 className="font-semibold text-2xl dark:text-white mt-2">Keterampilan</h1>
                    {keterampilans.map((tugas, i = 1) => (
                        <p className="mt-2" key={tugas.id}><span className="font-semibold">{i+1}. </span>{tugas.title}</p>
                    ))}
                </div>
            </div>
        <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 px-10 mobile:px-1">
                        <div className='mt-10 mobile:h-100 mobile:w-full'>
                            <div className=" dark:text-white rounded-md">
                                <h1 className="font-semibold text-xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Tugas Pokok Dan Jam Kerja Satuan Pengamanan</h1>
                                {tugas_pokoks.map((tugas, i = 1) => (
                                <p className="mt-2" key={tugas.id}><span className="font-semibold">{i+1}. </span>{tugas.title}</p>
                                ))}
                                <div className="pt-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <Link href={route('user.hubungi-kami')}>
                                        <PrimaryButton className="bg-blue-700 w-40 justify-center h-10 rounded-2xl">Tentang Kami</PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-10 pb-10">
                            <img src="/images/security.png" alt="Elemen Atas" className="px-3 w-auto h-auto"/>
                        </div>
                </div>
        </LayoutPage>
    )
}