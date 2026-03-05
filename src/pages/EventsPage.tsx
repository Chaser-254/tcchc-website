import React from 'react';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
const events = [
{
  date: 'Oct 15, 2024',
  time: '10:00 AM - 6:00 PM',
  title: 'Annual Dawida Cultural Festival',
  description:
  'A full day celebrating Taita heritage with traditional music, dance performances, craft demonstrations, and a local food market.',
  location: 'TCCHC Main Courtyard',
  type: 'Festival',
  image: img1
},
{
  date: 'Oct 22, 2024',
  time: '2:00 PM - 5:00 PM',
  title: 'Master Weaver Workshop: Sisal Techniques',
  description:
  'Join master weaver Mama Njeri for an intensive afternoon exploring advanced sisal weaving patterns and natural dyeing methods.',
  location: 'Artisan Studio 1',
  type: 'Workshop',
  image: img2
},
{
  date: 'Nov 05, 2024',
  time: '6:30 PM - 9:00 PM',
  title: 'Exhibition Opening: "Roots & Resilience"',
  description:
  'The opening reception for our new temporary exhibition featuring contemporary interpretations of traditional Dawida artifacts by local youth.',
  location: 'Main Gallery',
  type: 'Exhibition',
  image: img3
},
{
  date: 'Nov 12, 2024',
  time: '7:00 PM - 9:00 PM',
  title: 'Community Storytelling Circle',
  description:
  'An evening around the fire with community elders sharing oral histories, myths, and legends of the Taita people.',
  location: 'Outdoor Amphitheater',
  type: 'Community',
  image: img1
},
{
  date: 'Nov 19, 2024',
  time: '10:00 AM - 4:00 PM',
  title: 'Pottery Masterclass with Mama Koki',
  description:
  'A full-day immersive experience in traditional clay preparation, hand-building techniques, and pit firing.',
  location: 'Ceramics Studio',
  type: 'Workshop',
  image: img2
},
{
  date: 'Dec 03, 2024',
  time: '9:00 AM - 5:00 PM',
  title: 'Holiday Craft Market',
  description:
  'Support local artisans by purchasing unique, handcrafted gifts for the holiday season. Featuring over 30 local makers.',
  location: 'TCCHC Grounds',
  type: 'Market',
  image: img3
},
{
  date: 'Dec 10, 2024',
  time: '3:00 PM - 5:00 PM',
  title: 'Lecture: The History of Taita Beadwork',
  description:
  'Dr. Mwangi discusses the symbolic meanings, historical trade routes, and evolution of Dawida bead craftsmanship.',
  location: 'Auditorium',
  type: 'Lecture',
  image: img1
},
{
  date: 'Dec 17, 2024',
  time: '11:00 AM - 1:00 PM',
  title: 'Youth Heritage Program Showcase',
  description:
  'A presentation of projects completed by our youth residency participants, blending traditional skills with modern design.',
  location: 'Exhibition Hall B',
  type: 'Community',
  image: img2
}];

export function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed">
            Join us for exhibitions, workshops, lectures, and community
            gatherings that celebrate and sustain Dawida cultural heritage.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {events.map((event, index) =>
            <div
              key={index}
              className="group flex flex-col md:flex-row bg-white rounded-xl border border-golden-ochre/20 overflow-hidden hover:shadow-lg transition-all duration-300">

                {/* Date/Image Column */}
                <div className="md:w-1/3 lg:w-1/4 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-center">
                    <span className="block text-sm font-medium text-white/90 uppercase tracking-wider mb-2">
                      {event.type}
                    </span>
                    <span className="block font-serif text-2xl font-bold text-white mb-1">
                      {event.date.split(',')[0]}
                    </span>
                    <span className="block text-sm text-white/80">
                      {event.date.split(',')[1]}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="p-8 md:w-2/3 lg:w-3/4 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-bold text-earth-brown mb-4 group-hover:text-terracotta transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-deep-charcoal/60">
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-2 text-golden-ochre" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-2 text-golden-ochre" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-deep-charcoal/80 font-light leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div>
                    <a
                      href="https://wa.me/254708032388?text=Hi! I would like to register/RSVP for the event: *{event.title}* on {event.date} at {event.time}."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-forest-green border border-forest-green rounded-md hover:bg-forest-green hover:text-white transition-colors">
                      Register / RSVP
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-earth-brown border-2 border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors">
              Load More Events
            </button>
          </div>
        </div>
      </section>
    </div>);

}