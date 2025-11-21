"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#252525] font-sans">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/2">
              <h1 
                className="text-5xl lg:text-6xl mb-8"
                style={{ 
                  fontFamily: 'var(--font-bricolage)',
                  color: '#FFFFFF'
                }}
              >
                Contact Us
              </h1>
            </div>

            <div className="lg:w-1/2">
              <form className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="firstName" 
                      className="block text-[#BABABA] mb-2"
                      style={{ fontFamily: 'var(--font-bricolage)' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-transparent border border-[#4F4F51] rounded-lg text-white placeholder-[#BABABA] focus:outline-none focus:border-[#F76F53] transition-colors"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="lastName" 
                      className="block text-[#BABABA] mb-2"
                      style={{ fontFamily: 'var(--font-bricolage)' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-transparent border border-[#4F4F51] rounded-lg text-white placeholder-[#BABABA] focus:outline-none focus:border-[#F76F53] transition-colors"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-[#BABABA] mb-2"
                    style={{ fontFamily: 'var(--font-bricolage)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-transparent border border-[#4F4F51] rounded-lg text-white placeholder-[#BABABA] focus:outline-none focus:border-[#F76F53] transition-colors"
                    placeholder="enter@email.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-[#BABABA] mb-2"
                    style={{ fontFamily: 'var(--font-bricolage)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-[#4F4F51] rounded-lg text-white placeholder-[#BABABA] focus:outline-none focus:border-[#F76F53] transition-colors resize-none"
                    placeholder="Message"
                  />
                </div>

                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="bg-[#F76F53] text-white px-8 py-3 rounded-lg hover:bg-[#e65a40] transition-colors flex items-center gap-3"
                  >
                    <span style={{ fontFamily: 'var(--font-bricolage)' }}>Send</span>
                    <Image 
                      src="/icons/send.svg" 
                      alt="Send" 
                      width={16} 
                      height={16}
                    />
                  </button>
                </div>

              </form>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}