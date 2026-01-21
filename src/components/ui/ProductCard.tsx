import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  applications: string[];
  industries: string[];
  image?: string;
}

export default function ProductCard({
  icon: Icon,
  title,
  description,
  applications,
  industries,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
            <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-lg font-bold text-navy">{title}</h3>
        </div>
        
        <p className="text-charcoal-400 text-sm mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wide mb-2">
            Applications
          </h4>
          <div className="flex flex-wrap gap-1">
            {applications.slice(0, 3).map((app, index) => (
              <span
                key={index}
                className="inline-block px-2 py-0.5 bg-steel/10 text-steel text-xs rounded"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wide mb-2">
            Industries
          </h4>
          <p className="text-xs text-charcoal-400">{industries.join(' • ')}</p>
        </div>
      </div>
    </div>
  );
}
