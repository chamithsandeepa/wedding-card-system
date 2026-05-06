import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { brideName, groomName, weddingDate, venue, package: pkg, phone, message } = parsed.data;

    // Send email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const emailBody = {
        from: 'LoveLink Enquiries <noreply@lovelink.lk>',
        to: ['hello@lovelink.lk'],
        subject: `New Wedding Invitation Enquiry — ${brideName} & ${groomName}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FDFAF6; border-radius: 12px;">
            <h1 style="color: #C9A96E; font-size: 28px; margin-bottom: 4px;">New Enquiry ♡</h1>
            <p style="color: #7A7A7A; font-size: 14px; margin-bottom: 24px;">A couple has submitted an enquiry via the LoveLink website.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #7A7A7A; font-size: 13px; width: 130px;">Bride's Name</td><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #2C2C2C; font-size: 14px; font-weight: 600;">${brideName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #7A7A7A; font-size: 13px;">Groom's Name</td><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #2C2C2C; font-size: 14px; font-weight: 600;">${groomName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #7A7A7A; font-size: 13px;">Wedding Date</td><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #2C2C2C; font-size: 14px;">${weddingDate}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #7A7A7A; font-size: 13px;">Venue</td><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #2C2C2C; font-size: 14px;">${venue || '—'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #7A7A7A; font-size: 13px;">Package</td><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #C9A96E; font-size: 14px; font-weight: 600; text-transform: capitalize;">${pkg}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #7A7A7A; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #F4E4E0; color: #2C2C2C; font-size: 14px;">${phone}</td></tr>
              ${message ? `<tr><td style="padding: 10px 0; color: #7A7A7A; font-size: 13px; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #2C2C2C; font-size: 14px;">${message}</td></tr>` : ''}
            </table>

            <div style="margin-top: 28px; padding: 16px; background: #F4E4E0; border-radius: 8px; text-align: center;">
              <p style="color: #7A7A7A; font-size: 12px; margin: 0;">Submitted via LoveLink · lovelink.lk</p>
            </div>
          </div>
        `,
      };

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailBody),
      });
    }

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
