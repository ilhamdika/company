import TextWithBreak from "@/Components/TextWithBreak";
import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head } from "@inertiajs/react";
import Card from "@/Components/Card";
import { format } from "date-fns";

export default function ArtikelDetail ({artikel, rekomens}){
    const renderTextWithLineBreaks = () => {
        const lines = text.split('\n');
    
        return lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== lines.length - 1 && <br />} {/* Tambahkan <br> kecuali pada baris terakhir */}
          </React.Fragment>
        ));
      };
    // console.log(artikel)
    return(
        <LayoutPage>
            <Head title={artikel.title} />
            <div className="mobile:pt-32">
              <div className="flex flex-col items-center justify-center">
                  <img src={`/storage/${artikel.image}`} className="w-auto h-auto laptop:px-4" />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold mt-5 dark:text-white mobile:mx-1 mobile:text-2xl mx-10">{artikel.title}</h1>
                  <p className="item-left justify-start mx-10 mt-3 font-semibold mobile:mx-1  text-yellow-600">
                    {format(new Date(artikel.date), 'dd MMMM yyyy')}
                  </p>
                  <div className="mx-10 mobile:mx-1">
                      <TextWithBreak 
                      text={artikel.content}
                      className={"text-lg mt-5 dark:text-white"}
                      />
                  </div>
              </div>
              <div className="mt-3">
                <h1 className="text-3xl font-semibold mt-5 dark:text-white mobile:mx-1 mobile:text-2xl mx-10">Mungkin Anda Suka</h1>
              </div>
              <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                {/* {rekomens.map((berita)=> (
                    <Card
                    key={berita.id}
                    thumbnail={`/storage/${berita.image}`}
                    title={berita.title.split(' ').slice(0, 5).join(' ')}
                    description={berita.content.split(' ').slice(0, 10).join(' ')}
                    href={route('user.berita_detail', berita.slug)}
                    />
                ))} */}

{rekomens.map((artikel, i=1) => (
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
    )
}