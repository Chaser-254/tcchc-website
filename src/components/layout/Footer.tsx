import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Taita Craft & Cultural Heritage Centre (TCCHC). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}