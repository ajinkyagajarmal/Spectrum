import { LucideIcon } from 'lucide-react';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CapabilityCard({
  icon: Icon,
  title,
  description,
}: CapabilityCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="w-14 h-14 bg-navy/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-charcoal-400 leading-relaxed">{description}</p>
    </div>
  );
}
