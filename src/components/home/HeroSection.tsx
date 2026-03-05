import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import img1 from '../../assets/images/img1.jpeg';
export function HeroSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={img1} 
          alt="TCCHC Heritage Centre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-cream/95 via-warm-cream/90 to-warm-cream/95" />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-golden-ochre blur-3xl mix-blend-multiply" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-terracotta blur-3xl mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-earth-brown mb-6 leading-tight tracking-tight">
            Taita Craft & Cultural<br className="hidden sm:block" />
            <span className="text-terracotta italic">Heritage Centre</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-deep-charcoal/80 mb-4 max-w-3xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            <span className="font-semibold text-forest-green">TCCHC</span> - A sustainable, eco-friendly space dedicated to preserving Dawida heritage, fostering artisan-consumer connections, and promoting rural-urban links.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-deep-charcoal/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed italic px-4 sm:px-0">
            Located at Vindo Block 8 Plot No. 1403 near Taita Taveta University, 
            we blend traditional handicrafts with contemporary design through workshops, 
            residencies, and cultural festivals in the heart of Taita, Kenya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/visit"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-forest-green rounded-md hover:bg-forest-green/90 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto group">

              Plan Your Visit
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery-shop"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-earth-brown border-2 border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-all duration-300 w-full sm:w-auto">

              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>);

}