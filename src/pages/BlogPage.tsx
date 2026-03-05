import React, { useState } from 'react';
import { ArrowRightIcon, CalendarIcon, UserIcon, SearchIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';

const blogPosts = [
  {
    title: 'The Revival of Sisal Weaving in Taita',
    excerpt: 'How a new generation of artisans is blending traditional techniques with contemporary design to create sustainable fashion.',
    date: 'October 12, 2024',
    author: 'Amina Taita',
    category: 'Craftsmanship',
    image: img4
  },
  {
    title: 'Documenting Sacred Groves (Fighi)',
    excerpt: 'Our latest archival project maps remaining sacred forests in Taita Hills, exploring their role in biodiversity and cultural identity.',
    date: 'September 28, 2024',
    author: 'Dr. Mwangi',
    category: 'Heritage',
    image: img5
  },
  {
    title: 'Meet the Artist: John Mwachofi',
    excerpt: 'An interview with our Master Carver in Residence about his journey, his inspirations, and passing skills to the youth.',
    date: 'September 15, 2024',
    author: 'Grace Nduku',
    category: 'Interviews',
    image: img6
  },
  {
    title: 'Natural Dyes: Colors of the Earth',
    excerpt: 'A guide to the indigenous plants and minerals used by Dawida weavers to create vibrant, sustainable colors.',
    date: 'August 30, 2024',
    author: 'TCCHC Collective',
    category: 'Techniques',
    image: img4
  },
  {
    title: 'The Role of Storytelling in Dawida Culture',
    excerpt: 'Exploring how oral histories and myths have shaped community values and environmental stewardship in Taita region.',
    date: 'August 14, 2024',
    author: 'Dr. Mwangi',
    category: 'Culture',
    image: img5
  },
  {
    title: 'Highlights from Annual Cultural Festival',
    excerpt: "A photo essay capturing the vibrant dances, music, and crafts from last month's celebration of Taita heritage.",
    date: 'July 22, 2024',
    author: 'Grace Nduku',
    category: 'Events',
    image: img6
  }
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Craftsmanship', 'Heritage', 'Interviews', 'Techniques', 'Culture', 'Events'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogPosts.filter(post => 
        post.category === selectedCategory &&
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
         post.author.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Stories & Insights
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed mb-10">
            Read the latest news, artist interviews, research findings, and
            stories from the Taita Cultural Craft Heritage Centre.
          </p>

          {/* Search and Categories */}
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-32 text-lg border border-golden-ochre/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-5 w-5 text-deep-charcoal/40" />
              </div>
              
              {/* Clear Button */}
              {searchTerm && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <div className="w-px h-6 bg-warm-cream rounded-l-full flex items-center justify-center group cursor-pointer"
                       onClick={() => setSearchTerm('')}
                       role="button"
                       aria-label="Clear search">
                    <span className="text-xs font-medium text-deep-charcoal/60 group-hover:text-earth-brown transition-colors">
                      CLEAR
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat, idx) =>
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${selectedCategory === cat ? 'bg-earth-brown text-white' : 'bg-white text-earth-brown border border-golden-ochre/30 hover:bg-warm-cream'}`}>

                {cat}
              </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post, idx) =>
              <article
                key={idx}
                className="group flex flex-col bg-white rounded-xl border border-golden-ochre/20 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">

                {/* Blog Image */}
                <div className="h-64 w-full relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-earth-brown rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-deep-charcoal/60 mb-4 gap-4">
                    <span className="flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1 text-golden-ochre" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <UserIcon className="h-3 w-3 mr-1 text-golden-ochre" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4 group-hover:text-terracotta transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-deep-charcoal/70 font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to="#"
                    className="inline-flex items-center text-sm font-medium text-forest-green hover:text-terracotta transition-colors mt-auto">

                    Read Full Article
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-earth-brown border-2 border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}