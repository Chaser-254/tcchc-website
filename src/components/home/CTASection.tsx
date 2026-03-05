import { Link } from 'react-router-dom';
import { MapPinIcon, HeartIcon, UsersIcon } from 'lucide-react';
export function CTASection() {
  return (
    <section className="py-24 bg-warm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visit */}
          <div className="bg-white p-10 rounded-xl border border-golden-ochre/20 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-earth-brown/10 rounded-full flex items-center justify-center mb-6">
              <MapPinIcon className="h-8 w-8 text-earth-brown" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Plan Your Visit
            </h3>
            <p className="text-deep-charcoal/70 mb-6 font-light leading-relaxed flex-grow">
              Located at Vindo Block 8 Plot No. 1403, near Taita Taveta University. 
              Visit our art gallery, workshop spaces, and indigenous Dawida homestead 
              in the heart of Taita, Kenya.
            </p>
            <Link
              to="/visit"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-forest-green rounded-md hover:bg-forest-green/90 transition-colors w-full">

              Visitor Information
            </Link>
          </div>

          {/* Donate */}
          <div className="bg-white p-10 rounded-xl border border-golden-ochre/20 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
              <HeartIcon className="h-8 w-8 text-terracotta" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Support Our Mission
            </h3>
            <p className="text-deep-charcoal/70 mb-6 font-light leading-relaxed flex-grow">
              Support our mission to preserve Dawida tangible and intangible cultural heritage 
              and create sustainable livelihoods for craft communities and Mwazindika spiritual dance artist groups.
            </p>
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-terracotta rounded-md hover:bg-terracotta/90 transition-colors w-full">

              Make a Donation
            </Link>
          </div>

          {/* Residency */}
          <div className="bg-white p-10 rounded-xl border border-golden-ochre/20 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-golden-ochre/10 rounded-full flex items-center justify-center mb-6">
              <UsersIcon className="h-8 w-8 text-golden-ochre" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Join the Residency
            </h3>
            <p className="text-deep-charcoal/70 mb-6 font-light leading-relaxed flex-grow">
              Join our artist residency program for local and international artists 
              to engage with traditional Dawida crafts and contemporary design.
            </p>
            <Link
              to="/residency"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-earth-brown border-2 border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors w-full">

              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>);

}