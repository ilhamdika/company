import TextWithBreak from "@/Components/TextWithBreak";
import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head } from "@inertiajs/react";

export default function BeritaDetail ({berita}){
    const renderTextWithLineBreaks = () => {
        const lines = text.split('\n');
    
        return lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== lines.length - 1 && <br />} {/* Tambahkan <br> kecuali pada baris terakhir */}
          </React.Fragment>
        ));
      };
    // console.log(berita)
    return(
        <LayoutPage>
            <Head title={berita.title} />
            <div className="flex flex-col items-center justify-center">
                <img src={`/storage/${berita.image}`} className="w-96 h-96" />
                <h1 className="text-3xl font-semibold mt-5 dark:text-white">{berita.title}</h1>
                <p>{berita.date}</p>
                <div className="mx-10 mobile:mx-1">
                    <TextWithBreak 
                    text={berita.content}
                    className={"text-lg mt-5 dark:text-white"}
                    />
                </div>
            </div>
        </LayoutPage>
    )
}