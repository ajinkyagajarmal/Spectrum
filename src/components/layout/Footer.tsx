import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import logo from '@/app/Assets/Spectrum._WHITE-01 (1).svg';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/connect', label: 'Connect' },
];

const socialLinks = [
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src={logo}
                alt="Spectrum logo"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner for industrial solutions. We provide mechanical seals, 
              industrial pumps, specialized paints, and expert technical support for 
              process industries worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-steel/30 hover:bg-steel rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries We Serve</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Pharmaceutical</li>
              <li>Chemical & Agrochemical</li>
              <li>Food Processing</li>
              <li>Automobile</li>
              <li>Mining & Marine</li>
              <li>Process Industries</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-steel mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Industrial Area, Sector 5<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-steel flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-steel flex-shrink-0" />
                <a
                  href="mailto:info@spectrum.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@spectrum.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel/30">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Spectrum Industrial Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
