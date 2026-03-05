import {
  MapPinIcon,
  ClockIcon,
  TicketIcon,
  PhoneIcon,
  MailIcon,
  CarIcon,
  BusIcon } from
'lucide-react';
export function VisitPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed">
            Experience the living heritage of the Taita people. We look forward
            to welcoming you to our exhibitions, workshops, and community
            spaces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Info */}
            <div className="space-y-12">
              {/* Hours & Admission */}
              <div className="bg-white p-8 rounded-xl border border-golden-ochre/20 shadow-sm">
                <h2 className="font-serif text-3xl font-bold text-earth-brown mb-6 flex items-center">
                  <ClockIcon className="mr-3 h-8 w-8 text-golden-ochre" />
                  Hours & Admission
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-earth-brown mb-2">
                      Opening Hours
                    </h3>
                    <ul className="space-y-2 text-deep-charcoal/80 font-light">
                      <li className="flex justify-between border-b border-golden-ochre/10 pb-2">
                        <span>Tuesday – Sunday</span>
                        <span className="font-medium">10:00 AM – 5:00 PM</span>
                      </li>
                      <li className="flex justify-between border-b border-golden-ochre/10 pb-2">
                        <span>Monday</span>
                        <span className="font-medium text-terracotta">
                          Closed
                        </span>
                      </li>
                      <li className="flex justify-between pt-2">
                        <span>Public Holidays</span>
                        <span className="font-medium">10:00 AM – 4:00 PM</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-earth-brown mb-2 flex items-center">
                      <TicketIcon className="mr-2 h-5 w-5 text-terracotta" />
                      Admission Fees
                    </h3>
                    <ul className="space-y-2 text-deep-charcoal/80 font-light">
                      <li className="flex justify-between border-b border-golden-ochre/10 pb-2">
                        <span>Adults (Citizens)</span>
                        <span className="font-medium">Ksh 500</span>
                      </li>
                      <li className="flex justify-between border-b border-golden-ochre/10 pb-2">
                        <span>Adults (Non-Residents)</span>
                        <span className="font-medium">Ksh 1,500</span>
                      </li>
                      <li className="flex justify-between border-b border-golden-ochre/10 pb-2">
                        <span>Students & Children</span>
                        <span className="font-medium">Ksh 200</span>
                      </li>
                      <li className="flex justify-between pt-2">
                        <span>TCCHC Members</span>
                        <span className="font-medium text-forest-green">
                          Free
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-deep-charcoal/60 mt-4 italic">
                      * Workshop fees are separate. Please see the Programs page
                      for details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Getting Here */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-earth-brown mb-6 flex items-center">
                  <MapPinIcon className="mr-3 h-8 w-8 text-golden-ochre" />
                  Getting Here
                </h2>
                <address className="not-italic text-deep-charcoal/80 font-light mb-6 bg-warm-cream p-6 rounded-xl border border-golden-ochre/20">
                  <p className="font-medium text-earth-brown mb-1">
                    Taita Craft & Cultural Heritage Centre (TCCHC)
                  </p>
                  <p>Vindo Block 8 Plot No. 1403</p>
                  <p>Near Taita Taveta University</p>
                  <p>Taita, Kenya</p>
                </address>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <CarIcon className="h-6 w-6 text-forest-green mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-earth-brown mb-1">
                        By Car
                      </h3>
                      <p className="text-deep-charcoal/70 font-light text-sm">
                        From Voi, take the Voi-Wundanyi Road (C104) for
                        approximately 40km to Wundanyi town, then continue towards
                        Taita Taveta University. TCCHC is located at Vindo Block 8 
                        Plot No. 1403, near the university main entrance. 
                        Free parking is available on site.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BusIcon className="h-6 w-6 text-forest-green mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-earth-brown mb-1">
                        By Public Transport
                      </h3>
                      <p className="text-deep-charcoal/70 font-light text-sm">
                        Matatus run regularly from Voi to Wundanyi. From the
                        Wundanyi bus stage, take a local taxi or boda-boda towards
                        Taita Taveta University and ask for Vindo Block 8. 
                        The Centre is approximately 15 minutes from the bus stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
                  Need Assistance?
                </h2>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="tel:+254708032388"
                    className="flex items-center text-forest-green hover:text-terracotta transition-colors">

                    <PhoneIcon className="h-5 w-5 mr-2" />
                    +254 708 032 388
                  </a>
                  <a
                    href="mailto:taitaculturalheritagecentre@gmail.com"
                    className="flex items-center text-forest-green hover:text-terracotta transition-colors">

                    <MailIcon className="h-5 w-5 mr-2" />
                    taitaculturalheritagecentre@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Map Placeholder */}
            <div className="h-full min-h-[500px] bg-gray-100 rounded-xl border border-golden-ochre/20 relative overflow-hidden flex items-center justify-center">
              {/* Map Pattern Background */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                  'radial-gradient(#6B4F2A 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}>
              </div>

              <div className="text-center relative z-10 p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-golden-ochre/30 max-w-sm">
                <MapPinIcon className="h-16 w-16 text-terracotta mx-auto mb-4 animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-earth-brown mb-2">
                  Interactive Map
                </h3>
                <p className="text-deep-charcoal/70 font-light text-sm mb-6">
                  Map integration placeholder. In a production environment, this
                  would display a Google Map or Mapbox instance centered on
                  Taita Taveta University area, Vindo Block 8.
                </p>
                <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-forest-green rounded-md hover:bg-forest-green/90 transition-colors w-full">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}