'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, MessageCircle, Loader2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { contactFormSchema, type ContactFormSchema } from '@/lib/validations';
import { SITE_CONFIG } from '@/lib/constants';
import { cn, getWhatsAppUrl } from '@/lib/utils';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

function InputField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[var(--color-charcoal)]">
        {label}
        {required && <span className="text-[var(--color-rose)] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError?: boolean) =>
  cn(
    'w-full px-4 py-3 rounded-xl border text-sm text-[var(--color-charcoal)] bg-white outline-none transition-all duration-200',
    'placeholder:text-[var(--color-muted)]/50',
    'focus:border-[var(--color-rose)] focus:ring-2 focus:ring-[var(--color-rose)]/15',
    hasError
      ? 'border-red-400 bg-red-50/30'
      : 'border-[var(--color-blush)] hover:border-[var(--color-rose)]/40'
  );

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { package: 'standard' },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const whatsappUrl = getWhatsAppUrl(
    SITE_CONFIG.whatsappNumber,
    "Hi LoveLink! I'd like to start my wedding invitation. Can you help me?"
  );

  return (
    <section id="contact" className="py-24 bg-[var(--color-ivory)]" aria-label="Contact form">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[var(--color-rose)] mb-3 font-medium">
            Get Started
          </p>
          <h2
            className="text-[clamp(2.2rem,5vw,3.5rem)] italic text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Start Your Invitation
          </h2>
          <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto">
            Fill in your details and we&apos;ll get back to you within a few hours.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-3xl border border-[var(--color-blush)] shadow-sm p-8 md:p-10">
            {/* Success state */}
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-charcoal)]">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm max-w-xs">
                    Thank you! We&apos;ll reach out to you within a few hours to discuss your beautiful invitation.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  noValidate
                >
                  {/* Names row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Bride's Name" error={errors.brideName?.message} required>
                      <input
                        {...register('brideName')}
                        type="text"
                        placeholder="e.g. Kumari"
                        className={inputClass(!!errors.brideName)}
                        id="brideName"
                        aria-label="Bride's name"
                      />
                    </InputField>
                    <InputField label="Groom's Name" error={errors.groomName?.message} required>
                      <input
                        {...register('groomName')}
                        type="text"
                        placeholder="e.g. Nimal"
                        className={inputClass(!!errors.groomName)}
                        id="groomName"
                        aria-label="Groom's name"
                      />
                    </InputField>
                  </div>

                  {/* Date and venue row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Wedding Date" error={errors.weddingDate?.message} required>
                      <input
                        {...register('weddingDate')}
                        type="date"
                        className={inputClass(!!errors.weddingDate)}
                        id="weddingDate"
                        aria-label="Wedding date"
                      />
                    </InputField>
                    <InputField label="Venue" error={errors.venue?.message}>
                      <input
                        {...register('venue')}
                        type="text"
                        placeholder="e.g. Grand Ballroom, Colombo"
                        className={inputClass(!!errors.venue)}
                        id="venue"
                        aria-label="Wedding venue"
                      />
                    </InputField>
                  </div>

                  {/* Package and phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Package" error={errors.package?.message} required>
                      <select
                        {...register('package')}
                        className={inputClass(!!errors.package)}
                        id="package"
                        aria-label="Select a package"
                      >
                        <option value="basic">Basic — LKR 3,500</option>
                        <option value="standard">Standard — LKR 9,000</option>
                        <option value="premium">Premium — LKR 22,000</option>
                      </select>
                    </InputField>
                    <InputField label="Phone Number" error={errors.phone?.message} required>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+94 77 123 4567"
                        className={inputClass(!!errors.phone)}
                        id="phone"
                        aria-label="Phone number"
                      />
                    </InputField>
                  </div>

                  {/* Message */}
                  <InputField label="Message" error={errors.message?.message}>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Any special requests, colour preferences or additional details..."
                      className={cn(inputClass(!!errors.message), 'resize-none')}
                      id="message"
                      aria-label="Additional message"
                    />
                  </InputField>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try WhatsApp instead.
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full justify-center"
                    aria-label="Submit your invitation request"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Enquiry
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* WhatsApp alternative */}
          <div className="mt-8 text-center">
            <p className="text-[var(--color-muted)] text-sm mb-3">
              Prefer to chat directly?
            </p>
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message LoveLink on WhatsApp"
            >
              <MessageCircle size={16} />
              Message us directly on WhatsApp →
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
