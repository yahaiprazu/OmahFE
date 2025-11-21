"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#252525] font-sans">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          <div className="mb-8">
            <h1 
              className="text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              <span className="text-white">See our latest </span>
              <span 
                className="italic"
                style={{ 
                  fontFamily: 'Junicode, serif',
                  color: '#F76F53'
                }}
              >
                Portfolio
              </span>
            </h1>
          </div>

          <div className="flex gap-4 mb-16">
            <a 
              href="https://www.omahti.web.id/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#F76F53] text-white px-6 py-3 rounded-lg hover:bg-[#e65a40] transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              <span style={{ fontFamily: 'var(--font-bricolage)' }}>See Our Full Portfolio</span>
              <Image 
                src="/icons/point.svg" 
                alt="Arrow" 
                width={16} 
                height={16}
                className="rotate-315"
              />
            </a>

            <Link href="/contact">
              <button className="bg-white text-[#4F4F51] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 border border-gray-200">
                <span style={{ fontFamily: 'var(--font-bricolage)' }}>Contact Us</span>
                <Image 
                  src="/icons/phone.svg" 
                  alt="Phone" 
                  width={16} 
                  height={16}
                  style={{ filter: 'invert(30%) sepia(0%) saturate(1500%) hue-rotate(180deg) brightness(90%) contrast(90%)' }}
                />
              </button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#252525] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#252525] to-transparent z-10 pointer-events-none"></div>
            
            <div className="overflow-x-auto scrollbar-hide pb-8">
              <div className="space-y-6 min-w-max">
                
                <div className="flex gap-6">
                  {[...Array(6)].map((_, index) => (
                    <div 
                      key={index} 
                      className="shrink-0 w-80 h-72 rounded-3xl overflow-hidden relative group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      <Image
                        src="/blablabla.jpeg"
                        alt={`Portfolio ${index + 1}`}
                        width={320}
                        height={288}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-6 left-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span 
                          className="text-white text-xl font-bold drop-shadow-lg"
                          style={{ fontFamily: 'var(--font-bricolage)' }}
                        >
                          Lorem Ipsum
                        </span>
                        <div className="w-0 group-hover:w-12 h-0.5 bg-[#F76F53] mt-2 transition-all duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  {[...Array(7)].map((_, index) => (
                    <div 
                      key={index} 
                      className="shrink-0 w-80 h-72 rounded-3xl overflow-hidden relative group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      <Image
                        src="/blablabla.jpeg"
                        alt={`Portfolio ${index + 7}`}
                        width={320}
                        height={288}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-6 left-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span 
                          className="text-white text-xl font-bold drop-shadow-lg"
                          style={{ fontFamily: 'var(--font-bricolage)' }}
                        >
                          Lorem Ipsum
                        </span>
                        <div className="w-0 group-hover:w-12 h-0.5 bg-[#F76F53] mt-2 transition-all duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}