"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Features() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-[#252525] font-sans">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          <div className="text-center mb-16">
            <h1 
              className="text-5xl lg:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              <span className="text-[#F76F53]">Services </span>
              <span className="text-white">that We Serve</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            <div className="rounded-3xl overflow-hidden relative">
              <Image
                src="/blablabla.jpeg"
                alt="Service 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span 
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  Web Design
                </span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative">
              <Image
                src="/blablabla.jpeg"
                alt="Service 2"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span 
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  Web Design
                </span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden relative">
              <Image
                src="/blablabla.jpeg"
                alt="Service 3"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span 
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  Web Design
                </span>
              </div>
            </div>

          </div>

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="rounded-3xl overflow-hidden relative">
                <Image
                  src="/blablabla.jpeg"
                  alt="Service 4"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span 
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: 'var(--font-bricolage)' }}
                  >
                    Web Design
                  </span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden relative">
                <Image
                  src="/blablabla.jpeg"
                  alt="Service 5"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span 
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: 'var(--font-bricolage)' }}
                  >
                    Web Design
                  </span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden relative">
                <Image
                  src="/blablabla.jpeg"
                  alt="Service 6"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span 
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: 'var(--font-bricolage)' }}
                  >
                    Web Design
                  </span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden relative">
                <Image
                  src="/blablabla.jpeg"
                  alt="Service 7"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span 
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: 'var(--font-bricolage)' }}
                  >
                    Web Design
                  </span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden relative">
                <Image
                  src="/blablabla.jpeg"
                  alt="Service 8"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span 
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: 'var(--font-bricolage)' }}
                  >
                    Web Design
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <button 
              onClick={() => setShowMore(!showMore)}
              className="bg-[#F76F53] text-white px-8 py-3 rounded-lg hover:bg-[#e65a40] transition-colors flex items-center gap-3 mx-auto"
            >
              <span style={{ fontFamily: 'var(--font-bricolage)' }}>
                {showMore ? "Show Less" : "Show More"}
              </span>
              <Image 
                src="/icons/below.svg" 
                alt="Arrow" 
                width={16} 
                height={16}
                className={showMore ? "" : "rotate-180"}
              />
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}