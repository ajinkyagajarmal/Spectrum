'use client';

const clients = [
  { name: 'PharmaCorp', industry: 'Pharmaceutical' },
  { name: 'ChemTech Industries', industry: 'Chemical' },
  { name: 'AgroSolutions', industry: 'Agrochemical' },
  { name: 'FoodPro Manufacturing', industry: 'Food Processing' },
  { name: 'AutoParts Global', industry: 'Automobile' },
  { name: 'MineEx Resources', industry: 'Mining' },
  { name: 'MarineWorks Ltd', industry: 'Marine' },
  { name: 'ProcessFlow Inc', industry: 'Process Industries' },
  { name: 'BioPharm Solutions', industry: 'Pharmaceutical' },
  { name: 'ChemProcess Global', industry: 'Chemical' },
];

export default function ClientCarousel() {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-logo-scroll">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex flex-col items-center justify-center"
          >
            <div className="w-32 h-20 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center px-4 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-navy font-bold text-sm">{client.name}</div>
                <div className="text-xs text-charcoal-400 mt-1">{client.industry}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
