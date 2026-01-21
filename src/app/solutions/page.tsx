import { Leaf, Shield, Thermometer, Zap, Gauge, Wrench } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import SolutionCard from '@/components/ui/SolutionCard';
import ContactBanner from '@/components/ui/ContactBanner';

const solutions = [
  {
    icon: Leaf,
    title: 'Plant Environmental Maintenance',
    problem: 'Industrial plants face continuous challenges in maintaining safe, clean, and compliant operating environments. Leaks, emissions, and equipment failures can lead to environmental violations and safety hazards.',
    approach: 'Spectrum provides comprehensive solutions combining quality mechanical seals, reliable pumps, and protective coatings to create leak-free, environmentally responsible plant operations. Our technical support helps identify and address potential issues before they become problems.',
    relatedProducts: ['Mechanical Seals', 'Support Systems', 'Industrial Pumps', 'Protective Coatings'],
  },
  {
    icon: Shield,
    title: 'Corrosion Protection Solutions',
    problem: 'Corrosion costs industries billions annually, causing equipment failure, safety risks, and production downtime. Aggressive chemicals, humid environments, and harsh conditions accelerate metal degradation.',
    approach: 'Our corrosion-resistant paints and coatings provide long-lasting protection for tanks, pipes, structural steel, and equipment. We offer solutions for various environments including chemical exposure, marine conditions, and high humidity.',
    relatedProducts: ['Corrosion-Resistant Paints', 'Epoxy Coatings', 'Chemical-Resistant Linings', 'Marine Coatings'],
  },
  {
    icon: Thermometer,
    title: 'Heat-Resistant & Insulation Solutions',
    problem: 'High-temperature processes damage conventional materials, leading to frequent maintenance, energy loss, and potential safety hazards. Heat transfer inefficiency increases operating costs.',
    approach: 'Spectrum offers specialized heat-resistant paints and insulation coatings that withstand extreme temperatures while improving energy efficiency. Our solutions protect equipment and reduce heat loss in furnaces, boilers, and hot process equipment.',
    relatedProducts: ['Heat-Resistant Paints', 'Thermal Insulation Coatings', 'High-Temperature Seals', 'Refractory Coatings'],
  },
  {
    icon: Zap,
    title: 'Antistatic & Electrical Insulation',
    problem: 'Static electricity in industrial environments poses fire and explosion risks, especially when handling flammable materials. Electrical equipment requires proper insulation to prevent shorts and ensure safety.',
    approach: 'Our antistatic paints dissipate static buildup safely, while electrical insulation coatings protect equipment and personnel. These solutions are critical for pharmaceutical, chemical, and electronics manufacturing.',
    relatedProducts: ['Antistatic Paints', 'Electrical Insulation Coatings', 'Conductive Flooring', 'ESD Solutions'],
  },
  {
    icon: Gauge,
    title: 'Pump Efficiency & Reliability',
    problem: 'Pump failures cause unplanned downtime, production losses, and costly emergency repairs. Inefficient pumps waste energy and increase operating costs significantly over time.',
    approach: 'Spectrum supplies high-quality industrial pumps and genuine spares that maximize reliability and efficiency. Our mechanical seals and support systems extend pump life and reduce maintenance frequency.',
    relatedProducts: ['Industrial Pumps', 'Pump Spares', 'Mechanical Seals', 'Seal Support Systems'],
  },
  {
    icon: Wrench,
    title: 'Maintenance Optimization',
    problem: 'Reactive maintenance leads to unexpected failures and higher costs. Many plants struggle to implement effective preventive maintenance programs due to lack of expertise and proper solutions.',
    approach: 'We help plants transition from reactive to preventive maintenance with quality products that last longer and technical support that identifies maintenance opportunities. Our approach reduces total cost of ownership.',
    relatedProducts: ['Quality Seals', 'Reliable Pumps', 'Protective Coatings', 'Technical Consulting'],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-600 to-steel">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                Our Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Problem-First Industrial Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We don't just sell products — we solve problems. Our solutions are designed 
                to address the real challenges faced by process industries, delivering 
                measurable improvements in safety, efficiency, and reliability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              subtitle="How We Help"
              title="Comprehensive Industrial Solutions"
              description="Each solution addresses specific challenges with a combination of quality products and expert guidance."
            />
          </AnimatedSection>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <SolutionCard {...solution} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                subtitle="Our Approach"
                title="Consultative Solutions, Not Just Products"
                centered={false}
              />
              <div className="space-y-4 text-charcoal-400">
                <p>
                  At Spectrum, we believe in understanding your challenges before recommending 
                  solutions. Our approach combines technical expertise with industry knowledge 
                  to deliver results that matter.
                </p>
                <p>
                  Every solution we provide is backed by:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-steel rounded-full mt-2" />
                    <span><strong>Technical Assessment</strong> — Understanding your specific requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-steel rounded-full mt-2" />
                    <span><strong>Product Selection</strong> — Recommending the right solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-steel rounded-full mt-2" />
                    <span><strong>Implementation Support</strong> — Helping you get it right</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-steel rounded-full mt-2" />
                    <span><strong>Ongoing Partnership</strong> — Continuous support and optimization</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="bg-gradient-to-br from-navy to-steel rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Our Solutions Work</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Deep Industry Knowledge</h4>
                      <p className="text-gray-300 text-sm">25+ years of experience across process industries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quality-First Products</h4>
                      <p className="text-gray-300 text-sm">Only proven, reliable products from trusted sources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Technical Excellence</h4>
                      <p className="text-gray-300 text-sm">Expert engineering support at every step</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Results-Focused</h4>
                      <p className="text-gray-300 text-sm">Measurable improvements in your operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        title="Have a Challenge We Can Solve?"
        description="Let's discuss your specific requirements and find the right solution together."
        buttonText="Start the Conversation"
      />
    </>
  );
}
