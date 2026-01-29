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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
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
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="grid grid-cols-3 md:grid-cols-1 gap-y-2 gap-x-*">
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
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">Industries We Serve</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Pharmaceutical</li>
              <li>Chemical & Agrochemical</li>
              <li>Food Processing</li>
              <li>Automobile</li>
              <li>Mining & Marine</li>
              <li>Process Industries</li>
            </ul>
          </div> */}

          {/* Contact Info */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-steel mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  404, Shivai 1, Near Rashtra Seva Dal,<br />
                  Sadashiv Peth Pune 411030.<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-steel flex-shrink-0" />
                <a
                  href="tel:+919822912955"
                  className="text-gray-300 hover:text-white transition-colors text-sm whitespace-nowrap"
                >
                  Uday Mhamane: +91 98229 12955
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-steel flex-shrink-0" />
                <a
                  href="tel:+919890002320"
                  className="text-gray-300 hover:text-white transition-colors text-sm whitespace-nowrap"
                >
                  Parth Mehandale: +91 98900 02320
                </a>
              </li>
              
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-steel flex-shrink-0" />
                <a
                  href="mailto:uday.mhamane@spectrumllp.in"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  uday.mhamane@spectrumllp.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-steel flex-shrink-0" />
                <a
                  href="mailto:parth.mehendale@spectrumllp.in"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  parth.mehendale@spectrumllp.in
                </a>
              </li>
            </ul>
          </div> */}
          <div>
  <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>

  <ul className="space-y-6">
    {/* Uday Mhamane */}
    <li className="text-gray-300 text-sm">
      <div className="font-semibold mb-1">Uday Mhamane</div>
      <div className="flex items-center gap-2 mb-1">
        <Phone className="w-5 h-5 text-steel flex-shrink-0" />
        <a href="tel:+919822912955" className="hover:text-white transition-colors">
          +91 98229 12955
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-steel flex-shrink-0" />
        <a
          href="mailto:uday.mhamane@spectrumllp.in"
          className="hover:text-white transition-colors"
        >
          uday.mhamane@spectrumllp.in
        </a>
      </div>
    </li>

    {/* Parth Mehandale */}
    <li className="text-gray-300 text-sm">
      <div className="font-semibold mb-1">Parth Mehandale</div>
      <div className="flex items-center gap-2 mb-1">
        <Phone className="w-5 h-5 text-steel flex-shrink-0" />
        <a href="tel:+919890002320" className="hover:text-white transition-colors">
          +91 98900 02320
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-steel flex-shrink-0" />
        <a
          href="mailto:parth.mehendale@spectrumllp.in"
          className="hover:text-white transition-colors"
        >
          parth.mehendale@spectrumllp.in
        </a>
      </div>
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
