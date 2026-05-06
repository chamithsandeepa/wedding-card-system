import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LoveLink — Digital Wedding Invitations in Sri Lanka',
  description:
    'Beautiful animated digital wedding invitations with RSVP, music, countdown and more. Delivered in 24 hours as a shareable link.',
  keywords: [
    'digital wedding invitation',
    'Sri Lanka',
    'wedding card',
    'online invitation',
    'RSVP',
    'wedding link',
    'e-invite',
    'digital e-card',
  ],
  authors: [{ name: 'LoveLink', url: 'https://lovelink.lk' }],
  creator: 'LoveLink',
  publisher: 'LoveLink',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lovelink.lk'),
  openGraph: {
    title: 'LoveLink — Digital Wedding Invitations',
    description:
      'Beautiful animated digital wedding invitations with RSVP, music, countdown and more. Delivered in 24 hours as a shareable link.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LoveLink — Digital Wedding Invitations in Sri Lanka',
      },
    ],
    type: 'website',
    locale: 'en_LK',
    siteName: 'LoveLink',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoveLink — Digital Wedding Invitations',
    description:
      'Beautiful animated digital wedding invitations with RSVP, music, countdown and more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <body className="font-body antialiased" style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </body>
    </html>
  );
}
