// components/NavLinks.js
import Link from 'next/link'

const NavLinks = () => {
  return (
    <>
      <Link className="text-bold16 text-text-dark" href="/about-us">درباره تکنوگلد</Link>
      <Link className="text-bold16 text-text-dark" href="/buy-help">چطور طلا بخرم؟</Link>
      <Link className="text-bold16 text-text-dark" href="/licenses">مجوزها</Link>
      <Link className="text-bold16 text-text-dark" href="/how-to-trust">چطور اعتماد کنم؟</Link>
      <Link className="text-bold16 text-text-dark" href="https://blog.technogold.gold/">مجله تکنوگلد</Link>
    </>
  )
}

export default NavLinks
