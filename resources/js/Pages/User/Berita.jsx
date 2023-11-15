import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import Card from "@/Components/Card";

export default function Berita() {
    return (
        <LayoutPage>
            <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Berita</h1>
             <div className="grid grid-cols-4 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 rounded-xl mobile:h-auto mt-10">
                {[1,2,3,4].map(i=> (
                <Card
                key={i}
                thumbnail={'https://i.pinimg.com/564x/bb/a6/67/bba667e0370042ca691fd5c08bfd14ca.jpg'}
                title={'Web Developer'}
                description={'Create a website for information, business etc., which can be accessed digitally'}
                href={'https://www.google.com'}
                />
                ))}
            </div>
        </LayoutPage>
    );
}