'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail, MessageSquare, X } from 'lucide-react';

const contactOptions = [
  {
    icon: Phone,
    label: 'Call Us',
    href: 'tel:+919822912955',
    bgColor: 'bg-navy',
    hoverColor: 'hover:bg-navy-600',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    href: 'https://wa.me/919822912955?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20solutions.',
    bgColor: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:uday.mhamane@spectrumllp.in',
    bgColor: 'bg-steel',
    hoverColor: 'hover:bg-steel-600',
  },
];

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const fabButtonBaseClass =
    'w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-steel';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Contact Options */}
      <div
        className={`absolute bottom-20 left-0 flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {contactOptions.map((option, index) => (
          <a
            key={index}
            href={option.href}
            target={option.href.startsWith('http') ? '_blank' : undefined}
            rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`group flex items-center gap-3 ${option.bgColor} ${option.hoverColor} text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70`}
            style={{
              animationDelay: `${index * 50}ms`,
              animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none',
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <option.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap hidden sm:inline">
              {option.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main FAB Button */}
      <button
        onClick={toggleMenu}
        className={`${fabButtonBaseClass} ${
          isOpen
            ? 'bg-charcoal hover:bg-charcoal-600 rotate-90'
            : 'bg-gradient-to-br from-navy to-steel hover:from-navy-600 hover:to-steel-600'
        }`}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white transition-transform duration-300" />
        )}
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
