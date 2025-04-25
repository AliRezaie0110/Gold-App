// components/AuthButtons.js
import { MdOutlineDownloading } from "react-icons/md";
import Link from 'next/link';

const AuthButtons = () => {
    return (
        <div className="flex items-center gap-4 p-4">

            <Link
                href="/ops"
                className="hidden md:flex w-32 h-12 items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
                ورود | ثبت‌نام
            </Link>
            <p className="text-black">Par-Gold</p>
            <Link
                href="/ops"
                className="w-40 h-12 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
                <MdOutlineDownloading className="text-xl" />
                دانلود اپلیکیشن
            </Link>

        </div>
    );
};

export default AuthButtons;
