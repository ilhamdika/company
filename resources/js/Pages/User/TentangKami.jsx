import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import { Head } from "@inertiajs/react";

export default function TentangKami() {
    return (
        <LayoutPage>
            <Head title="Tentang Kami" />
            <div className="mobile:pt-36">
                <h1 className="font-semibold text-4xl flex justify-center items-center dark:text-white">Tentang Kami</h1>
                
                <div className="flex justify-center items-center mt-5">
                    <img className="max-w-full max-h-full" src="https://i.pinimg.com/564x/c4/10/e6/c410e60ef9a8ced857f0a4d528735fe7.jpg"/>
                </div>
                <div className="mt-10">
                    <h1 className="font-semibold text-3xl dark:text-white">Tentang Perushaan</h1>
                    <p className="mt-5 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod magni. Temporibus perspiciatis distinctio laudantium odit facere eum odio, aliquam harum corporis possimus fugiat, hic omnis officia. Et, velit nihil Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptas quaerat earum officiis optio distinctio laudantium. Incidunt, aliquam facilis sit odit sed maxime quod minus ducimus fugit aliquid id nobis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sunt, delectus sit maiores facere cumque quisquam temporibus optio laudantium sed nostrum voluptates dolores nobis corporis! Sed eos minus aliquid cumque.
                    </p>

                    <div className="flex justify-center items-center mt-5">
                        <img className="max-w-full max-h-full" src="https://i.pinimg.com/564x/c4/10/e6/c410e60ef9a8ced857f0a4d528735fe7.jpg"/>
                    </div>
                    <h1 className="font-semibold text-3xl dark:text-white">Perusahaan Saat Ini</h1>
                    <p className="mt-5 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod magni. Temporibus perspiciatis distinctio laudantium odit facere eum odio, aliquam harum corporis possimus fugiat, hic omnis officia. Et, velit nihil Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptas quaerat earum officiis optio distinctio laudantium. Incidunt, aliquam facilis sit odit sed maxime quod minus ducimus fugit aliquid id nobis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sunt, delectus sit maiores facere cumque quisquam temporibus optio laudantium sed nostrum voluptates dolores nobis corporis! Sed eos minus aliquid cumque.
                    </p>

                    <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3 bg-gray-100 dark:bg-slate-600 rounded-xl">
                        <div className="justify-center pt-10 pb-10 px-1">
                            <h1 className="font-semibold text-3xl dark:text-white">Visi</h1>
                            <p className="mt-5 dark:text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod magni. Temporibus perspiciatis distinctio laudantium odit facere eum odio, aliquam harum corporis possimus fugiat, hic omnis officia. Et, velit nihil Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptas quaerat earum officiis optio distinctio laudantium. Incidunt, aliquam facilis sit odit sed maxime quod minus ducimus fugit aliquid id nobis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sunt, delectus sit maiores facere cumque quisquam temporibus optio laudantium sed nostrum voluptates dolores nobis corporis! Sed eos minus aliquid cumque.
                            </p>
                        </div>
                        <div className="justify-center pt-10 pb-10 px-1">
                            <h1 className="font-semibold text-3xl dark:text-white">Misi</h1>
                            <p className="mt-5 dark:text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod magni. Temporibus perspiciatis distinctio laudantium odit facere eum odio, aliquam harum corporis possimus fugiat, hic omnis officia. Et, velit nihil Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, voluptas quaerat earum officiis optio distinctio laudantium. Incidunt, aliquam facilis sit odit sed maxime quod minus ducimus fugit aliquid id nobis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sunt, delectus sit maiores facere cumque quisquam temporibus optio laudantium sed nostrum voluptates dolores nobis corporis! Sed eos minus aliquid cumque.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </LayoutPage>
    );
}