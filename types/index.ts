// Pricing
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  features: PricingFeature[];
  highlighted?: boolean;
  badge?: string;
  whatsappMessage: string;
}

export interface PricingFeature {
  label: string;
  value: string | boolean;
}

// FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  coupleName: string;
  weddingDate: string;
  rating: number;
  quote: string;
  location?: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
}

// Feature
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// How It Works step
export interface HowItWorksStep {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
}

// Demo invitation style
export interface InvitationStyle {
  id: string;
  name: string;
  description: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  borderStyle: string;
  previewImage?: string;
}

// Contact form
export interface ContactFormData {
  brideName: string;
  groomName: string;
  weddingDate: string;
  venue: string;
  package: 'basic' | 'standard' | 'premium';
  phone: string;
  message?: string;
}

// Nav link
export interface NavLink {
  label: string;
  href: string;
}

// Social link
export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

// Footer column
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
