'use client';

import { motion, Variants } from 'framer-motion';
import { CountdownTimer } from '@/components/invitation/CountdownTimer';
import { RSVPForm } from '@/components/invitation/RSVPForm';
import { MusicPlayer } from '@/components/invitation/MusicPlayer';
import { PhotoGallery } from '@/components/invitation/PhotoGallery';
import { ShareButton } from '@/components/invitation/ShareButton';
import { FloralCorner } from '@/components/invitation/FloralCorner';
import { InvitationData } from '@/types/invitation';

const mockData: InvitationData = {
  slug: 'ashan-dilini',
  bride: 'Dilini',
  groom: 'Ashan',
  date: '2025-07-20',
  time: '10:30 AM',
  venue: 'Cinnamon Lakeside',
  venueAddress: '115, Sir Chittampalam A. Gardiner Mawatha, Colombo 02',
  googleMapsUrl: 'https://goo.gl/maps/example',
  photos: [
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
    'https://images.unsplash.com/photo-1544078751-58fee2d8a03b',
  ],
  musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  rsvpSheetUrl: 'https://script.google.com/macros/s/AKfycbxdrpnfHwpxNBNcq9-McdOw0sUJMwossL7oyIxtoDWNepQJYjvtjPmkgLk3_JfVbOW-/exec',
  dressCode: 'Smart Casual / Traditional',
  templateType: 'floral',
};

export default function FloralTemplate({ data = mockData }: { data?: InvitationData }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const nameAnimation: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[#FDF8F5] flex flex-col items-center justify-start overflow-x-hidden relative">
      <div className="w-full max-w-[480px] min-h-screen relative py-20 px-8 flex flex-col items-center">
        
        {/* Corner Decorations */}
        <FloralCorner position="top-left" color="#D4829A" />
        <FloralCorner position="top-right" color="#D4829A" />
        <FloralCorner position="bottom-left" color="#D4829A" />
        <FloralCorner position="bottom-right" color="#D4829A" />

        {/* Thin Curved Border */}
        <div className="absolute inset-4 border-[1.5px] border-[#C07878]/25 rounded-[2px] pointer-events-none" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center text-center z-10"
        >
          <motion.p variants={nameAnimation} className="text-[#9E6E6E] text-[10px] uppercase tracking-[0.2em] mb-6">
            Please join us for the wedding of
          </motion.p>

          <motion.div variants={nameAnimation} className="space-y-2 mb-6">
            <h1 className="text-[#5C3D3D] text-[42px] italic leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {data.groom}
            </h1>
            
            {/* Rose SVG Divider */}
            <div className="flex justify-center py-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C10 4 8 6 8 8C8 10 10 12 12 16C14 12 16 10 16 8C16 6 14 4 12 4Z" fill="#D4829A" fillOpacity="0.4" />
                <path d="M12 14C11 14 10 13 10 12C10 11 11 10 12 10C13 10 14 11 14 12C14 13 13 14 12 14Z" fill="#D4829A" />
              </svg>
            </div>

            <h1 className="text-[#5C3D3D] text-[42px] italic leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {data.bride}
            </h1>
          </motion.div>

          <motion.div variants={nameAnimation} className="space-y-1 mb-8">
            <p className="text-[#5C3D3D] text-lg font-medium">
              {new Date(data.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <p className="text-[#9E6E6E] text-sm tracking-wide">
              at {data.time}
            </p>
          </motion.div>

          <motion.div variants={nameAnimation} className="mb-10">
            <p className="text-[#5C3D3D] text-md mb-1 font-medium">
              {data.venue}
            </p>
            <p className="text-[#9E6E6E] text-xs leading-relaxed px-6">
              {data.venueAddress}
            </p>
          </motion.div>

          <motion.div variants={nameAnimation} className="w-full">
            <CountdownTimer 
              targetDate={data.date} 
              colors={{ text: '#5C3D3D', label: '#9E6E6E', accent: '#D4829A' }} 
            />
          </motion.div>

          <motion.div variants={nameAnimation} className="w-full">
            <PhotoGallery photos={data.photos} accentColor="#D4829A" />
          </motion.div>

          <motion.div variants={nameAnimation} className="w-full">
            <RSVPForm 
              rsvpSheetUrl={data.rsvpSheetUrl} 
              colors={{ bg: '#FDF8F5', text: '#5C3D3D', accent: '#D4829A', buttonText: '#FFFFFF' }} 
            />
          </motion.div>

          <motion.div variants={nameAnimation} className="w-full">
            <ShareButton accentColor="#D4829A" textColor="#5C3D3D" />
          </motion.div>
        </motion.div>
      </div>

      <MusicPlayer musicUrl={data.musicUrl} accentColor="#D4829A" />
    </main>
  );
}
