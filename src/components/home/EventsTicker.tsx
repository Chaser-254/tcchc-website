import { CalendarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const upcomingEvents = [
{
  date: 'Dec 15',
  title: 'Taita Craft Week 2026'
},
{
  date: 'Dec 22',
  title: 'International Mwazindika Drumming Festival'
},
{
  date: 'Jan 05',
  title: 'Metal Work Fabrications Workshop'
},
{
  date: 'Jan 12',
  title: 'Traditional Pottery & Weaving Exhibition'
},
{
  date: 'Jan 19',
  title: 'Dawida Heritage Documentation Launch'
},
{
  date: 'Feb 03',
  title: 'Artist Residency Open House'
}];

export function EventsTicker() {
  return (
    <div className="bg-earth-brown text-warm-cream py-4 overflow-hidden border-y border-golden-ochre/30 relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-earth-brown to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-earth-brown to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-ticker group hover:[animation-play-state:paused]">
        {/* Duplicate the list to create a seamless loop */}
        {[...upcomingEvents, ...upcomingEvents].map((event, index) =>
        <Link
          key={index}
          to="/events"
          className="inline-flex items-center px-8 text-sm font-medium hover:text-terracotta transition-colors">

            <CalendarIcon className="mr-2 h-4 w-4 text-golden-ochre" />
            <span className="text-golden-ochre mr-2">{event.date}</span>
            <span className="font-serif italic tracking-wide">
              {event.title}
            </span>
            <span className="mx-8 text-white/20">•</span>
          </Link>
        )}
      </div>
    </div>);

}