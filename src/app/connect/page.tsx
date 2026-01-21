'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Industrial Area, Sector 5', 'Mumbai, Maharashtra 400001', 'India'],
    link: 'https://maps.google.com',
    linkText: 'Get Directions',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 22 2345 6789'],
    link: 'tel:+919876543210',
    linkText: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@spectrum.com', 'sales@spectrum.com'],
    link: 'mailto:info@spectrum.com',
    linkText: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
  },
];

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-600 to-steel">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                Connect With Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Discuss Your Requirements
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to improve your plant operations? Get in touch with our team to discuss 
                your industrial solution needs. We&apos;re here to help with product selection, 
                technical questions, and custom requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="slide-in-left">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
                      <p className="text-charcoal-400 mb-6">
                        Your message has been received. Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium text-charcoal mb-2">
                            Industry
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                          >
                            <option value="">Select your industry</option>
                            <option value="pharmaceutical">Pharmaceutical</option>
                            <option value="chemical">Chemical & Agrochemical</option>
                            <option value="food">Food Processing</option>
                            <option value="automobile">Automobile</option>
                            <option value="mining">Mining</option>
                            <option value="marine">Marine</option>
                            <option value="other">Other Process Industries</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                          >
                            <option value="">Select a subject</option>
                            <option value="product-inquiry">Product Inquiry</option>
                            <option value="technical-support">Technical Support</option>
                            <option value="quotation">Request Quotation</option>
                            <option value="consultation">Technical Consultation</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 inline" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="slide-in-right" delay={200}>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-navy" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-charcoal-400 text-sm">{detail}</p>
                          ))}
                          {info.link && (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-steel font-medium text-sm hover:text-navy transition-colors"
                            >
                              {info.linkText} →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Quick Response Promise */}
                  <div className="bg-gradient-to-br from-navy to-steel rounded-xl p-6 text-white">
                    <h3 className="font-semibold mb-3">Quick Response Promise</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      We understand the urgency of industrial requirements. Our team responds 
                      to all inquiries within 24 hours on business days.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Average response time: 4 hours</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="container-custom py-12">
          <AnimatedSection>
            <SectionHeader
              subtitle="Our Location"
              title="Visit Our Office"
              description="Located in the heart of Mumbai's industrial district, we're easily accessible."
            />
          </AnimatedSection>
        </div>
        <div className="h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Spectrum Location"
          />
        </div>
      </section>
    </>
  );
}
