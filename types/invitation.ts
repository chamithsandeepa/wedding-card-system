export interface InvitationData {
  slug: string;
  bride: string;
  groom: string;
  date: string;           // ISO format "2025-06-14"
  time: string;           // "6:00 PM"
  venue: string;
  venueAddress: string;
  googleMapsUrl: string;
  photos: string[];       // array of image URLs
  musicUrl?: string;      // optional background music URL
  rsvpSheetUrl: string;   // Google Apps Script endpoint
  dressCode?: string;
  templateType: 'classic' | 'floral' | 'minimal';
}
