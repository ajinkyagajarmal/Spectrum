// import Link from 'next/link';
// import { Settings, Droplets, Paintbrush, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';
// import AnimatedSection from '@/components/ui/AnimatedSection';
// import SectionHeader from '@/components/ui/SectionHeader';
// import CapabilityCard from '@/components/ui/CapabilityCard';
// import ContactBanner from '@/components/ui/ContactBanner';
// import ClientCarousel from '@/components/ui/ClientCarousel';
// import StatsCounter from '@/components/ui/StatsCounter';

// const capabilities = [
//   {
//     icon: Settings,
//     title: 'Mechanical Seals & Support Systems',
//     description: 'High-performance sealing solutions with comprehensive technical support for pumps, mixers, and rotating equipment across all process industries.',
//   },
//   {
//     icon: Droplets,
//     title: 'Industrial Pumps & Valves',
//     description: 'Complete range of industrial pumps, pump spares, and valves engineered for reliability in demanding applications.',
//   },
//   {
//     icon: Paintbrush,
//     title: 'Specialized Industrial Paints',
//     description: 'Advanced coating solutions including corrosion-resistant, heat-resistant, antistatic, and electrical insulation paints for industrial protection.',
//   },
//   {
//     icon: HeadphonesIcon,
//     title: 'Technical Support & Consulting',
//     description: 'Expert engineering consultation and ongoing technical support to optimize your plant operations and maintenance strategies.',
//   },
// ];

// const stats = [
//   { value: 25, suffix: '+', label: 'Years of Experience' },
//   { value: 8, suffix: '+', label: 'Industries Served' },
//   { value: 500, suffix: '+', label: 'Projects Completed' },
//   { value: 98, suffix: '%', label: 'Client Satisfaction' },
// ];

// const features = [
//   'Comprehensive product range for process industries',
//   'Expert technical support and consultation',
//   'Quality-focused solutions with proven reliability',
//   'Long-term partnership approach',
//   'Plant environmental maintenance expertise',
//   'Customized solutions for specific requirements',
// ];

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-600 to-steel pt-20">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }} />
//         </div>
        
//         <div className="container-custom relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection animation="slide-in-left">
//               <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
//                 Trusted Industrial Solutions Partner
//               </span>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//                 Engineering Excellence for{' '}
//                 <span className="text-steel-300">Process Industries</span>
//               </h1>
//               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//                 Spectrum delivers comprehensive industrial solutions — from mechanical seals 
//                 and pumps to specialized coatings — backed by decades of technical expertise 
//                 in maintaining plant environments across critical industries.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="/connect" className="btn-primary text-lg px-8 py-4">
//                   Request a Consultation
//                   <ArrowRight className="w-5 h-5 ml-2 inline" />
//                 </Link>
//                 <Link href="/solutions" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-navy text-lg px-8 py-4">
//                   Explore Solutions
//                 </Link>
//               </div>
//             </AnimatedSection>
            
//             <AnimatedSection animation="slide-in-right" delay={200}>
//               <div className="relative">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//                   <h3 className="text-white font-semibold text-lg mb-6">Why Choose Spectrum?</h3>
//                   <ul className="space-y-4">
//                     {features.map((feature, index) => (
//                       <li key={index} className="flex items-start gap-3 text-gray-200">
//                         <CheckCircle className="w-5 h-5 text-steel-300 mt-0.5 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
        
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white -mt-16 relative z-10">
//         <div className="container-custom">
//           <AnimatedSection>
//             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-24 relative z-20">
//               <StatsCounter stats={stats} />
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Capabilities Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <AnimatedSection>
//             <SectionHeader
//               subtitle="What We Offer"
//               title="Industrial Solutions & Capabilities"
//               description="From mechanical seals to specialized coatings, we provide comprehensive solutions to maintain and protect your industrial operations."
//             />
//           </AnimatedSection>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {capabilities.map((capability, index) => (
//               <AnimatedSection key={index} delay={index * 100}>
//                 <CapabilityCard {...capability} />
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Preview */}
//       <section className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection animation="slide-in-left">
//               <SectionHeader
//                 subtitle="Industries We Serve"
//                 title="Trusted Across Critical Sectors"
//                 description="Spectrum provides solutions for diverse process industries, understanding the unique challenges each sector faces."
//                 centered={false}
//               />
//               <div className="grid grid-cols-2 gap-4 mt-8">
//                 {['Pharmaceutical', 'Chemical', 'Food Processing', 'Automobile', 'Mining', 'Marine'].map((industry, index) => (
//                   <div key={index} className="flex items-center gap-2 text-charcoal">
//                     <div className="w-2 h-2 bg-steel rounded-full" />
//                     <span>{industry}</span>
//                   </div>
//                 ))}
//               </div>
//               <Link href="/industries" className="btn-primary mt-8 inline-flex">
//                 View All Industries
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Link>
//             </AnimatedSection>
            
