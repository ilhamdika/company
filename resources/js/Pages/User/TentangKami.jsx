import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head } from "@inertiajs/react";
import TextWithBreak from "@/Components/TextWithBreak";

export default function TentangKami({tentang, struktur_organisasi}) {
    // console.log(tentang)
    return (
        <LayoutPage>
            <Head title="Tentang Kami" />
            <div className="mobile:pt-36">
                <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Tentang Kami</h1>
                
                
                <div className="mt-10">
                    <h1 className="font-semibold text-3xl dark:text-white">Tentang Perushaan</h1>
                    <TextWithBreak
                        text={tentang.tentang_kami}
                        className="text-lg mt-5 dark:text-white"
                    />

                <div className="flex justify-center items-center mt-5">
                    <img className="max-w-full max-h-full" src={`/storage/${tentang.image}`}/>
                </div>
                    <h1 className="font-semibold text-3xl dark:text-white">Perusahaan Saat Ini</h1>
                    <TextWithBreak
                        text={tentang.perusahaan_saat_ini}
                        className="text-lg mt-5 dark:text-white"
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

                </div>
            </div>
        </LayoutPage>
    );
}