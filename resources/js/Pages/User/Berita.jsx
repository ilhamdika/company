import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import Card from "@/Components/Card";
import { Head } from "@inertiajs/react";
import { format } from "date-fns";
import { Link } from "@inertiajs/react";

export default function Berita({beritas, firstPageUrl, lastPageUrl}) {
   
    return (
        <LayoutPage>
            <Head title="Berita" />
            <div className="mobile:pt-20">
                <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Berita</h1>
                <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10">

                    {beritas.data.map((berita)=> (
                        <Card
                        key={berita.id}
                        thumbnail={`/storage/${berita.image}`}
                        title={berita.title.split(' ').slice(0, 5).join(' ')}
                        date={format(new Date(berita.date), 'dd MMMM yyyy')} // Sesuaikan format sesuai kebutuhan
                        description={berita.content.split(' ').slice(0, 10).join(' ')}
                        href={route('user.berita_detail', berita.slug)}
                        />
                    ))}
                </div>
                <div className="pagination-links flex justify-end mt-4 space-x-1 text-sm">
                    <Link
                        href={firstPageUrl}
                        className="px-2 py-1 rounded bg-white hover:bg-gray-200"
                    >
                        First
                    </Link>
                    {beritas.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`px-2 py-1 ${link.active ? 'bg-emerald-300 text-white border-emerald-500 rounded-xl' : 'bg-white border-gray-300 hover:bg-gray-200'}`}
                        >
                            {link.label === '&laquo; Previous' ? '<' : link.label === 'Next &raquo;' ? '>' : link.label}
                        </Link>
                    ))}
                    <Link
                        href={lastPageUrl}
                        className="px-2 py-1 rounded bg-white border-gray-300 hover:bg-gray-200"
                    >
                        Last
                    </Link>
                </div>
            </div>
        </LayoutPage>
    );
}