// components/Navbar.js
import Link from 'next/link'
import NavLinks from './NavLinks'
import AuthButtons from './AuthButtons'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className=" bg-white w-full  flex items-center  h-[88px]   sticky top-0 z-30">
            <nav className="flex  items-center justify-between w-full px-4">
                <div className="flex items-center justify-between gap-10">
                    <Link href="/">
                        <Image src="/icon.png" className='rounded-xl' width={50} height={50} alt='icon' />
                    </Link>
                    <NavLinks />
                </div>
                <AuthButtons />
            </nav>
        </div>
    )
}

export default Navbar
