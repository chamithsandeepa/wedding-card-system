'use client';

import { motion } from 'framer-motion';
import { CountdownTimer } from '@/components/invitation/CountdownTimer';
import { RSVPForm } from '@/components/invitation/RSVPForm';
import { MusicPlayer } from '@/components/invitation/MusicPlayer';
import { PhotoGallery } from '@/components/invitation/PhotoGallery';
import { ShareButton } from '@/components/invitation/ShareButton';
import { InvitationData } from '@/types/invitation';

const mockData: InvitationData = {
  slug: 'roshan-nethmi',
  bride: 'Nethmi',
  groom: 'Roshan',
  date: '2025-08-10',
  time: '5:30 PM',
  venue: 'Jetwing Blue, Negombo',
  venueAddress: 'Ethukala, Negombo',
  googleMapsUrl: 'https://goo.gl/maps/example',
  photos: [
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8',
    'https://images.unsplash.com/photo-1522673607200-1648832cee98',
  ],
  musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  rsvpSheetUrl: 'https://script.google.com/macros/s/example/exec',
  dressCode: 'Lounge Suit / Cocktail',
  templateType: 'minimal',
};

export default function MinimalTemplate({ data = mockData }: { data?: InvitationData }) {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-start overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[480px] py-24 px-10 flex flex-col items-center"
      >
        <div className="w-full border-t border-black/10 pt-12 mb-12 flex flex-col items-center">
          <p className="text-[#888] text-[10px] uppercase tracking-[0.4em] mb-8">
            The Wedding Celebration of
          </p>
          
          <div className="flex flex-col items-center gap-6 mb-12">
            <h1 className="text-[#1A1A1A] text-[38px] font-normal tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {data.groom}
            </h1>
            <div className="w-6 h-[1px] bg-[#ccc]" />
            <h1 className="text-[#1A1A1A] text-[38px] font-normal tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {data.bride}
            </h1>
          </div>

          <div className="w-full border-t border-black/10 pt-12 text-center space-y-6">
            <div className="space-y-1">
              <p className="text-[#888] text-[10px] uppercase tracking-[0.2em]">When</p>
              <p className="text-[#1A1A1A] text-lg font-light tracking-wide">
                {new Date(data.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </p>
              <p className="text-[#1A1A1A] text-md font-light">{data.time}</p>
            </div>

            <div className="space-y-1">
              <p className="text-[#888] text-[10px] uppercase tracking-[0.2em]">Where</p>
              <p className="text-[#1A1A1A] text-lg font-light tracking-wide">{data.venue}</p>
              <p className="text-[#888] text-xs font-light px-10">{data.venueAddress}</p>
            </div>
          </div>
        </div>

        <div className="w-full mb-12">
          <CountdownTimer 
            targetDate={data.date} 
            colors={{ text: '#1A1A1A', label: '#888', accent: '#1A1A1A' }} 
          />
        </div>

        <div className="w-full mb-12">
          <PhotoGallery photos={data.photos} accentColor="#1A1A1A" />
        </div>

        <div className="w-full mb-12">
          <RSVPForm 
            rsvpSheetUrl={data.rsvpSheetUrl} 
            colors={{ bg: 'transparent', text: '#1A1A1A', accent: '#1A1A1A', buttonText: '#FFFFFF' }} 
          />
        </div>

        <div className="w-full">
          <ShareButton accentColor="#1A1A1A" textColor="#1A1A1A" />
        </div>
      </motion.div>

      <MusicPlayer musicUrl={data.musicUrl} accentColor="#1A1A1A" />
    </main>
  );
}
