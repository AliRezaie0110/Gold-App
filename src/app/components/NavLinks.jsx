// components/NavLinks.js
import Link from 'next/link'

const NavLinks = () => {
  return (
    <div className='hidden md:flex gap-4'>
      <Link className="text-bold16 text-black" href="/about-us">درباره پرگلد</Link>
      <Link className="text-bold16 text-black" href="/buy-help">چطور طلا بخرم؟</Link>
      <Link className="text-bold16 text-black" href="/licenses">مجوزها</Link>
      <Link className="text-bold16 text-black" href="/how-to-trust">چطور اعتماد کنم؟</Link>
      <Link className="text-bold16 text-black" href="/">مجله پرگلد</Link>
    </div >
  )
}

export default NavLinks
