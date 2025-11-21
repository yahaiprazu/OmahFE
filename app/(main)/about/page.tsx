import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[#252525] font-sans">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] w-full relative">
        
        <div className="absolute -top-5 -right-5 z-0">
          <Image
            src="/Rectangle-16.png"
            alt="Decoration photo"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="absolute -bottom-6 -left-5 z-0">
          <Image
            src="/Rectangle-18.png"
            alt="Decoration photo"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center pt-32">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 
              className="text-4xl lg:text-6xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              <span className="text-white">Tentang </span>
              <span 
                className="italic"
                style={{ 
                  fontFamily: 'Junicode, serif',
                  color: '#F76F53'
                }}
              >
                Kami
              </span>
            </h1>

            <div 
              className="text-[#BABABA] text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12"
              style={{ fontFamily: 'Junicode, serif' }}
            >
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur quam orci. Donec cursus nibh vitae diam gravida mattis. Sed dignissim magna tortor, vitae varius libero consectetur viverra. Fusce posuere efficitur blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec bibendum efficitur ante, ac lacinia lectus egestas et. Donec aliquet ac lorem ac semper. Duis ultrices nibh ipsum, quis dapibus turpis consectetur sed. Suspendisse iaculis diam vel turpis volutpat, vel suscipit risus consectetur. Nam convallis lacinia feugiat. Pellentesque auctor eleifend orci sed molestie. Vestibulum fermentum erat nunc, non finibus orci commodo non. Praesent iaculis gravida elit eget laoreet. Nullam vel pulvinar dui.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-16 mb-12" style={{ fontFamily: 'var(--font-bricolage)' }}>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-[#F76F53] mb-2">2015</div>
                <div className="text-white text-lg">Berdiri Sejak</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-[#F76F53] mb-2">225</div>
                <div className="text-white text-lg">Total Project</div>
              </div>

            </div>

            <Link href="/features">
              <button className="bg-[#F76F53] text-white px-8 py-3 rounded-lg hover:bg-[#e65a40] transition-colors flex items-center gap-3 mx-auto">
                <span style={{ fontFamily: 'var(--font-bricolage)' }}>Selengkapnya</span>
                <Image 
                  src="/icons/point.svg" 
                  alt="Arrow" 
                  width={16} 
                  height={16}
                />
              </button>
            </Link>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}