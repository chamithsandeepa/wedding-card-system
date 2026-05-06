import { z } from 'zod';

export const contactFormSchema = z.object({
  brideName: z
    .string()
    .min(2, "Bride's name must be at least 2 characters")
    .max(50, "Bride's name must be less than 50 characters"),
  groomName: z
    .string()
    .min(2, "Groom's name must be at least 2 characters")
    .max(50, "Groom's name must be less than 50 characters"),
  weddingDate: z.string().min(1, 'Wedding date is required'),
  venue: z.string().max(100, 'Venue must be less than 100 characters').optional().or(z.literal('')),
  package: z.enum(['basic', 'standard', 'premium'], {
    required_error: 'Please select a package',
  }),
  phone: z
    .string()
    .min(9, 'Phone number must be at least 9 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid phone number'),
  message: z.string().max(500, 'Message must be less than 500 characters').optional().or(z.literal('')),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
