import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  challenges: string[];
  href?: string;
}

export default function IndustryCard({
  icon: Icon,
  title,
  description,
  challenges,
  href = '/connect',
}: IndustryCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
      <div className="h-2 bg-gradient-to-r from-navy to-steel" />
      <div className="p-8">
        <div className="w-14 h-14 bg-steel/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-steel transition-colors duration-300">
          <Icon className="w-7 h-7 text-steel group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
        <p className="text-charcoal-400 mb-4">{description}</p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-navy mb-2">Key Challenges:</h4>
          <ul className="space-y-1">
            {challenges.map((challenge, index) => (
              <li key={index} className="text-sm text-charcoal-400 flex items-start">
                <span className="w-1.5 h-1.5 bg-steel rounded-full mt-2 mr-2 flex-shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={href}
          className="inline-flex items-center text-steel font-semibold hover:text-navy transition-colors group-hover:underline"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
