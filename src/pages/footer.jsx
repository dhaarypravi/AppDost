import React from 'react';
import { Mail, Phone, Clock, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

// Reusable component for service links
const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-blue-400 transition duration-200 flex items-center mb-1"
    >
      <span className="mr-2 text-sm text-blue-500 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
      {children}
    </a>
  </li>
);

// Reusable component for social icons
const SocialIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center bg-gray-700/50 hover:bg-blue-600 rounded-full transition duration-300 shadow-lg text-white"
  >
    <Icon size={18} />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#121927] text-white pt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          
          {/* Column 1: Company Info and Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {/* Placeholder for Logo/AppDost text. Use an SVG or a large text logo here. */}
              <div className="text-2xl font-extrabold text-blue-400 tracking-wider">
                AppDost
              </div>
              <span className="text-sm font-light text-gray-400 pt-1">
                COMPLETE IT SOLUTION
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>

            {/* Stats Section (simplified layout) */}
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">10+</p>
                  <p className="text-xs uppercase text-gray-400 tracking-wider mt-1">Web Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">4+</p>
                  <p className="text-xs uppercase text-gray-400 tracking-wider mt-1">Android Apps</p>
                </div>
              </div>
              <div className="text-center w-max">
                <p className="text-3xl font-bold text-blue-400">1</p>
                <p className="text-xs uppercase text-gray-400 tracking-wider mt-1">CRM System</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6 pt-2">
              <SocialIcon href="#" Icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="#" Icon={Twitter} label="Twitter/X" />
              <SocialIcon href="#" Icon={Facebook} label="Facebook" />
              <SocialIcon href="#" Icon={Instagram} label="Instagram" />
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 w-max pb-1">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 w-max pb-1">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#service-android">Android App Development</FooterLink>
              <FooterLink href="#service-web">Web Development</FooterLink>
              <FooterLink href="#service-ui">UI/UX Design</FooterLink>
              <FooterLink href="#service-crm">CRM Software</FooterLink>
              <FooterLink href="#service-cloud">Cloud Solutions</FooterLink>
              <FooterLink href="#service-cyber">Cybersecurity</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 w-max pb-1">Contact Info</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start text-gray-400">
                <Mail size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>
                  <a href="mailto:pandeykhushhi@gmail.com" className="hover:text-white transition">pandeykhushhi@gmail.com</a>
                </span>
              </li>
              <li className="flex items-start text-gray-400">
                <Phone size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="flex flex-col">
                  <a href="tel:+916264696956" className="hover:text-white transition">+91 6264 696956</a>
                  <a href="tel:+916264696956" className="hover:text-white transition">+91 6264 696956</a>
                </span>
              </li>
              <li className="flex items-start text-gray-400">
                <Clock size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span>x Offices: xxxxx (HQ), xxxxx, Raigarh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="border-t border-gray-800 pt-6 pb-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="order-2 md:order-1 mb-4 md:mb-0 text-center">
            © 2025 AppDost - Complete IT Solution. All rights reserved.
          </p>

          <div className="order-1 md:order-2 flex space-x-6 text-center">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span className='text-blue-500'>•</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <span className='text-blue-500'>•</span>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
          
          <p className="order-3 mt-4 md:mt-0 text-center">
             Built with <span className="text-red-500">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
