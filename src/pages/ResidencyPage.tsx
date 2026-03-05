import React from 'react';
import {
  CheckCircleIcon,
  CalendarIcon,
  UsersIcon,
  FileTextIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.jpeg';
const benefits = [
'Dedicated studio space within the TCCHC grounds',
'Access to the Heritage Archive and library',
'Mentorship from master artisans and community elders',
'Monthly stipend for materials and living expenses',
'Accommodation in traditional-style, modern-amenity housing',
'Opportunities to exhibit work in the Main Gallery',
'Facilitated community workshops and artist talks',
'Integration into local cultural events and ceremonies'];

const timeline = [
{
  step: 'Application Opens',
  date: 'January 15',
  desc: 'Online portal opens for submissions.'
},
{
  step: 'Application Deadline',
  date: 'March 31',
  desc: 'All materials must be submitted by 11:59 PM EAT.'
},
{
  step: 'Interviews',
  date: 'April 15-30',
  desc: 'Shortlisted candidates interviewed via video call.'
},
{
  step: 'Notification',
  date: 'May 15',
  desc: 'Selected residents are notified.'
},
{
  step: 'Residency Begins',
  date: 'September 1',
  desc: 'Orientation and studio move-in.'
},
{
  step: 'Exhibition',
  date: 'November 20',
  desc: 'Final showcase of residency work.'
}];

export function ResidencyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-warm-cream py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Artist Residency Program
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed mb-10">
            A 3-month immersive program for artists, researchers, and cultural
            practitioners to engage deeply with Taita heritage, collaborate with
            local artisans, and create new work inspired by Dawida traditions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-forest-green rounded-md hover:bg-forest-green/90 transition-all duration-300 shadow-sm hover:shadow-md">

            Apply for Fall 2025
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-earth-brown mb-6">
                Program Overview
              </h2>
              <p className="text-lg text-deep-charcoal/80 font-light leading-relaxed mb-6">
                The TCCHC Residency is designed to foster cross-cultural
                dialogue and innovative approaches to heritage preservation. We
                invite practitioners from diverse disciplines—visual arts,
                anthropology, design, literature, and performing arts—to spend
                three months living and working in Wundanyi.
              </p>
              <p className="text-lg text-deep-charcoal/80 font-light leading-relaxed">
                Residents are encouraged to explore the intersections of
                traditional Dawida craftsmanship and contemporary practice,
                utilizing our archives, engaging with the community, and
                learning from master artisans in residence.
              </p>
            </div>
            <div className="h-96 rounded-xl relative overflow-hidden shadow-lg border border-golden-ochre/20">
              <img 
                src={img1} 
                alt="Artist Residency Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <UsersIcon className="h-12 w-12 mx-auto mb-3" />
                  <p className="font-serif text-lg font-medium">Creative Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="font-serif text-4xl font-bold text-earth-brown mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) =>
            <div
              key={idx}
              className="flex items-start bg-white p-6 rounded-xl border border-golden-ochre/20 shadow-sm">

                <CheckCircleIcon className="h-6 w-6 text-forest-green mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-deep-charcoal/80 font-medium">{benefit}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline & Requirements */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Timeline */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-earth-brown mb-8 flex items-center">
                <CalendarIcon className="mr-3 h-8 w-8 text-golden-ochre" />
                Application Timeline
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-golden-ochre/30 before:to-transparent">
                {timeline.map((item, idx) =>
                <div
                  key={idx}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-earth-brown text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="font-serif text-xs font-bold">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-golden-ochre/20 bg-white shadow-sm">
                      <h3 className="font-serif text-lg font-bold text-terracotta mb-1">
                        {item.step}
                      </h3>
                      <span className="block text-sm font-medium text-earth-brown mb-2">
                        {item.date}
                      </span>
                      <p className="text-deep-charcoal/70 text-sm font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-earth-brown mb-8 flex items-center">
                <FileTextIcon className="mr-3 h-8 w-8 text-golden-ochre" />
                Application Requirements
              </h2>
              <div className="bg-white p-8 rounded-xl border border-golden-ochre/20 shadow-sm space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-earth-brown mb-2">
                    1. Project Proposal (Max 1000 words)
                  </h3>
                  <p className="text-deep-charcoal/70 font-light text-sm">
                    Detailing your proposed research or creative project, how it
                    engages with Taita heritage, and your intended outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-earth-brown mb-2">
                    2. Artist Statement (Max 500 words)
                  </h3>
                  <p className="text-deep-charcoal/70 font-light text-sm">
                    An overview of your current practice, themes, and
                    methodology.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-earth-brown mb-2">
                    3. Portfolio
                  </h3>
                  <p className="text-deep-charcoal/70 font-light text-sm">
                    Up to 10 images, 3 video/audio links, or 15 pages of written
                    work demonstrating recent projects relevant to your
                    proposal.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-earth-brown mb-2">
                    4. CV / Resume
                  </h3>
                  <p className="text-deep-charcoal/70 font-light text-sm">
                    Highlighting relevant education, exhibitions, publications,
                    or community projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-earth-brown mb-2">
                    5. References
                  </h3>
                  <p className="text-deep-charcoal/70 font-light text-sm">
                    Contact information for two professional references.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-golden-ochre/20">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-forest-green rounded-md hover:bg-forest-green/90 transition-colors w-full">

                    Start Application
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}