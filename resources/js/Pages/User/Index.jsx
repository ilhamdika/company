import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Index() {
    return (
        <div>
            <h1>Halaman landingpage belum dibuat</h1>
            <h1>silahkan login dulu</h1>
            <Link href={route('login')}>
                <PrimaryButton>
                    Login
                </PrimaryButton>
            </Link>
        </div>
    )
}