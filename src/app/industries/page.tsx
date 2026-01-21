import { Pill, FlaskConical, Utensils, Car, Mountain, Ship, Factory, Beaker } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import IndustryCard from '@/components/ui/IndustryCard';
import ContactBanner from '@/components/ui/ContactBanner';

const industries = [
  {
    icon: Pill,
    title: 'Pharmaceutical',
    description: 'Supporting pharmaceutical manufacturing with precision sealing solutions and contamination-free equipment for drug production facilities.',
    challenges: [
      'Strict FDA compliance requirements',
      'Contamination prevention',
      'Sterile environment maintenance',
      'Process validation standards',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Chemical & Agrochemical',
    description: 'Providing corrosion-resistant solutions for handling aggressive chemicals and fertilizers in demanding processing environments.',
    challenges: [
      'Corrosive chemical handling',
      'High-temperature processes',
      'Environmental compliance',
      'Worker safety concerns',
    ],
  },
  {
    icon: Utensils,
    title: 'Food Processing',
    description: 'Delivering food-grade equipment and hygienic solutions that meet stringent food safety standards and regulations.',
    challenges: [
      'Food safety compliance',
      'Hygiene requirements',
      'Cross-contamination prevention',
      'Temperature control systems',
    ],
  },
  {
    icon: Car,
    title: 'Automobile',
    description: 'Supporting automotive manufacturing with durable pumps, seals, and coatings for paint shops and assembly processes.',
    challenges: [
      'High-volume production demands',
      'Paint shop requirements',
      'Quality consistency',
      'Maintenance downtime reduction',
    ],
  },
  {
    icon: Mountain,
    title: 'Mining',
    description: 'Providing heavy-duty equipment solutions designed to withstand abrasive materials and harsh mining conditions.',
    challenges: [
      'Abrasive material handling',
      'Remote location operations',
      'Equipment durability needs',
      'Safety in hazardous environments',
    ],
  },
  {
    icon: Ship,
    title: 'Marine',
    description: 'Offering marine-grade solutions resistant to saltwater corrosion for ships, offshore platforms, and port facilities.',
    challenges: [
      'Saltwater corrosion',
      'Offshore maintenance challenges',
      'International regulations',
      'Continuous operation requirements',
    ],
  },
  {
    icon: Factory,
    title: 'Process Industries',
    description: 'Serving diverse process industries with versatile solutions for fluid handling, mixing, and material processing applications.',
    challenges: [
      'Complex process requirements',
      'Multiple fluid handling',
      'Energy efficiency goals',
      'Emission control compliance',
    ],
  },
  {
    icon: Beaker,
    title: 'Research & Development',
    description: 'Supporting R&D facilities with precision equipment for pilot plants, laboratories, and experimental processes.',
    challenges: [
      'Varied scale requirements',
      'Precision and accuracy needs',
      'Flexibility for experiments',
      'Documentation requirements',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-600 to-steel">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                Industries We Serve
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industrial Expertise Across Sectors
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Spectrum understands that each industry has unique challenges and requirements. 
                Our solutions are tailored to meet the specific needs of diverse process industries.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              subtitle="Our Expertise"
              title="Industries We Support"
              description="From pharmaceuticals to marine applications, we deliver specialized solutions for every sector."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 75}>
                <IndustryCard {...industry} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                subtitle="Our Approach"
                title="Why Industry Expertise Matters"
                centered={false}
              />
              <div className="space-y-4 text-charcoal-400">
                <p>
                  Every industry operates under different conditions, regulations, and 
                  performance requirements. A solution that works in food processing may 
                  not be suitable for chemical manufacturing.
                </p>
                <p>
                  Our team brings decades of hands-on experience across multiple sectors, 
                  understanding the nuances that make each industry unique. This deep 
                  knowledge allows us to recommend the right products and configurations 
                  for your specific application.
                </p>
                <p>
                  We don't just supply products – we provide solutions backed by industry 
                  knowledge, technical expertise, and a commitment to your operational success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy rounded-xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">8+</div>
                  <div className="text-gray-300">Industries Served</div>
                </div>
                <div className="bg-steel rounded-xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="bg-steel rounded-xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="bg-navy rounded-xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-gray-300">Active Clients</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        title="Need Industry-Specific Solutions?"
        description="Our experts understand your industry's unique challenges and can recommend the right solutions."
        buttonText="Discuss Your Requirements"
      />
    </>
  );
}
