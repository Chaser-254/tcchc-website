import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from '../../assets/images/logo.jpeg';
const navLinks = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About',
  path: '/about'
},
{
  name: 'Events',
  path: '/events'
},
{
  name: 'Gallery',
  path: '/gallery-shop'
},
{
  name: 'Visit',
  path: '/visit'
},
{
  name: 'Donate',
  path: '/support'
},
{
  name: 'Blog',
  path: '/blog'
}];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-golden-ochre/20 bg-warm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center"
              onClick={closeMobileMenu}>
              <img 
                src={logo} 
                alt="TCCHC Kenya Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors hover:text-terracotta whitespace-nowrap ${isActive ? 'text-forest-green underline decoration-2 underline-offset-4' : 'text-deep-charcoal'}`}>

                      {link.name}
                    </Link>
                  </li>);

              })}
            </ul>
          </nav>

          {/* Desktop Contact Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+254708032388"
              className="inline-flex items-center justify-center w-10 h-10 text-earth-brown hover:bg-earth-brown hover:text-white transition-colors"
              aria-label="Call Us">
              <i className="fas fa-phone"></i>
            </a>
            <a
              href="https://wa.me/254708032388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 text-white bg-green-600 hover:bg-green-700 transition-colors"
              aria-label="WhatsApp Us">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-earth-brown hover:bg-earth-brown/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-green"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}>

              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ?
              <XIcon className="block h-6 w-6" aria-hidden="true" /> :

              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&
      <div className="fixed inset-0 top-16 z-40 bg-warm-cream lg:hidden">
          <nav className="h-full overflow-y-auto px-4 py-6 sm:px-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                    <Link
                    to={link.path}
                    className={`block px-3 py-2 text-lg font-medium transition-colors hover:text-terracotta ${isActive ? 'text-forest-green border-l-4 border-forest-green pl-2' : 'text-deep-charcoal'}`}
                    onClick={closeMobileMenu}>

                      {link.name}
                    </Link>
                  </li>);

            })}
            </ul>
            
            {/* Mobile Contact Icons */}
            <div className="mt-8 pt-8 border-t border-golden-ochre/20 space-y-3">
              <a
                href="tel:+254708032388"
                className="flex items-center justify-center px-6 py-3 text-base font-medium text-earth-brown hover:bg-earth-brown hover:text-white transition-colors">
                <i className="fas fa-phone mr-3"></i>
                <span>Call +254 708 032 388</span>
              </a>
              <a
                href="https://wa.me/254708032388"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors">
                <i className="fab fa-whatsapp mr-3"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      }
    </header>);

}