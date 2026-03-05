import { Link } from 'react-router-dom';
import { TreesIcon, BuildingIcon, UsersIcon, BookOpenIcon } from 'lucide-react';
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img3.jpeg';
import img4 from '../../assets/images/img4.jpeg';

const features = [
  {
    icon: TreesIcon,
    title: 'Indigenous Dawida Homestead',
    description: 'Experience authentic traditional architecture and living spaces that showcase the rich cultural heritage of the Dawida people.',
    image: img1,
    link: '/visit'
  },
  {
    icon: BuildingIcon,
    title: 'Art Gallery & Workshop',
    description: 'Three-acre space featuring fabrication workshops, studio spaces, and exhibition areas for traditional and contemporary crafts.',
    image: img2,
    link: '/gallery-shop'
  },
  {
    icon: UsersIcon,
    title: 'Mwazindika Dance Groups',
    description: 'Support spiritual dance artist groups and preserve the intangible cultural heritage of traditional Taita performances.',
    image: img3,
    link: '/events'
  },
  {
    icon: BookOpenIcon,
    title: 'Cultural Heritage Blog',
    description: 'Explore stories, traditions, and insights about Dawida culture through our regularly updated cultural blog.',
    image: img4,
    link: '/blog'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-brown mb-4">
            A Centre of Living Heritage
          </h2>
          <p className="text-lg text-deep-charcoal/70 font-light max-w-3xl mx-auto">
            TCCHC serves as a sustainable, eco-friendly space where traditional Dawida handicrafts 
            meet contemporary design, creating connections between artisans and global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Link
                key={index}
                to={feature.link}
                className="group bg-warm-cream rounded-xl border border-golden-ochre/20 hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-terracotta/40">
                
                {/* Feature Image */}
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-earth-brown" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-earth-brown mb-3 group-hover:text-terracotta transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-deep-charcoal/70 font-light leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
