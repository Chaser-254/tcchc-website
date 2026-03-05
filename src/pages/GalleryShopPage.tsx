import React from 'react';
import { FilterIcon } from 'lucide-react';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
import img7 from '../assets/images/img7.jpeg';
import img8 from '../assets/images/img8.jpeg';
import img9 from '../assets/images/img9.jpeg';
const artworks = [
{
  title: 'Sisal Basket (Kiondo)',
  image: img4,
  height: 'h-64'
},
{
  title: 'Carved Wooden Stool',
  image: img5,
  height: 'h-96'
},
{
  title: 'Beaded Ceremonial Necklace',
  image: img6,
  height: 'h-72'
},
{
  title: 'Earthenware Water Pot',
  image: img7,
  height: 'h-80'
},
{
  title: 'Naturally Dyed Scarf',
  image: img8,
  height: 'h-64'
},
{
  title: 'Intricate Sisal Mat',
  image: img9,
  height: 'h-96'
},
{
  title: 'Carved Animal Figure (Elephant)',
  image: img4,
  height: 'h-72'
},
{
  title: 'Traditional Beaded Belt',
  image: img5,
  height: 'h-64'
},
{
  title: 'Clay Cooking Pot (Chungu)',
  image: img6,
  height: 'h-80'
},
{
  title: 'Woven Wall Hanging',
  image: img7,
  height: 'h-96'
},
{
  title: 'Carved Walking Stick',
  image: img8,
  height: 'h-72'
},
{
  title: 'Beaded Bracelets (Set of 3)',
  image: img9,
  height: 'h-64'
}];

const categories = [
'All',
'Weaving',
'Woodcarving',
'Beadwork',
'Pottery',
'Textiles'];

export function GalleryShopPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Gallery & Shop
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed mb-10">
            Discover authentic, handcrafted pieces by master artisans of the
            Taita community. Each item tells a story of heritage, skill, and
            sustainable practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) =>
            <button
              key={idx}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${idx === 0 ? 'bg-earth-brown text-white' : 'bg-white text-earth-brown border border-golden-ochre/30 hover:bg-warm-cream'}`}>

                {cat}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <p className="text-deep-charcoal/60 text-sm font-medium">
              Showing {artworks.length} items
            </p>
            <button className="flex items-center text-sm font-medium text-earth-brown hover:text-terracotta transition-colors">
              <FilterIcon className="w-4 h-4 mr-2" />
              Sort & Filter
            </button>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {artworks.map((art, idx) =>
            <div
              key={idx}
              className="break-inside-avoid group cursor-pointer">

                <div
                className={`w-full ${art.height} relative overflow-hidden rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow border border-golden-ochre/10`}>

                  <img 
                    src={art.image} 
                    alt={art.title}
                    className={`w-full ${art.height} object-cover group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-earth-brown group-hover:text-terracotta transition-colors">
                    {art.title}
                  </h3>
                </div>
              </div>
            )}
          </div>

          <div className="mt-20 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-earth-brown border-2 border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors">
              Load More Items
            </button>
          </div>
        </div>
      </section>
    </div>);

}