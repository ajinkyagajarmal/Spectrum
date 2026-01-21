# Spectrum - Industrial Solutions Website

A professional, modern, single-page–style website for Spectrum, a B2B manufacturing & industrial solutions company.

## Overview

Spectrum provides comprehensive industrial solutions including:
- **Mechanical Seals & Support Systems** - High-performance sealing solutions
- **Industrial Pumps & Valves** - Complete range for demanding applications  
- **Specialized Industrial Paints** - Corrosion-resistant, heat-resistant, antistatic, electrical insulation
- **Technical Support & Consulting** - Expert engineering guidance

## Industries Served

- Pharmaceutical
- Chemical & Agrochemical
- Food Processing
- Automobile
- Mining
- Marine
- Process Industries

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Montserrat
- **Icons**: Lucide React
- **Language**: TypeScript

## Color Palette

- **Primary (Navy)**: `#0F2A44`
- **Secondary (Steel Blue)**: `#2F5D8A`
- **Neutral (Charcoal)**: `#2B2B2B`

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & Tailwind config
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── industries/page.tsx # Industries page
│   ├── solutions/page.tsx  # Solutions page
│   ├── products/page.tsx   # Products page
│   └── connect/page.tsx    # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Sticky header with navigation
│   │   └── Footer.tsx     # Footer with contact info
│   └── ui/
│       ├── AnimatedSection.tsx  # Scroll animations
│       ├── CapabilityCard.tsx   # Feature cards
│       ├── ClientCarousel.tsx   # Client logos carousel
│       ├── ContactBanner.tsx    # CTA banner
│       ├── IndustryCard.tsx     # Industry feature cards
│       ├── ProductCard.tsx      # Product display cards
│       ├── ScrollToTop.tsx      # Scroll to top button
│       ├── SectionHeader.tsx    # Section titles
│       ├── SolutionCard.tsx     # Solution feature cards
│       └── StatsCounter.tsx     # Animated counters
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Development

The development server runs at `http://localhost:3000`

## Features

### Responsive Design
- Mobile-first approach
- Tested for phones, tablets, and desktops
- Touch-friendly interactions
- Fluid typography and grids

### Animations
- Fade-in on scroll
- Slide-up sections
- Smooth hover effects
- Client logo carousel

### SEO Optimized
- Semantic HTML structure
- Meta tags configured
- OpenGraph support

### Components
- Reusable UI components
- Consistent styling
- Easy to extend

## Pages

1. **Home** - Hero section, capabilities overview, industry preview, client logos
2. **About** - Company story, values, mission, credibility stats
3. **Industries** - Cards for each industry served with challenges
4. **Solutions** - Problem-first approach with related products
5. **Products** - Categorized product listings with details
6. **Connect** - Contact form, business info, map

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette.

### Content
Update the data arrays in each page file to change content.

### Images
Replace Unsplash URLs with actual product/company images.

## License

Private - Spectrum Industrial Solutions
