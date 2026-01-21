import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  problem: string;
  approach: string;
  relatedProducts: string[];
}

export default function SolutionCard({
  icon: Icon,
  title,
  problem,
  approach,
  relatedProducts,
}: SolutionCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-navy to-steel rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-navy mb-4">{title}</h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-2">
                The Challenge
              </h4>
              <p className="text-charcoal-400">{problem}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-2">
                Our Approach
              </h4>
              <p className="text-charcoal-400">{approach}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-2">
                Related Products
              </h4>
              <div className="flex flex-wrap gap-2">
                {relatedProducts.map((product, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-steel/10 text-steel text-sm rounded-full"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
