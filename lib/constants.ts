import type {
  PricingTier,
  FAQItem,
  Testimonial,
  Feature,
  HowItWorksStep,
  InvitationStyle,
  NavLink,
  FooterColumn,
} from '@/types';

// ─── Site Config ────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: 'LoveLink',
  tagline: 'Beautiful Digital Wedding Invitations',
  description:
    'Beautiful animated digital wedding invitations with RSVP, music, countdown and more. Delivered in 24 hours as a shareable link.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lovelink.lk',
  whatsappNumber: process.env.WHATSAPP_NUMBER || '94710851570',
  whatsappUrl: `https://wa.me/${process.env.WHATSAPP_NUMBER || '94710851570'}`,
  email: 'chamithsandeepa321@gmail.com',
  instagram: 'https://instagram.com/lovelinklk',
  facebook: 'https://facebook.com/lovelinklk',
  tiktok: 'https://tiktok.com/@lovelinklk',
};

// ─── Nav Links ───────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

// ─── Footer Columns ──────────────────────────────────────────────────────────

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Digital Invitations', href: '#' },
      { label: 'RSVP Management', href: '#' },
      { label: 'Custom Design', href: '#' },
      { label: 'WhatsApp Sharing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Work', href: '#' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'chamithsandeepa321@gmail.com', href: 'mailto:chamithsandeepa321@gmail.com' },
      { label: '+94 71 085 1570', href: 'tel:+94710851570' },
      { label: 'Colombo, Sri Lanka', href: '#' },
      { label: 'WhatsApp Us', href: SITE_CONFIG.whatsappUrl },
    ],
  },
];

// ─── How It Works Steps ───────────────────────────────────────────────────────

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 'step-1',
    number: '01',
    icon: 'FileText',
    title: 'Fill the Form',
    description:
      'Share your wedding details — names, date, venue, and your favourite style. Takes just 2 minutes.',
  },
  {
    id: 'step-2',
    number: '02',
    icon: 'Palette',
    title: 'We Design It',
    description:
      'Our designers craft your personalised digital invitation, tailored to your chosen package — delivered within 24 hours.',
  },
  {
    id: 'step-3',
    number: '03',
    icon: 'Share2',
    title: 'Share Your Link',
    description:
      'Receive a beautiful shareable link. Send it via WhatsApp, social media, or email to every guest effortlessly.',
  },
];

// ─── Features ────────────────────────────────────────────────────────────────

export const FEATURES: Feature[] = [
  {
    id: 'rsvp',
    icon: 'ClipboardList',
    title: 'Live RSVP Tracking',
    description:
      'Guests confirm attendance with a tap. View real-time responses from your personalised dashboard.',
  },
  {
    id: 'music',
    icon: 'Music2',
    title: 'Background Music Player',
    description:
      'Set the mood with your favourite song playing softly as guests open the invitation.',
  },
  {
    id: 'countdown',
    icon: 'Timer',
    title: 'Countdown Timer',
    description:
      'A live countdown to your wedding day builds excitement with every visit to the invitation.',
  },
  {
    id: 'gallery',
    icon: 'Images',
    title: 'Photo Gallery Slideshow',
    description:
      'Showcase your love story with a beautiful embedded gallery of your favourite photos.',
  },
  {
    id: 'qr',
    icon: 'QrCode',
    title: 'QR Code Generation',
    description:
      'Automatically generate a scannable QR code — perfect for printing on physical cards.',
  },
  {
    id: 'whatsapp',
    icon: 'MessageCircle',
    title: 'WhatsApp Share Optimised',
    description:
      'Designed to render beautifully when shared via WhatsApp, with rich preview cards.',
  },
];

