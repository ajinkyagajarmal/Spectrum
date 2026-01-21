import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FloatingContactButton from '@/components/ui/FloatingContactButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Spectrum | Industrial Solutions & Manufacturing Excellence',
  description: 'Spectrum provides mechanical seals, industrial pumps, specialized paints, and technical support for pharmaceutical, chemical, food processing, and other process industries.',
  keywords: 'mechanical seals, industrial pumps, industrial paints, corrosion resistant, heat resistant, pharmaceutical, chemical, manufacturing',
  authors: [{ name: 'Spectrum' }],
  openGraph: {
    title: 'Spectrum | Industrial Solutions & Manufacturing Excellence',
    description: 'Trusted industrial solutions partner for mechanical seals, pumps, valves, and specialized coatings.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingContactButton />
      </body>
    </html>
  );
}
