import { Target, Users, Award, Shield, Clock, Wrench } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import StatsCounter from '@/components/ui/StatsCounter';
import ContactBanner from '@/components/ui/ContactBanner';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 8, suffix: '+', label: 'Industries Served' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '+', label: 'Satisfied Clients' },
];

const values = [
  {
    icon: Target,
    title: 'Technical Excellence',
    description: 'We deliver precision-engineered solutions backed by deep technical knowledge and industry expertise.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description: 'We build long-term relationships, working closely with clients to understand and solve their unique challenges.',
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description: 'Every product and service meets the highest standards of quality, reliability, and performance.',
  },
  {
    icon: Shield,
    title: 'Reliability & Trust',
    description: 'Our clients trust us for consistent delivery, honest advice, and dependable support.',
  },
  {
    icon: Clock,
    title: 'Responsive Support',
    description: 'Quick response times and dedicated technical support ensure minimal downtime for your operations.',
  },
  {
    icon: Wrench,
    title: 'Solution-Focused',
    description: 'We don\'t just sell products – we solve problems with tailored solutions for your specific needs.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-600 to-steel">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                About Spectrum
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Trusted Partner in Industrial Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                For over two decades, Spectrum has been delivering comprehensive industrial 
                solutions to process industries, combining technical expertise with a deep 
                commitment to quality and customer success.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-24 relative z-20">
              <StatsCounter stats={stats} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                subtitle="Our Story"
                title="Decades of Industrial Expertise"
                centered={false}
              />
              <div className="space-y-4 text-charcoal-400">
                <p>
                  Spectrum was founded with a clear mission: to provide reliable, high-quality 
                  industrial solutions that help process industries maintain safe, efficient, 
                  and environmentally responsible operations.
                </p>
                <p>
                  Over the years, we have grown from a specialized supplier of mechanical seals 
                  to a comprehensive solutions provider, offering industrial pumps, valves, 
                  specialized paints, and expert technical consulting services.
                </p>
                <p>
                  Our team of experienced engineers and technical specialists brings deep 
                  knowledge of process industries, understanding the unique challenges faced 
                  by pharmaceutical, chemical, food processing, and other critical sectors.
                </p>
                <p>
                  Today, Spectrum is recognized as a trusted partner by leading companies 
                  across India, known for our commitment to quality, reliability, and 
                  exceptional customer support.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="bg-gradient-to-br from-navy to-steel rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Focus Areas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-steel-300 rounded-full mt-2" />
                    <div>
                      <strong>Mechanical Seals & Support Systems</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        High-performance sealing solutions with comprehensive technical support
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-steel-300 rounded-full mt-2" />
                    <div>
                      <strong>Industrial Pumps & Valves</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Complete range of pumps, spares, and valves for demanding applications
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-steel-300 rounded-full mt-2" />
                    <div>
                      <strong>Specialized Industrial Paints</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Corrosion-resistant, heat-resistant, antistatic, and insulation coatings
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-steel-300 rounded-full mt-2" />
                    <div>
                      <strong>Plant Environmental Maintenance</strong>
                      <p className="text-gray-300 text-sm mt-1">
                        Comprehensive solutions to maintain safe and efficient plant environments
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              subtitle="Our Values"
              title="What Drives Us"
              description="Our core values guide everything we do, from product selection to customer service."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-charcoal-400">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Empowering Industries with Reliable Solutions
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our mission is to be the most trusted industrial solutions partner, 
                delivering products and services that enhance operational efficiency, 
                ensure safety, and contribute to environmental sustainability across 
                all process industries we serve.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        title="Ready to Partner with Spectrum?"
        description="Let's discuss how our industrial solutions can support your operations."
        buttonText="Start a Conversation"
      />
    </>
  );
}
