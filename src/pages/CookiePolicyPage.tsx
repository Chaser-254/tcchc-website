import React from 'react';

export function CookiePolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-earth-brown mb-8">
          Cookie Policy
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              What Are Cookies
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              How We Use Cookies
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed mb-4">
              Taita Craft & Cultural Heritage Centre (TCCHC) uses cookies for the following purposes:
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Essential Cookies
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Performance Cookies
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Functional Cookies
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Types of Cookies We Use
            </h2>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Session Cookies
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              These are temporary cookies that expire when you close your browser. They help us track your movement through the website during a single session.
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Persistent Cookies
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              These remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Third-Party Cookies
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              These are set by external services on our website, such as analytics services or social media platforms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed mb-4">
              You have several options for managing cookies:
            </p>
            <ul className="list-disc list-inside text-deep-charcoal/70 space-y-2 ml-4">
              <li>Accept or reject cookies through our cookie consent banner</li>
              <li>Adjust your browser settings to block or delete cookies</li>
              <li>Use browser extensions to manage cookies</li>
              <li>Clear cookies from your device at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Browser Settings
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed mb-4">
              Most browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Chrome
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              Go to Settings &gt; Privacy and security &gt; Cookies and other site data.
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Firefox
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              Go to Options &gt; Privacy & Security &gt; Cookies and Site Data.
            </p>
            
            <h3 className="font-serif text-xl font-semibold text-earth-brown mb-3">
              Safari
            </h3>
            <p className="text-deep-charcoal/70 leading-relaxed">
              Go to Preferences &gt; Privacy &gt; Cookies and website data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Impact of Disabling Cookies
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed">
              Please note that disabling cookies may affect your user experience. Some features of our website may not function properly, and you may not be able to access certain areas or use all services we offer.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Updates to This Policy
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed">
              We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Contact Us
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed">
              If you have any questions about our use of cookies, please contact us through the information provided on our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-earth-brown mb-4">
              Last Updated
            </h2>
            <p className="text-deep-charcoal/70 leading-relaxed">
              This cookie policy was last updated on {new Date().toLocaleDateString()}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
