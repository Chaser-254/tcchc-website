import React from 'react';
import {
  UsersIcon,
  BookOpenIcon,
  LeafIcon,
  HeartHandshakeIcon } from
'lucide-react';

const values = [
{
  icon: BookOpenIcon,
  title: 'Preservation',
  desc: 'Safeguarding Dawida oral histories, artifacts, and traditional techniques for future generations.'
},
{
  icon: UsersIcon,
  title: 'Community',
  desc: 'Fostering a space where elders, youth, and visitors can connect through shared cultural experiences.'
},
{
  icon: LeafIcon,
  title: 'Sustainability',
  desc: 'Promoting eco-friendly craft practices using locally sourced, natural materials.'
},
{
  icon: HeartHandshakeIcon,
  title: 'Empowerment',
  desc: 'Supporting local artisans through fair trade practices and skills development.'
}];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed">
            TCCHC acts as a bridge between artisans, designers, and consumers to create 
            sustainable livelihoods for craft communities and Mwazindika spiritual dance 
            artist groups, directly connecting them to global and national markets. We are 
            involved in revitalization, documentation, archiving, and preservation of Dawida 
            tangible and intangible cultural heritage essential for safeguarding historical, 
            cultural, and organizational knowledge.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold text-earth-brown mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed">
            To be a leading crafts and cultural heritage center in innovations, 
            revitalization, documentation and preservation of Dawida traditional knowledge.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-earth-brown mb-8 text-center">
            Our Founder
          </h2>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-earth-brown/20 to-terracotta/20 rounded-full mb-6 border-4 border-white shadow-md"></div>
            <h3 className="font-serif text-2xl font-bold text-earth-brown mb-3">
              Dr. Mjomba Majalia
            </h3>
            <p className="text-terracotta font-medium mb-4">
              Founder
            </p>
            <p className="text-deep-charcoal/70 font-light leading-relaxed max-w-2xl mx-auto">
              Founded TCCHC in 2026 as a premier Taita Taveta County cultural organization 
              and sustainable, eco-friendly space dedicated to preserving Dawida heritage, 
              fostering artisan-consumer connections, and promoting rural-urban links. 
              Dr. Majalia's vision continues to guide our mission to bridge artisans with 
              global markets while preserving traditional knowledge for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-earth-brown mb-16 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) =>
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-golden-ochre/20 text-center shadow-sm">

                <div className="w-16 h-16 mx-auto bg-warm-cream rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-terracotta" />
                </div>
                <h3 className="font-serif text-xl font-bold text-earth-brown mb-4">
                  {value.title}
                </h3>
                <p className="text-deep-charcoal/70 font-light">{value.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>);

}