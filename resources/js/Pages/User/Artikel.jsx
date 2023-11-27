import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import Card from "@/Components/Card";
import { Head } from "@inertiajs/react";

export default function Artikel({artikels}) {
    // console.log(artikels)
    return (
        <LayoutPage>
            <Head title="Artikel" />
            <div className="mobile:pt-20">
                <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Artikel</h1>
                <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10">
                    {/* {[1,2,3,4].map(i=> (
                    <Card
                    key={i}
                    thumbnail={'https://i.pinimg.com/564x/00/51/1c/00511c8fea61da8fd7951b5ec4f76d97.jpg'}
                    title={'Web Developer'}
                    description={'Create a website for information, business etc., which can be accessed digitally'}
                    href={'https://www.google.com'}
                    />
                    ))} */}

                    {artikels.map((artikel, i=1) => (
                        <Card
                        key={artikel.id}
                        thumbnail={`/storage/${artikel.image}`}
                        title={artikel.title.split(' ').slice(0, 5).join(' ')}
                        description={artikel.content.split(' ').slice(0, 10).join(' ')}
                        href={route('user.artikel_detail', artikel.slug)}
                        />
                    ))}
                </div>
            </div>
        </LayoutPage>
    );
}