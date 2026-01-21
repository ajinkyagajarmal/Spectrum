interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
            light ? 'text-steel-300' : 'text-steel'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-gray-300' : 'text-charcoal-400'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
