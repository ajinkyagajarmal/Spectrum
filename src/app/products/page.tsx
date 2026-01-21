import { Settings, Droplets, Gauge, Paintbrush, Shield, Thermometer, Zap, CircuitBoard } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductCard from '@/components/ui/ProductCard';
import ContactBanner from '@/components/ui/ContactBanner';

const productCategories = [
  {
    title: 'Mechanical Seals & Support Systems',
    description: 'High-performance sealing solutions for pumps, mixers, and rotating equipment.',
    products: [
      {
        icon: Settings,
        title: 'Single Mechanical Seals',
        description: 'Reliable single seals for standard pump applications with various face materials and elastomers.',
        applications: ['Centrifugal Pumps', 'Process Pumps', 'Mixers'],
        industries: ['Pharmaceutical', 'Chemical', 'Food Processing'],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      },
      {
        icon: Settings,
        title: 'Double Mechanical Seals',
        description: 'Dual seal arrangements for hazardous or critical applications requiring zero leakage.',
        applications: ['Chemical Processing', 'Hazardous Fluids', 'High-Pressure'],
        industries: ['Chemical', 'Petrochemical', 'Pharmaceutical'],
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      },
      {
        icon: Gauge,
        title: 'Seal Support Systems',
        description: 'Complete support systems including flush plans, coolers, and monitoring equipment.',
        applications: ['Seal Cooling', 'Pressure Control', 'Flush Systems'],
        industries: ['All Process Industries'],
        image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
      },
    ],
  },
  {
    title: 'Industrial Pumps & Valves',
    description: 'Complete range of pumps and valves for demanding industrial applications.',
    products: [
      {
        icon: Droplets,
        title: 'Centrifugal Pumps',
        description: 'High-efficiency centrifugal pumps for various flow rates and head requirements.',
        applications: ['Water Transfer', 'Process Fluids', 'Chemical Transfer'],
        industries: ['Chemical', 'Water Treatment', 'Manufacturing'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
      },
      {
        icon: Droplets,
        title: 'Positive Displacement Pumps',
        description: 'Gear, lobe, and progressive cavity pumps for viscous and shear-sensitive fluids.',
        applications: ['Viscous Fluids', 'Metering', 'Food Products'],
        industries: ['Food Processing', 'Pharmaceutical', 'Chemical'],
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop',
      },
      {
        icon: Gauge,
        title: 'Pump Spares & Valves',
        description: 'Genuine replacement parts, impellers, wear rings, and industrial valves.',
        applications: ['Maintenance', 'Upgrades', 'Flow Control'],
        industries: ['All Process Industries'],
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop',
      },
    ],
  },
  {
    title: 'Specialized Industrial Paints',
    description: 'Advanced coating solutions for protection and performance.',
    products: [
      {
        icon: Shield,
        title: 'Corrosion-Resistant Paints',
        description: 'Epoxy and polyurethane coatings for long-term protection against chemical and environmental corrosion.',
        applications: ['Tanks', 'Pipes', 'Structural Steel', 'Equipment'],
        industries: ['Chemical', 'Marine', 'Manufacturing'],
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop',
      },
      {
        icon: Thermometer,
        title: 'Heat-Resistant Paints',
        description: 'High-temperature coatings for furnaces, boilers, exhaust systems, and hot process equipment.',
        applications: ['Furnaces', 'Boilers', 'Exhaust Systems', 'Hot Pipes'],
        industries: ['Steel', 'Power', 'Manufacturing'],
        image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop',
      },
      {
        icon: Zap,
        title: 'Antistatic Paints',
        description: 'Conductive and dissipative coatings to prevent static buildup in hazardous environments.',
        applications: ['Flooring', 'Equipment', 'Storage Areas', 'Clean Rooms'],
        industries: ['Pharmaceutical', 'Electronics', 'Chemical'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      },
      {
        icon: CircuitBoard,
        title: 'Electrical Insulation Coatings',
        description: 'Dielectric coatings for electrical equipment protection and insulation enhancement.',
        applications: ['Motors', 'Transformers', 'Switchgear', 'Cables'],
        industries: ['Power', 'Manufacturing', 'Utilities'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-600 to-steel">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quality Industrial Products
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Spectrum supplies a comprehensive range of industrial products, from mechanical 
                seals and pumps to specialized coatings. Every product is selected for quality, 
                reliability, and performance in demanding applications.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <AnimatedSection>
              <SectionHeader
                subtitle={`Category ${categoryIndex + 1}`}
                title={category.title}
                description={category.description}
              />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, productIndex) => (
                <AnimatedSection key={productIndex} delay={productIndex * 100}>
                  <ProductCard {...product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quality Commitment */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                Quality Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Products You Can Trust
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Every product we supply meets stringent quality standards. We work with 
                trusted manufacturers and conduct thorough quality checks to ensure you 
                receive products that perform reliably in your applications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Quality Tested</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">Genuine</div>
                  <div className="text-gray-300 text-sm">Parts Only</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">Technical</div>
                  <div className="text-gray-300 text-sm">Support Included</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">Fast</div>
                  <div className="text-gray-300 text-sm">Delivery</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Banner */}
      <ContactBanner
        title="Need Product Specifications or Quotes?"
        description="Our technical team can help you select the right products for your application."
        buttonText="Request Product Information"
      />
    </>
  );
}
