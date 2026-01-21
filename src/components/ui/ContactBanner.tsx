import Link from 'next/link';

interface ContactBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function ContactBanner({
  title = 'Looking for Reliable Industrial Solutions?',
  description = 'Partner with Spectrum for quality mechanical seals, pumps, specialized coatings, and expert technical support.',
  buttonText = 'Connect with Spectrum',
}: ContactBannerProps) {
  return (
    <section className="bg-gradient-to-r from-navy to-steel py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-gray-200 text-lg max-w-2xl">{description}</p>
          </div>
          <Link
            href="/connect"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy font-semibold rounded-md 
                       hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
