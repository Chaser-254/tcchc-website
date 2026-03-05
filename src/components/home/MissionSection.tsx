import { TargetIcon, HeartIcon, GlobeIcon } from 'lucide-react';

const missionPoints = [
  {
    icon: TargetIcon,
    title: 'Our Vision',
    description: 'To be a leading crafts and cultural heritage center in innovations, revitalization, documentation and preservation of Dawida traditional knowledge.'
  },
  {
    icon: HeartIcon,
    title: 'Our Mission',
    description: 'TCCHC acts as a bridge between artisans, designers, and consumers to create sustainable livelihoods for craft communities and Mwazindika spiritual dance artist groups, directly connecting them to global and national markets.'
  },
  {
    icon: GlobeIcon,
    title: 'Heritage Preservation',
    description: 'Revitalization, documentation, archiving, and preservation of Dawida tangible and intangible cultural heritage essential for safeguarding historical, cultural, and organizational knowledge for future generations.'
  }
];

export function MissionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-earth-brown/5 to-forest-green/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-brown mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-deep-charcoal/70 font-light max-w-3xl mx-auto">
            TCCHC is dedicated to preserving Dawida cultural heritage while creating sustainable 
            connections between traditional artisans and global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-golden-ochre/20 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-terracotta" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-earth-brown mb-4">
                  {point.title}
                </h3>
                
                <p className="text-deep-charcoal/70 font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
