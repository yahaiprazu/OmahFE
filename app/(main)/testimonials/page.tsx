"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      name: "John Doe",
      position: "Staff of OmahTI",
      photo: "/profile.jpg"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      name: "Jane Smith",
      position: "Leader of OmahTI",
      photo: "/profile.jpg"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      name: "Mike Johnson",
      position: "Cleaning Service of OmahTI",
      photo: "/profile.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#252525] font-sans">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          <div className="text-center mb-16">
            <h1 
              className="text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              <span className="text-white">What </span>
              <span 
                className="italic"
                style={{ 
                  fontFamily: 'Junicode, serif',
                  color: '#F76F53'
                }}
              >
                They
              </span>
              <span className="text-white"> Say About </span>
              <span style={{ fontFamily: 'var(--font-bricolage)' }}>
                <span className="text-white">Omah</span>
                <span className="text-[#F76F53]">FE</span>
              </span>
            </h1>
          </div>

          <div className="relative flex items-center gap-6">
            
            <button 
              onClick={prevTestimonial}
              className="bg-[#F76F53] hover:bg-[#e65a40] text-white w-12 h-12 rounded-lg transition-colors flex items-center justify-center shrink-0"
            >
              <Image 
                src="/icons/point.svg" 
                alt="Previous" 
                width={20} 
                height={20}
                className="rotate-180"
              />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl flex-1">
              
              <div className="bg-[#D1CFC0] p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6">
                    <Image
                      src={testimonials[currentTestimonial].photo}
                      alt={testimonials[currentTestimonial].name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  
                  <p 
                    className="text-2xl leading-relaxed mb-6"
                    style={{ fontFamily: 'Junicode, serif', color: '#252525' }}
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: 'var(--font-bricolage)', color: '#252525' }}
                    >
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p 
                      className="text-lg"
                      style={{ fontFamily: 'var(--font-bricolage)', color: '#4F4F51' }}
                    >
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-96 lg:h-auto">
                <Image
                  src="/blablabla.jpeg"
                  alt="Testimonial"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            <button 
              onClick={nextTestimonial}
              className="bg-[#F76F53] hover:bg-[#e65a40] text-white w-12 h-12 rounded-lg transition-colors flex items-center justify-center shrink-0"
            >
              <Image 
                src="/icons/point.svg" 
                alt="Next" 
                width={20} 
                height={20}
              />
            </button>

          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial ? 'bg-[#F76F53]' : 'bg-[#4F4F51]'
                }`}
              />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}