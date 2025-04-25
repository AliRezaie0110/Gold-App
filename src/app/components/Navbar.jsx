// components/Navbar.js
import Link from 'next/link'
import NavLinks from './NavLinks'
import AuthButtons from './AuthButtons'

const Navbar = () => {
  return (
    <div className="hidden  sm:block bg-background-light shadow-[0_10px_10px_0px_#0000000D] sticky top-0 z-30">
      <nav className="2xl:w-[1436px] mx-[50px] 2xl:mx-auto flex justify-between p-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <svg className="w-[143px] h-[50px] ml-10 text-secondary-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 51" fill="none">
              {/* محتویات لوگو */}
            </svg>
          </Link>
          <NavLinks />
        </div>
        <AuthButtons />
      </nav>
    </div>
  )
}

export default Navbar
