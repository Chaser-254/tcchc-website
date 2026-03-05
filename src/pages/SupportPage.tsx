import {
  HeartIcon,
  UsersIcon,
  HandHeartIcon,
  CheckCircleIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import img7 from '../assets/images/img7.jpeg';
const donationTiers = [
{
  amount: 'Ksh 1,000',
  impact: 'Provides materials for one youth workshop participant.'
},
{
  amount: 'Ksh 5,000',
  impact: 'Supports the digitization of one oral history recording.'
},
{
  amount: 'Ksh 10,000',
  impact: "Funds a master artisan's stipend for a week of teaching."
},
{
  amount: 'Custom',
  impact: 'Every contribution helps preserve Dawida heritage.'
}];

const membershipBenefits = [
'Unlimited free admission to the Centre',
'Invitations to exclusive exhibition previews',
'10% discount in the Gallery Shop',
'Priority booking for workshops and events',
'Quarterly newsletter with behind-the-scenes updates'];

export function SupportPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src={img7} 
            alt="Support TCCHC Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-cream/95 via-warm-cream/90 to-warm-cream/95" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-earth-brown mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-deep-charcoal/80 font-light leading-relaxed mb-10">
            Your support ensures that the rich cultural heritage of the Taita
            people continues to thrive, inspiring future generations and
            empowering local artisans.
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartIcon className="h-10 w-10 text-terracotta" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-earth-brown mb-4">
              Make a Donation
            </h2>
            <p className="text-lg text-deep-charcoal/80 font-light max-w-2xl mx-auto">
              Contributions directly fund our educational programs, the Heritage
              Archive, and our artist residency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier, idx) =>
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-golden-ochre/20 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">

                <h3 className="font-serif text-2xl font-bold text-earth-brown mb-4">
                  {tier.amount}
                </h3>
                <p className="text-deep-charcoal/70 font-light text-sm flex-grow mb-6">
                  {tier.impact}
                </p>
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-terracotta rounded-md hover:bg-terracotta/90 transition-colors w-full mt-auto">
                  Select
                </button>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-sm text-deep-charcoal/60 mb-6 italic">
              TCCHC is a registered non-profit organization. Donations are
              tax-deductible where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-golden-ochre/10 rounded-full flex items-center justify-center mb-6">
                <UsersIcon className="h-8 w-8 text-golden-ochre" />
              </div>
              <h2 className="font-serif text-4xl font-bold text-earth-brown mb-6">
                Become a Member
              </h2>
              <p className="text-lg text-deep-charcoal/80 font-light leading-relaxed mb-8">
                Join a community of culture enthusiasts dedicated to preserving
                Dawida heritage. Membership offers exclusive access and benefits
                while providing vital ongoing support to the Centre.
              </p>

              <div className="space-y-4 mb-8">
                {membershipBenefits.map((benefit, idx) =>
                <div key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-forest-green mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-deep-charcoal/80 font-medium">
                      {benefit}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-forest-green rounded-md hover:bg-forest-green/90 transition-colors">
                  Join Individual (Ksh 3,000/yr)
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-earth-brown border-2 border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors">
                  Join Family (Ksh 5,000/yr)
                </button>
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-forest-green/20 to-golden-ochre/20 rounded-xl relative overflow-hidden shadow-lg border border-golden-ochre/20 flex items-center justify-center">
              <UsersIcon className="h-24 w-24 text-forest-green/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="w-20 h-20 bg-earth-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HandHeartIcon className="h-10 w-10 text-earth-brown" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-earth-brown mb-6">
            Volunteer With Us
          </h2>
          <p className="text-lg text-deep-charcoal/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            We are always looking for passionate individuals to assist with
            events, guide tours, help in the archive, or support our educational
            programs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-earth-brown border-2 border-earth-brown rounded-md hover:bg-earth-brown hover:text-white transition-colors">

            Inquire About Volunteering
          </Link>
        </div>
      </section>
    </div>);

}