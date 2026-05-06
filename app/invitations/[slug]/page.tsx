import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { INVITATION_DATA } from '@/lib/invitation-data';
import ClassicTemplate from '../templates/classic/page';
import FloralTemplate from '../templates/floral/page';
import MinimalTemplate from '../templates/minimal/page';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = INVITATION_DATA[slug];

  if (!data) return {};

  return {
    title: `${data.bride} & ${data.groom}'s Wedding`,
    description: `You are cordially invited to celebrate the wedding of ${data.bride} and ${data.groom} on ${new Date(data.date).toLocaleDateString()}.`,
    openGraph: {
      title: `${data.bride} & ${data.groom}'s Wedding`,
      description: `Join us for our wedding celebration at ${data.venue}.`,
      images: data.photos[0] ? [{ url: data.photos[0] }] : [{ url: '/og-image.png' }],
    },
  };
}

export default async function InvitationPage({ params }: PageProps) {
  const { slug } = await params;
  const data = INVITATION_DATA[slug];

  if (!data) {
    notFound();
  }

  // Render the correct template based on templateType
  switch (data.templateType) {
    case 'classic':
      return <ClassicTemplate data={data} />;
    case 'floral':
      return <FloralTemplate data={data} />;
    case 'minimal':
      return <MinimalTemplate data={data} />;
    default:
      return <ClassicTemplate data={data} />;
  }
}
