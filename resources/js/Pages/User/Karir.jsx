import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Karir({rekruitmens, administrasis, mental_ideologis, kemampuan_fisiks, tugas_pokoks, fisik_mentals, akademiks, keterampilans, bentuk_kerjasamas}) {
    // console.log(rekruitmens)
    return (
        <LayoutPage>
            <Head title="Karir" />
            <div className="w-full desktop:px-10 laptop:px-10">
                <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-10 mobile:mt-20">
                    <div className="">
                        <img src="/images/join.png" alt="Elemen Atas" className="px-3 w-auto h-auto"/>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-center pt-10 pb-10">
                            <div className=" dark:text-white pt-10 pb-10 rounded-md">
                                <h1 className="font-semibold text-xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >PT.Daya Wineka Sejahtera Nusantara melaksanakan requritmen terhadap para pemuda/pemudi adalah:</h1>
                                {rekruitmens.map((rekruitmen, i = 1) => (
                                <p className="mt-2 pl-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" key={rekruitmen.id}><span className="font-semibold">{i+1}. </span>{rekruitmen.title}</p>
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
                    <p className="mt-1 dark:text-white pl-4" data-aos="fade-right" key={administrasi.id}><span className="font-semibold">{i+1}. </span> {administrasi.title}</p>
                    ))}

                    <h1 className="font-semibold text-xl dark:text-white mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Mental Ideologi</h1>

                    {mental_ideologis.map((mental, i = 1) => (
                    <p className="mt-1 dark:text-white pl-4" data-aos="fade-right" key={mental.id}><span className="font-semibold" >{i+1}. </span> {mental.title}</p>
                    ))}

                    <h1 className="font-semibold text-xl dark:text-white mt-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Kemampuan Fisik</h1>

                    {kemampuan_fisiks.map((fisik, i = 1) => (
                    <p className="mt-1 dark:text-white pl-4" data-aos="fade-right" key={fisik.id}><span className="font-bold">{i+1} .</span> {fisik.title}</p>
                    ))}
                </div>
                <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-10 mobile:mt-20">
                    <div className="">
                        <img src='/images/karir2.png' alt="Elemen Atas" className="px-3 w-auto h-auto"/>
                        <h1 className="font-semibold text-xl dark:text-white mt-2">Materi Dan Kemampuan Pengetahuan Tenaga Jasa Pengamanan</h1>
                            <p className="pt-5 dark:text-white"  >PT. Daya Wineka Sejahtera Nusantara telah mempersiapkan pemuda/pemudi yang di didik dan diberi kemampuan pengetahuan bidang satpam agar menjadi satuan pengamanan yang terampil dan profesional dalam tugasnya</p>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-center pt-10 pb-10">
                            <div className=" dark:text-white pt-10 pb-10 rounded-md">
                                <h1 className="font-semibold text-2xl dark:text-white mt-2">Fisik dan mental</h1>
                                {fisik_mentals.map((fisik_men, i = 1) => (
                                <p className="mt-2 pl-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" key={fisik_men.id}><span className="font-semibold">{i+1}. </span>{fisik_men.title}</p>
                                ))}
                                <h1 className="font-semibold text-2xl dark:text-white mt-2">Akademik</h1>
                                {akademiks.map((akademik, i = 1) => (
                                <p className="mt-2 pl-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" key={akademik.id}><span className="font-semibold">{i+1}. </span>{akademik.title}</p>
                                ))}
                                <h1 className="font-semibold text-2xl dark:text-white mt-2">Keterampilan</h1>
                                {keterampilans.map((keterampilan, i = 1) => (
                                <p className="mt-2 pl-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" key={keterampilan.id}><span className="font-semibold">{i+1}. </span>{keterampilan.title}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 px-10 mobile:px-1">
                        <div className='mt-10 mobile:h-100 mobile:w-full'>
                            <div className=" dark:text-white rounded-md">
                                <h1 className="font-semibold text-xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Tugas Pokok Dan Jam Kerja Satuan Pengamanan</h1>
                                {tugas_pokoks.map((tugas, i = 1) => (
                                <p className="mt-2 dark:text-white pl-4" key={tugas.id} data-aos="fade-up-right"><span className="font-semibold">{i+1}. </span>{tugas.title}</p>
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

                <div className="items-left justify laptop:px-10 mb-10">
                    <h1 className="font-semibold text-xl dark:text-white mt-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Bentuk kerjasama dan keuntungan pengguna jasa</h1>
                    {bentuk_kerjasamas.map((tugas, i = 1) => (
                        <p className="mt-2 dark:text-white pl-4" data-aos="fade-up-right" key={tugas.id}><span className="font-semibold">{i+1}. </span>{tugas.title}</p>
                    ))}
                </div>
            </div>
        </LayoutPage>
    )
}