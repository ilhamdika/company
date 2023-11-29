import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import Card from "@/Components/Card";
import { Head } from "@inertiajs/react";
import { format } from "date-fns";

export default function Berita({beritas}) {
    // console.log(beritas)

    // const fullText = beritas.title;

    // const words = fullText.split(' ');

    // // Menampilkan hanya sepuluh kata pertama
    // const displayedText = words.slice(0, 2).join(' ');
    return (
        <LayoutPage>
            <Head title="Berita" />
            <div className="mobile:pt-20">
                <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Berita</h1>
                <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10">
                    {/* {[1,2,3,4].map(i=> (
                    <Card
                    key={i}
                    thumbnail={'https://i.pinimg.com/564x/bb/a6/67/bba667e0370042ca691fd5c08bfd14ca.jpg'}
                    title={'Web Developer'}
                    description={'Create a website for information, business etc., which can be accessed digitally'}
                    href={'https://www.google.com'}
                    />
                    ))} */}

                    {beritas.map((berita)=> (
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
            </div>
        </LayoutPage>
    );
}