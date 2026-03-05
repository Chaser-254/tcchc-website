import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
const programs = [
{
  title: 'Basket Weaving',
  description:
  'Learn the intricate techniques of traditional sisal weaving passed down through generations. Participants will create their own small basket while learning about the symbolic patterns and natural dyes used in Dawida culture.',
  image: img1,
  duration: '2 Hours',
  level: 'Beginner'
},
{
  title: 'Woodcarving',
  description:
  'Discover the art of shaping local sustainable woods into functional and decorative pieces. Under the guidance of master carvers, learn tool handling, wood selection, and traditional finishing techniques.',
  image: img2,
  duration: 'Half Day',
  level: 'All Levels'
},
{
  title: 'Beadwork',
  description:
  'Explore the symbolic meanings and vibrant patterns of Dawida bead craftsmanship. Create your own traditional necklace or bracelet while understanding the stories woven into each color and design.',
  image: img3,
  duration: '2 Hours',
  level: 'Beginner'
},
{
  title: 'Pottery',
  description:
  'Experience the tactile process of creating traditional clay vessels used in daily life. From clay preparation to hand-building techniques and traditional firing methods, immerse yourself in this ancient craft.',
  image: img4,
  duration: 'Full Day',
  level: 'Intermediate'
},
{
  title: 'Textile Dyeing',
  description:
  'Master natural dyeing methods using local plants, roots, and minerals. Learn how to extract colors sustainably and apply them to fabrics using traditional resist techniques.',
  image: img5,
  duration: 'Half Day',
  level: 'All Levels'
},
{
  title: 'Cultural Storytelling',
  description:
  'Engage with elders as they share oral histories, myths, and legends of the Taita people. An immersive session around the fire, exploring the deep connection between narrative, landscape, and identity.',
  image: img6,
  duration: 'Evening',
  level: 'All Levels'
}];

export function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Educational Programs
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed">
            Immerse yourself in the living traditions of the Taita people
            through our hands-on workshops and immersive cultural experiences
            led by master artisans.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {programs.map((program, index) =>
            <div
              key={index}
              className="group bg-white rounded-xl border border-golden-ochre/20 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">

                {/* Program Image */}
                <div className="h-64 w-full relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-earth-brown rounded-full shadow-sm">
                      {program.duration}
                    </span>
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-forest-green rounded-full shadow-sm">
                      {program.level}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-2xl font-semibold text-earth-brown mb-4 group-hover:text-terracotta transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-deep-charcoal/70 mb-8 flex-grow font-light leading-relaxed">
                    {program.description}
                  </p>
                  <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-earth-brown border border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors w-full mt-auto">

                    Inquire to Book
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}