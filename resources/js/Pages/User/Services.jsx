import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import Card from "@/Components/Card";
import { Head } from "@inertiajs/react";

export default function Services({services}) {
    console.log(services)
    return (
        <LayoutPage>
            <Head title="Services" />
            <div className="mobile:pt-20">
                <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Services</h1>
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

                    {services.map((service)=> (
                        <Card
                        key={service.id}
                        thumbnail={`/storage/${service.image}`}
                        title={service.title.split(' ').slice(0, 5).join(' ')}
                        href={route('user.services-detail', service.id)}
                        />
                    ))}
                </div>
            </div>
        </LayoutPage>
    );
}