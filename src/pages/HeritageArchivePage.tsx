import React from 'react';
import {
  SearchIcon,
  FilterIcon,
  BookOpenIcon,
  Image as ImageIcon,
  MicIcon } from
'lucide-react';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
const archiveItems = [
{
  title: 'Oral History: The Migration of the Dawida',
  type: 'Audio',
  icon: MicIcon,
  date: 'Recorded 1998',
  desc: 'Elder Mzee Mwachofi recounts the ancestral journey to the Taita Hills.',
  image: img2
},
{
  title: 'Ceremonial Headdress (Kishungi)',
  type: 'Artifact',
  icon: ImageIcon,
  date: 'Circa 1920',
  desc: 'A rare example of a traditional headdress worn by elders during significant community ceremonies.',
  image: img3
},
{
  title: 'Field Notes: Indigenous Plant Dyes',
  type: 'Document',
  icon: BookOpenIcon,
  date: '1975',
  desc: 'Handwritten notes detailing the extraction and application of natural dyes from local flora.',
  color: 'from-terracotta/20 to-earth-brown/20'
},
{
  title: 'Photographic Collection: Wundanyi Market',
  type: 'Image',
  icon: ImageIcon,
  date: '1960-1970',
  desc: 'A series of black and white photographs capturing daily life and trade in the central market.',
  color: 'from-golden-ochre/20 to-forest-green/20'
},
{
  title: 'Song of the Harvest (Mwazindika)',
  type: 'Audio',
  icon: MicIcon,
  date: 'Recorded 2005',
  desc: "Traditional harvest song performed by the Mwazindika Women's Choir.",
  color: 'from-earth-brown/20 to-golden-ochre/20'
},
{
  title: 'Carved Wooden Headrest (Mto)',
  type: 'Artifact',
  icon: ImageIcon,
  date: 'Early 20th Century',
  desc: 'An intricately carved headrest used to protect elaborate hairstyles during sleep.',
  color: 'from-terracotta/20 to-forest-green/20'
},
{
  title: 'Map of Sacred Groves (Fighi)',
  type: 'Document',
  icon: BookOpenIcon,
  date: '1982',
  desc: 'A hand-drawn map indicating the locations of protected sacred forests in the Taita Hills.',
  color: 'from-forest-green/20 to-earth-brown/20'
},
{
  title: 'Interview: The Art of Basketry',
  type: 'Audio',
  icon: MicIcon,
  date: 'Recorded 2010',
  desc: 'Master weaver Mama Njeri discusses the evolution of patterns and materials in sisal weaving.',
  color: 'from-golden-ochre/20 to-terracotta/20'
},
{
  title: 'Traditional Iron Smelting Tools',
  type: 'Artifact',
  icon: ImageIcon,
  date: 'Late 19th Century',
  desc: 'A collection of bellows and tongs used by Dawida blacksmiths before the introduction of imported iron.',
  color: 'from-earth-brown/20 to-forest-green/20'
}];

export function HeritageArchivePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Digital Heritage Archive
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed mb-10">
            Explore our curated collection of artifacts, oral histories,
            photographs, and documents preserving the rich legacy of the Taita
            people.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-earth-brown/50" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-golden-ochre/30 rounded-full leading-5 bg-white placeholder-earth-brown/50 focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-forest-green sm:text-sm shadow-sm"
              placeholder="Search artifacts, stories, or documents..." />

            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
              <button className="p-2 text-earth-brown/50 hover:text-earth-brown transition-colors">
                <FilterIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-golden-ochre/20 pb-6">
            <div className="flex gap-4 mb-4 md:mb-0">
              <span className="text-sm font-medium text-earth-brown">
                Filter by:
              </span>
              <button className="text-sm font-medium text-forest-green underline decoration-2 underline-offset-4">
                All
              </button>
              <button className="text-sm font-medium text-deep-charcoal/60 hover:text-terracotta transition-colors">
                Artifacts
              </button>
              <button className="text-sm font-medium text-deep-charcoal/60 hover:text-terracotta transition-colors">
                Documents
              </button>
              <button className="text-sm font-medium text-deep-charcoal/60 hover:text-terracotta transition-colors">
                Audio/Video
              </button>
            </div>
            <p className="text-sm text-deep-charcoal/60">
              Showing {archiveItems.length} results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archiveItems.map((item, idx) =>
            <div
              key={idx}
              className="group flex flex-col bg-white rounded-xl border border-golden-ochre/20 overflow-hidden hover:shadow-lg transition-all duration-300">

                {/* Image Placeholder */}
                <div
                className={`h-48 w-full bg-gradient-to-br ${item.color} relative overflow-hidden flex items-center justify-center`}>

                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                  <item.icon className="h-16 w-16 text-white/40 z-10" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-earth-brown rounded-full shadow-sm flex items-center gap-1">
                      <item.icon className="h-3 w-3" />
                      {item.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs font-medium text-golden-ochre uppercase tracking-wider mb-2">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-earth-brown mb-3 group-hover:text-terracotta transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-deep-charcoal/70 text-sm font-light leading-relaxed flex-grow mb-6 line-clamp-3">
                    {item.desc}
                  </p>
                  <button className="mt-auto text-sm font-medium text-forest-green hover:text-terracotta transition-colors flex items-center">
                    View Details
                    <SearchIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination">

              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-golden-ochre/30 bg-white text-sm font-medium text-earth-brown hover:bg-warm-cream">

                <span className="sr-only">Previous</span>
                &larr;
              </a>
              <a
                href="#"
                aria-current="page"
                className="z-10 bg-warm-cream border-golden-ochre/30 text-earth-brown relative inline-flex items-center px-4 py-2 border text-sm font-medium">

                1
              </a>
              <a
                href="#"
                className="bg-white border-golden-ochre/30 text-deep-charcoal/60 hover:bg-warm-cream relative inline-flex items-center px-4 py-2 border text-sm font-medium">

                2
              </a>
              <a
                href="#"
                className="bg-white border-golden-ochre/30 text-deep-charcoal/60 hover:bg-warm-cream relative inline-flex items-center px-4 py-2 border text-sm font-medium">

                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-golden-ochre/30 bg-white text-sm font-medium text-deep-charcoal/60">
                ...
              </span>
              <a
                href="#"
                className="bg-white border-golden-ochre/30 text-deep-charcoal/60 hover:bg-warm-cream relative inline-flex items-center px-4 py-2 border text-sm font-medium">

                12
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-golden-ochre/30 bg-white text-sm font-medium text-earth-brown hover:bg-warm-cream">

                <span className="sr-only">Next</span>
                &rarr;
              </a>
            </nav>
          </div>
        </div>
      </section>
    </div>);

}