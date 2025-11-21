import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252525] font-sans">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] w-full relative">

        <div className="scale-x-[-1] absolute -top-5 -left-5 z-0">
          <Image
            src="/Rectangle-16.png"
            alt="Mirrored photo"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between pt-32">
          
          <div className="text-left">
            
            <div className="inline-flex items-center gap-2 border border-[#BABABA] rounded-full px-6 py-1 mb-6">
              <Image
                src="/icons/laptop.svg"
                alt="Laptop"
                width={16}
                height={16}
              />
              <span 
                className="text-[#BABABA] text-sm"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                Open for project
              </span>
            </div>

            <h2 
              className="text-2xl lg:text-3xl font-bold mb-2"
              style={{ 
                fontFamily: 'var(--font-bricolage)',
                color: '#EDEDED'
              }}
            >
              Get Insights on
            </h2>
            
            <h1 
              className="text-4xl lg:text-9xl font-bold leading-none"
              style={{ 
                fontFamily: 'var(--font-bricolage)'
              }}
            >
              <span 
                className="bg-linear-to-br from-white to-[#4F4F51] bg-clip-text text-transparent"
                >
                Omah
              </span>
              <span className="text-[#F76F53]">FE</span>
            </h1>

            <p 
              className="text-[#BABABA] text-xl lg:text-2xl max-w-md mt-4 mb-8"
              style={{ fontFamily: 'Junicode, serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex space-x-4" style={{ fontFamily: 'var(--font-bricolage)' }}>
              <Link href="/about">
                <button className="px-8 py-3 bg-[#F76F53] text-[#EDEDED] rounded-lg hover:bg-[#e65a40] transition-colors text-lg font-medium">
                  Get Started
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-3 border border-[#D1CFC0] text-[#D1CFC0] rounded-lg hover:bg-[#D1CFC0] hover:text-[#252525] transition-colors text-lg font-medium">
                  More Analytics
                </button>
              </Link>
            </div>
          </div>

          <div className="w-96 h-96 rounded-3xl overflow-hidden ml-8">
            <Image
              src="/blablabla.jpeg"
              alt="Project Photo"
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}