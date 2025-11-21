import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-white py-12 border-t border-[#4F4F51]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">

          <div className="flex-1">
            <div className="mb-4">
              <Image
                src="/omahfe.png"
                alt="OmahFE Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-[#BABABA] max-w-md mb-6">
              Gedung Fakultas MIPA UGM Sekip Utara, Bulaksumur, Sinduadi, Mlati, Sleman, Di Yogyakarta
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#BABABA]">Connect with Us</h3>
              <div className="flex space-x-4">

                <a href="#" className="text-[#BABABA] hover:text-[#F76F53] transition-colors">
                  <Image 
                    src="/icons/instagram.svg" 
                    alt="Instagram" 
                    width={24} 
                    height={24}
                  />
                </a>

                <a href="#" className="text-[#BABABA] hover:text-white transition-colors">
                  <Image 
                    src="/icons/facebook.svg" 
                    alt="Facebook" 
                    width={24} 
                    height={24}
                  />
                </a>

                <a href="#" className="text-[#BABABA] hover:text-white transition-colors">
                  <Image 
                    src="/icons/twitter.svg" 
                    alt="X" 
                    width={24} 
                    height={24}
                  />
                </a>

                <a href="#" className="text-[#BABABA] hover:text-white transition-colors">
                  <Image 
                    src="/icons/linkedin.svg" 
                    alt="LinkedIn" 
                    width={24} 
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-end mr-32">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#BABABA]">Page</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-[#BABABA] hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[#BABABA] hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-[#BABABA] hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-[#BABABA] hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#BABABA]">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-[#BABABA] hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-[#4F4F51] my-8"></div>

        <div className="text-left">
          <p className="text-[#BABABA]">© OmahFE 2025</p>
        </div>

      </div>
    </footer>
  )
}