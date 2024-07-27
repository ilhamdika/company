import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head } from "@inertiajs/react";
import TextWithBreak from "@/Components/TextWithBreak";

export default function TentangKami({tentang, struktur_organisasi, dukungan_layanan}) {
    // console.log(tentang)
    return (
        <LayoutPage>
            <Head title="Tentang Kami" />
            <div className="mobile:pt-36 px-2">
                <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Tentang Kami</h1>
                
                
                <div className="mt-10">
                    <h1 className="font-semibold text-3xl dark:text-white" data-aos="fade-down-right">Tentang Perusahaan</h1>
                    <TextWithBreak
                        text={tentang.tentang_kami}
                        className="text-lg mt-5 dark:text-white bg-gray-100 dark:bg-slate-600 rounded-xl px-2"
                        data-aos="zoom-out-right"
                    />

                <div className="flex justify-center items-center mt-5">
                    <img className="max-w-full max-h-full" src={`/storage/${tentang.image}`}/>
                </div>
                    <h1 className="font-semibold text-3xl dark:text-white">Perusahaan Saat Ini</h1>
                    <TextWithBreak
                        text={tentang.perusahaan_saat_ini}
                        className="text-lg mt-5 dark:text-white bg-gray-100 dark:bg-slate-600 rounded-xl px-2"
                    />
                <div className="flex justify-center items-center mt-5">
                <table className="mt-3 w-full dark:text-white border border-gray-500">
						<thead>
							<tr className="border border-gray-500">
								<th className="border border-gray-500">No</th>
								<th className="border border-gray-500">Nama</th>
								<th className="border border-gray-500">Jabatan</th>
							</tr>
						</thead>
						<tbody>
                        {struktur_organisasi.map((struktur, i=1) => (
                            <tr key={struktur.id}>
                                <td className="border border-gray-500">{i + 1}</td>
                                <td className="border border-gray-500">{struktur.nama}</td>
                                <td className="border border-gray-500">{struktur.jabatan}</td>
                            </tr>
                            ))}
						</tbody>
					</table>
                </div>
                    <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 bg-gray-100 dark:bg-slate-600 rounded-xl">
                        <div className="justify-center pt-10 pb-10 px-1">
                            <h1 className="font-semibold text-3xl dark:text-white">Visi</h1>
                            <TextWithBreak
                                text={tentang.visi}
                                className="text-lg mt-5 dark:text-white"
                            />
                        </div>
                        <div className="justify-center pt-10 pb-10 px-1">
                            <h1 className="font-semibold text-3xl dark:text-white">Misi</h1>
                            <TextWithBreak
                                text={tentang.misi}
                                className="text-lg mt-5 dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="items-left justify bg-gray-100 dark:bg-slate-600 rounded-xl">
                        <h1 className="font-semibold text-xl dark:text-white mt-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Bentuk kerjasama dan keuntungan pengguna jasa</h1>
                        {dukungan_layanan.map((dukungan, i = 1) => (
                            <p className="mt-2 dark:text-white" key={dukungan.id}><span className="font-semibold">{i+1}. </span>{dukungan.title}</p>
                        ))}
                    </div>

                </div>
            </div>
        </LayoutPage>
    );
}