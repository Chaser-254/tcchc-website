import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import img5 from '../../assets/images/img5.jpeg';
import img6 from '../../assets/images/img6.jpeg';
import img7 from '../../assets/images/img7.jpeg';
import img8 from '../../assets/images/img8.jpeg';
import img9 from '../../assets/images/img9.jpeg';
import img1 from '../../assets/images/img1.jpeg';
const programs = [
{
  title: 'Metal Work Fabrications',
  description:
  'Learn traditional and contemporary metalworking techniques from skilled artisans.',
  image: img5
},
{
  title: 'Traditional Pottery',
  description:
  'Master the art of clay work using time-honored Dawida methods and designs.',
  image: img6
},
{
  title: 'Weaving & Textiles',
  description:
  'Explore intricate weaving patterns and natural dyeing techniques passed down through generations.',
  image: img7
},
{
  title: 'Tie-Dye Workshops',
  description:
  'Create vibrant patterns using traditional tie-dye methods with natural pigments.',
  image: img8
},
{
  title: 'Mwazindika Dance',
  description:
  'Experience the spiritual and cultural significance of traditional Mwazindika drumming and dance.',
  image: img9
},
{
  title: 'Heritage Documentation',
  description:
  'Participate in preserving Dawida knowledge through digital and physical archiving projects.',
  image: img1
}];

export function ProgramHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-brown mb-4">
              TCCHC Programs & Workshops
            </h2>
            <p className="text-lg text-deep-charcoal/70 font-light">
              Hands-on experiences in traditional Dawida crafts, creating sustainable livelihoods for craft communities and Mwazindika spiritual dance artist groups.
            </p>
          </div>
          <Link
            to="/events"
            className="hidden md:inline-flex items-center text-forest-green font-medium hover:text-terracotta transition-colors group">

            View All Programs
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) =>
          <div
            key={index}
            className="group bg-white rounded-xl border border-golden-ochre/20 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">

              {/* Program Image */}
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-serif text-2xl font-semibold text-earth-brown mb-3 group-hover:text-terracotta transition-colors">
                  {program.title}
                </h3>
                <p className="text-deep-charcoal/70 mb-6 flex-grow font-light leading-relaxed">
                  {program.description}
                </p>
                <Link
                to="/events"
                className="inline-flex items-center text-sm font-medium text-forest-green hover:text-terracotta transition-colors mt-auto">

                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/events"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-earth-brown border border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors w-full">

            View All Programs
          </Link>
        </div>
      </div>
    </section>);

}