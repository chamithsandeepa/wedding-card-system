'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RSVPFormProps {
  rsvpSheetUrl: string;
  colors: {
    bg: string;
    text: string;
    accent: string;
    buttonText: string;
  };
}

export function RSVPForm({ rsvpSheetUrl, colors }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    meal: 'Standard',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(rsvpSheetUrl, {
        method: 'POST',
        mode: 'no-cors', // Common for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setStatus('success');
    } catch (error) {
      console.error('RSVP Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full px-6 py-10" style={{ background: colors.bg }}>
      <h3 className="text-xl text-center mb-8 italic" style={{ color: colors.text, fontFamily: 'var(--font-heading)' }}>
        Kindly RSVP
      </h3>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6 border rounded-lg"
            style={{ borderColor: colors.accent, color: colors.text }}
          >
            <p className="text-lg mb-2">Thank you!</p>
            <p className="text-sm opacity-80">Your response has been received.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-1 opacity-70" style={{ color: colors.text }}>
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b py-2 focus:outline-none transition-colors"
                style={{ borderColor: `${colors.accent}40`, color: colors.text }}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer" style={{ color: colors.text }}>
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === 'yes'}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="accent-[var(--color-rose)]"
                />
                <span className="text-sm">Joyfully Attend</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer" style={{ color: colors.text }}>
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="accent-[var(--color-rose)]"
                />
                <span className="text-sm">Regretfully Decline</span>
              </label>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-1 opacity-70" style={{ color: colors.text }}>
                Meal Preference
              </label>
              <select
                className="w-full bg-transparent border-b py-2 focus:outline-none appearance-none"
                style={{ borderColor: `${colors.accent}40`, color: colors.text }}
                value={formData.meal}
                onChange={(e) => setFormData({ ...formData, meal: e.target.value })}
              >
                <option value="Standard">Standard</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-1 opacity-70" style={{ color: colors.text }}>
                Message (Optional)
              </label>
              <textarea
                className="w-full bg-transparent border-b py-2 focus:outline-none resize-none"
                rows={2}
                style={{ borderColor: `${colors.accent}40`, color: colors.text }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              disabled={status === 'submitting'}
              className="w-full py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300 disabled:opacity-50"
              style={{ backgroundColor: colors.accent, color: colors.buttonText }}
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit RSVP'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
