import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col laptop:justify-center items-center pt-6 laptop:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full laptop:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden laptop:rounded-lg">
                {children}
            </div>
        </div>
    );
}
