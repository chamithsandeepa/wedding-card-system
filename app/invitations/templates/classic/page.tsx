'use client';

import { motion, Variants } from 'framer-motion';
import { CountdownTimer } from '@/components/invitation/CountdownTimer';
import { RSVPForm } from '@/components/invitation/RSVPForm';
import { MusicPlayer } from '@/components/invitation/MusicPlayer';
import { PhotoGallery } from '@/components/invitation/PhotoGallery';
import { ShareButton } from '@/components/invitation/ShareButton';
import { InvitationData } from '@/types/invitation';

const mockData: InvitationData = {
  slug: 'nimal-kumari',
  bride: 'Kumari',
  groom: 'Nimal',
  date: '2025-06-14',
  time: '6:00 PM',
  venue: 'Shangri-La Colombo',
  venueAddress: '1, Centre Road, Galle Face, Colombo 02',
  googleMapsUrl: 'https://goo.gl/maps/example',
  photos: [
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  ],
  musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  rsvpSheetUrl: 'https://script.google.com/macros/s/AKfycbxdrpnfHwpxNBNcq9-McdOw0sUJMwossL7oyIxtoDWNepQJYjvtjPmkgLk3_JfVbOW-/exec',
  dressCode: 'Black Tie / Formal',
  templateType: 'classic',
};

export default function ClassicTemplate({ data = mockData }: { data?: InvitationData }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[#0E1B2E] flex flex-col items-center justify-start overflow-x-hidden relative">
      {/* Centered Mobile Container */}
      <div className="w-full max-w-[480px] min-h-screen relative py-20 px-10 flex flex-col items-center">
        
        {/* Double Inset Border */}
        <div className="absolute inset-[10px] border border-[#C4A054]/30 pointer-events-none" />
        <div className="absolute inset-[20px] border border-[#C4A054]/30 pointer-events-none" />

        {/* Animated Drawing Border (Simplified with CSS) */}
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 border border-[#C4A054] pointer-events-none z-20"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center text-center z-10"
        >
          {/* Ornamental Top Divider */}
          <motion.div variants={item} className="text-[#C4A054] text-xl mb-8">
            ✦ ✦ ✦
          </motion.div>

          <motion.p variants={item} className="text-[#C4A054] text-[10px] uppercase tracking-[0.3em] mb-4">
            The Wedding of
          </motion.p>

          <motion.div variants={item} className="flex flex-col items-center gap-2 mb-8">
            <h1 className="text-[#F5ECD7] text-[40px] italic leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {data.groom}
            </h1>
            <span className="text-[#C4A054] text-3xl font-light">&</span>
            <h1 className="text-[#F5ECD7] text-[40px] italic leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {data.bride}
            </h1>
          </motion.div>

          <motion.hr variants={item} className="w-24 border-[#C4A054]/50 mb-8" />

          <motion.div variants={item} className="space-y-4 mb-10">
            <p className="text-[#F5ECD7] text-[11px] uppercase tracking-[0.25em]">
              {new Date(data.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-[#F5ECD7] text-[11px] uppercase tracking-[0.25em]">
              {data.time}
            </p>
          </motion.div>

          <motion.div variants={item} className="mb-12">
            <p className="text-[#F5ECD7] text-[11px] uppercase tracking-[0.2em] mb-2">
              {data.venue}
            </p>
            <p className="text-[#C4A054] text-[10px] opacity-70 leading-relaxed px-4">
              {data.venueAddress}
            </p>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <CountdownTimer 
              targetDate={data.date} 
              colors={{ text: '#F5ECD7', label: '#C4A054', accent: '#C4A054' }} 
            />
          </motion.div>

          <motion.div variants={item} className="w-full">
            <PhotoGallery photos={data.photos} accentColor="#C4A054" />
          </motion.div>

          <motion.div variants={item} className="w-full">
            <RSVPForm 
              rsvpSheetUrl={data.rsvpSheetUrl} 
              colors={{ bg: 'transparent', text: '#F5ECD7', accent: '#C4A054', buttonText: '#0E1B2E' }} 
            />
          </motion.div>

          {data.dressCode && (
            <motion.div variants={item} className="py-8">
              <p className="text-[#C4A054] text-[10px] uppercase tracking-widest mb-2 opacity-60">Dress Code</p>
              <p className="text-[#F5ECD7] text-sm italic">{data.dressCode}</p>
            </motion.div>
          )}

          <motion.div variants={item} className="w-full">
            <ShareButton accentColor="#C4A054" textColor="#F5ECD7" />
          </motion.div>
        </motion.div>
      </div>

      <MusicPlayer musicUrl={data.musicUrl} accentColor="#C4A054" />
    </main>
  );
}