//             <AnimatedSection animation="slide-in-right" delay={200}>
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-navy to-steel rounded-2xl p-8 text-white">
//                   <h3 className="text-2xl font-bold mb-4 text-white">Industry Expertise</h3>
//                   <p className="text-gray-200 mb-6">
//                     With decades of experience across pharmaceutical, chemical, agrochemical, 
//                     food processing, automobile, mining, and marine industries, we understand 
//                     the specific requirements and regulations of each sector.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-white/10 rounded-lg p-4">
//                       <div className="text-3xl font-bold">8+</div>
//                       <div className="text-sm text-gray-300">Industries</div>
//                     </div>
//                     <div className="bg-white/10 rounded-lg p-4">
//                       <div className="text-3xl font-bold">100+</div>
//                       <div className="text-sm text-gray-300">Clients</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Client Logos */}
//       <section className="py-16 bg-gray-50">
//         <div className="container-custom">
//           <AnimatedSection>
//             <SectionHeader
//               subtitle="Trusted Partners"
//               title="Companies That Trust Spectrum"
//               description="We're proud to partner with leading organizations across various industries."
//             />
//           </AnimatedSection>
//           <ClientCarousel />
//         </div>
//       </section>

//       {/* Contact Banner */}
//       <ContactBanner />
//     </>
//   );
// }

import Link from 'next/link';
import { Settings, Droplets, Paintbrush, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import CapabilityCard from '@/components/ui/CapabilityCard';
import ContactBanner from '@/components/ui/ContactBanner';
import ClientCarousel from '@/components/ui/ClientCarousel';
import StatsCounter from '@/components/ui/StatsCounter';

const capabilities = [
  {
    icon: Settings,
    title: 'Mechanical Seals & Support Systems',
    description: 'High-performance sealing solutions with comprehensive technical support for pumps, mixers, and rotating equipment across all process industries.',
  },
  {
    icon: Droplets,
    title: 'Industrial Pumps & Valves',
    description: 'Complete range of industrial pumps, pump spares, and valves engineered for reliability in demanding applications.',
  },
  {
    icon: Paintbrush,
    title: 'Specialized Industrial Paints',
    description: 'Advanced coating solutions including corrosion-resistant, heat-resistant, antistatic, and electrical insulation paints for industrial protection.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Technical Support & Consulting',
    description: 'Expert engineering consultation and ongoing technical support to optimize your plant operations and maintenance strategies.',
  },
];

const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 8, suffix: '+', label: 'Industries Served' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const features = [
  'Comprehensive product range for process industries',
  'Expert technical support and consultation',
  'Quality-focused solutions with proven reliability',
  'Long-term partnership approach',
  'Plant environmental maintenance expertise',
  'Customized solutions for specific requirements',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-600 to-steel pt-24 pb-16 lg:pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                Trusted Industrial Solutions Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Engineering Excellence for{' '}
                <span className="text-steel-300">Process Industries</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Spectrum delivers comprehensive industrial solutions — from mechanical seals 
                and pumps to specialized coatings — backed by decades of technical expertise 
                in maintaining plant environments across critical industries.
              </p>
              <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/connect" className="btn-primary text-lg px-8 py-4">
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link href="/solutions" className="btn-secondary bg-white !border-navy !text-navy hover:!bg-white hover:!text-navy text-lg px-8 py-4">
                  Explore Solutions
                </Link>
              </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-white font-semibold text-lg mb-6">Why Choose Spectrum?</h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-200">
                        <CheckCircle className="w-5 h-5 text-steel-300 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white -mt-12 md:-mt-16 relative z-10">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 -mt-20 md:-mt-24 relative z-20">
              <StatsCounter stats={stats} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              subtitle="What We Offer"
              title="Industrial Solutions & Capabilities"
              description="From mechanical seals to specialized coatings, we provide comprehensive solutions to maintain and protect your industrial operations."
            />
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <CapabilityCard {...capability} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimatedSection animation="slide-in-left">
              <SectionHeader
                subtitle="Industries We Serve"
                title="Trusted Across Critical Sectors"
                description="Spectrum provides solutions for diverse process industries, understanding the unique challenges each sector faces."
                centered={false}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {['Pharmaceutical', 'Chemical', 'Food Processing', 'Automobile', 'Mining', 'Marine'].map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 text-charcoal">
                    <div className="w-2 h-2 bg-steel rounded-full" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
              <Link href="/industries" className="btn-primary mt-8 inline-flex">
                View All Industries
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-steel rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 text-white">Industry Expertise</h3>
                  <p className="text-gray-200 mb-6">
                    With decades of experience across pharmaceutical, chemical, agrochemical, 
                    food processing, automobile, mining, and marine industries, we understand 
                    the specific requirements and regulations of each sector.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold">8+</div>
                      <div className="text-sm text-gray-300">Industries</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-3xl font-bold">100+</div>
                      <div className="text-sm text-gray-300">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              subtitle="Trusted Partners"
              title="Companies That Trust Spectrum"
              description="We're proud to partner with leading organizations across various industries."
            />
          </AnimatedSection>
          <ClientCarousel />
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner />
    </>
  );
}