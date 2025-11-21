import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#252525] z-10 relative border-b border-[#4F4F51]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Kiri - Clickable ke Home */}
          <div className="shrink-0 ml-6">
            <Link href="/">
              <h1 className="text-3xl font-bold font-(family-name:--font-bricolage) cursor-pointer">
                <span className="text-white">Omah</span>
                <span className="text-[#F76F53]">FE</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links - Tengah */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-8" style={{ fontFamily: 'var(--font-bricolage)' }}>
              <Link href="/about" className="text-[#BABABA] hover:text-[#F76F53] transition-colors text-lg">
                About
              </Link>
              <Link href="/features" className="text-[#BABABA] hover:text-[#F76F53] transition-colors text-lg">
                Features
              </Link>
              <Link href="/portfolio" className="text-[#BABABA] hover:text-[#F76F53] transition-colors text-lg">
                Portfolio
              </Link>
              <Link href="/contact" className="text-[#BABABA] hover:text-[#F76F53] transition-colors text-lg">
                Contact
              </Link>
            </div>
          </div>

          {/* Auth Buttons - Kanan */}
          <div className="flex space-x-4 mr-6" style={{ fontFamily: 'var(--font-bricolage)' }}>
            <button className="px-6 py-2 border border-[#D1CFC0] text-[#D1CFC0] rounded-lg hover:bg-[#D1CFC0] hover:text-[#252525] transition-colors text-lg">
              Sign In
            </button>
            <button className="px-6 py-2 bg-[#F76F53] text-[#EDEDED] rounded-lg hover:bg-[#e65a40] transition-colors text-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}