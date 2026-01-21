'use client';

import { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  light?: boolean;
}

export default function StatsCounter({ stats, light = false }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div
            className={`text-4xl md:text-5xl font-bold mb-2 ${
              light ? 'text-white' : 'text-navy'
            }`}
          >
            {isVisible ? (
              <CountUp end={stat.value} suffix={stat.suffix || ''} />
            ) : (
              '0'
            )}
          </div>
          <div className={`text-sm ${light ? 'text-gray-300' : 'text-charcoal-400'}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