// ─── Pricing Tiers ───────────────────────────────────────────────────────────

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'LKR 3,500',
    priceNote: 'One-time',
    highlighted: false,
    whatsappMessage:
      "Hi LoveLink! I'm interested in the *Basic* package (LKR 3,500) for my wedding. Please share more details.",
    features: [
      { label: 'Template', value: '1 Classic Template' },
      { label: 'RSVP', value: false },
      { label: 'Music Player', value: false },
      { label: 'Countdown Timer', value: true },
      { label: 'Photo Gallery', value: false },
      { label: 'Revisions', value: '1 Revision' },
      { label: 'Hosting', value: '3 Months' },
      { label: 'QR Code', value: false },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 'LKR 9,000',
    priceNote: 'One-time',
    highlighted: true,
    badge: 'Most Popular',
    whatsappMessage:
      "Hi LoveLink! I'm interested in the *Standard* package (LKR 9,000) for my wedding. Please share more details.",
    features: [
      { label: 'Template', value: 'Choice of 5 Templates' },
      { label: 'RSVP', value: true },
      { label: 'Music Player', value: true },
      { label: 'Countdown Timer', value: true },
      { label: 'Photo Gallery', value: false },
      { label: 'Revisions', value: '3 Revisions' },
      { label: 'Hosting', value: '6 Months' },
      { label: 'QR Code', value: true },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'LKR 22,000',
    priceNote: 'One-time',
    highlighted: false,
    whatsappMessage:
      "Hi LoveLink! I'm interested in the *Premium* package (LKR 22,000) for my wedding. Please share more details.",
    features: [
      { label: 'Template', value: 'Fully Custom Design' },
      { label: 'RSVP', value: true },
      { label: 'Music Player', value: true },
      { label: 'Countdown Timer', value: true },
      { label: 'Photo Gallery', value: '30 Photos' },
      { label: 'Revisions', value: 'Unlimited' },
      { label: 'Hosting', value: '1 Year' },
      { label: 'QR Code', value: true },
    ],
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    coupleName: 'Nimal & Kumari',
    weddingDate: 'February 14, 2025',
    rating: 5,
    quote:
      'LoveLink created the most breathtaking invitation. Our guests were blown away — everyone asked how we did it!',
    location: 'Colombo',
    initials: 'NK',
    gradientFrom: '#C9A96E',
    gradientTo: '#E8C99A',
  },
  {
    id: 'test-2',
    coupleName: 'Rajan & Priya',
    weddingDate: 'March 22, 2025',
    rating: 5,
    quote:
      'The RSVP feature saved us so much time. We could track responses in real-time and the countdown timer was magical.',
    location: 'Kandy',
    initials: 'RP',
    gradientFrom: '#8A9E85',
    gradientTo: '#B5C9B1',
  },
  {
    id: 'test-3',
    coupleName: 'Chamara & Dilini',
    weddingDate: 'April 5, 2025',
    rating: 5,
    quote:
      "Delivered in less than 24 hours and it was absolutely perfect. The floral design matched our wedding theme beautifully.",
    location: 'Galle',
    initials: 'CD',
    gradientFrom: '#E8A0C9',
    gradientTo: '#F4C4DC',
  },
  {
    id: 'test-4',
    coupleName: 'Asanka & Madhavi',
    weddingDate: 'May 18, 2025',
    rating: 5,
    quote:
      'The background music brought tears to my eyes when I first opened it. Worth every rupee — absolute perfection.',
    location: 'Negombo',
    initials: 'AM',
    gradientFrom: '#9E8AC9',
    gradientTo: '#C4B5E8',
  },
  {
    id: 'test-5',
    coupleName: 'Kasun & Thilini',
    weddingDate: 'June 7, 2025',
    rating: 5,
    quote:
      'Sharing via WhatsApp was seamless. The preview card looked gorgeous and all our relatives abroad loved it.',
    location: 'Matara',
    initials: 'KT',
    gradientFrom: '#C9A96E',
    gradientTo: '#8A9E85',
  },
  {
    id: 'test-6',
    coupleName: 'Dilan & Sandya',
    weddingDate: 'July 12, 2025',
    rating: 5,
    quote:
      'We chose the Premium package and the custom design exceeded our wildest expectations. Highly recommend!',
    location: 'Kurunegala',
    initials: 'DS',
    gradientFrom: '#C96E9E',
    gradientTo: '#E8A0C4',
  },
];

// ─── FAQ Items ────────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does delivery take?',
    answer:
      'We deliver your completed digital invitation within 24 hours of receiving all your wedding details and payment. For Premium custom packages, delivery may take up to 48 hours depending on complexity.',
  },
  {
    id: 'faq-2',
    question: 'Can I customise the colours and fonts?',
    answer:
      'Yes! All packages include colour customisation to match your wedding palette. Font customisation is available on Standard and Premium packages. The Premium package includes a fully bespoke design tailored entirely to your vision.',
  },
  {
    id: 'faq-3',
    question: 'How do guests RSVP?',
    answer:
      'Guests simply tap the RSVP button on your invitation, fill in their name and attendance status, and submit. You receive an instant notification and can view all responses from your dashboard. RSVP is included in Standard and Premium packages.',
  },
  {
    id: 'faq-4',
    question: 'How long is the invitation link active?',
    answer:
      'Link active duration depends on your package: Basic (3 months), Standard (6 months), Premium (1 year). You can extend hosting at any time for a small fee.',
  },
  {
    id: 'faq-5',
    question: 'Can I update content after delivery?',
    answer:
      'Yes, you can request content updates (venue, time changes etc.) within your revision allowance. Basic includes 1 revision, Standard includes 3 revisions, and Premium includes unlimited revisions.',
  },
  {
    id: 'faq-6',
    question: 'Do you offer invitations in Sinhala or Tamil?',
    answer:
      'Absolutely! We design beautiful invitations in Sinhala, Tamil, and English — or a combination of all three. Simply specify your preferred language(s) when you place your order.',
  },
  {
    id: 'faq-7',
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers (all major Sri Lankan banks), online card payments, and cash payments in Colombo. Payment details are shared via WhatsApp after you place your order.',
  },
  {
    id: 'faq-8',
    question: 'Can I see a demo before ordering?',
    answer:
      'Yes! You can view our live demo cards right on this page. We also share a personalised preview via WhatsApp before final delivery, so you can approve the design before it goes live.',
  },
];

// ─── Invitation Demo Styles ───────────────────────────────────────────────────

export const INVITATION_STYLES: InvitationStyle[] = [
  {
    id: 'classic',
    name: 'Classic Elegance',
    description: 'Timeless navy & gold with serif typography',
    bgColor: '#1B2A4A',
    textColor: '#F0E6C8',
    accentColor: '#C9A96E',
    borderStyle: 'border-[#C9A96E]',
  },
  {
    id: 'floral',
    name: 'Floral Romance',
    description: 'Soft white with illustrated rose accents',
    bgColor: '#FDF8F5',
    textColor: '#5A3A4A',
    accentColor: '#D4829A',
    borderStyle: 'border-[#D4829A]',
  },
  {
    id: 'minimal',
    name: 'Modern Minimal',
    description: 'Clean cream with thin elegant lines',
    bgColor: '#F9F7F4',
    textColor: '#2C2C2C',
    accentColor: '#8A9E85',
    borderStyle: 'border-[#2C2C2C]',
  },
];
