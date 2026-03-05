import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon } from
'lucide-react';
export function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed">
            Whether you have a question about our programs, want to inquire
            about a piece in the gallery, or are interested in supporting our
            mission, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Form */}
            <div className="bg-white p-8 md:p-12 rounded-xl border border-golden-ochre/20 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-earth-brown mb-8">
                Send a Message
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-deep-charcoal mb-2">

                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-md border border-golden-ochre/30 focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-warm-cream/30"
                      required />

                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-deep-charcoal mb-2">

                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-md border border-golden-ochre/30 focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-warm-cream/30"
                      required />

                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-deep-charcoal mb-2">

                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-golden-ochre/30 focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-warm-cream/30"
                    required />

                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-deep-charcoal mb-2">

                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-md border border-golden-ochre/30 focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-warm-cream/30">

                    <option>General Inquiry</option>
                    <option>Program Booking</option>
                    <option>Gallery/Shop Inquiry</option>
                    <option>Residency Application</option>
                    <option>Support/Donation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-deep-charcoal mb-2">

                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-golden-ochre/30 focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-warm-cream/30 resize-none"
                    required>
                  </textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white bg-forest-green rounded-md hover:bg-forest-green/90 transition-colors shadow-sm">

                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Info */}
            <div className="space-y-12 flex flex-col justify-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-earth-brown mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-terracotta mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-earth-brown mb-1">
                        Address
                      </h3>
                      <address className="not-italic text-deep-charcoal/80 font-light">
                        <p>Taita Craft & Cultural Heritage Centre (TCCHC)</p>
                        <p>Vindo Block 8 Plot No. 1403</p>
                        <p>Near Taita Taveta University</p>
                        <p>Taita, Kenya</p>
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-terracotta mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-earth-brown mb-1">
                        Phone & WhatsApp
                      </h3>
                      <p className="text-deep-charcoal/80 font-light">
                        <a
                          href="tel:+254708032388"
                          className="hover:text-forest-green transition-colors">

                          +254 708 032 388
                        </a>
                      </p>
                      <p className="text-deep-charcoal/80 font-light mt-2">
                        <a
                          href="https://wa.me/254708032388"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-forest-green transition-colors">

                          WhatsApp: +254 708 032 388
                        </a>
                      </p>
                      <p className="text-sm text-deep-charcoal/60 mt-1">
                        Available Tue-Sun, 10am-5pm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MailIcon className="h-6 w-6 text-terracotta mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-earth-brown mb-1">
                        Email
                      </h3>
                      <p className="text-deep-charcoal/80 font-light">
                        <a
                          href="mailto:taitaculturalheritagecentre@gmail.com"
                          className="hover:text-forest-green transition-colors">

                          taitaculturalheritagecentre@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-deep-charcoal/60 mt-1">
                        We aim to respond within 48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-earth-brown mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-warm-cream rounded-full text-earth-brown hover:bg-forest-green hover:text-white transition-colors"
                    aria-label="Facebook">

                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-warm-cream rounded-full text-earth-brown hover:bg-forest-green hover:text-white transition-colors"
                    aria-label="Instagram">

                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-warm-cream rounded-full text-earth-brown hover:bg-forest-green hover:text-white transition-colors"
                    aria-label="Twitter">

                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-warm-cream rounded-full text-earth-brown hover:bg-forest-green hover:text-white transition-colors"
                    aria-label="YouTube">

                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}