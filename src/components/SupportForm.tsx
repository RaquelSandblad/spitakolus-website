'use client';

import { useState } from 'react';
import { submitIssue } from '@/lib/support-client';

export default function SupportForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Ange en giltig e-postadress så vi kan återkomma.');
      return;
    }

    if (message.trim().length < 10) {
      setError('Skriv minst 10 tecken så vi förstår ditt ärende.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitIssue({
        description: message.trim(),
        userEmail: email.trim(),
        userName: name.trim() || undefined,
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || 'Kunde inte skicka meddelandet. Försök igen.');
      }
    } catch {
      setError('Något gick fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-10 rounded-2xl bg-primary text-white shadow-lg shadow-primary/10">
        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-[24px] font-bold mb-3">Tack — vi hör av oss</h2>
        <p className="text-[15px] text-white/85 leading-relaxed mb-2">
          Ditt meddelande är mottaget. Vi svarar till{' '}
          <span className="font-semibold text-white">{email}</span> så snart vi kan.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setName('');
            setEmail('');
            setMessage('');
          }}
          className="mt-6 inline-flex items-center gap-2 px-4 h-10 rounded-xl bg-white/15 hover:bg-white/25 text-white text-[14px] font-medium transition-colors"
        >
          Skicka ett till meddelande
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-10 rounded-2xl bg-primary text-white shadow-lg shadow-primary/10">
      <h2 className="text-[24px] font-bold mb-2">Skriv till oss</h2>
      <p className="text-[14px] text-white/75 mb-6">
        Fyll i dina uppgifter så återkommer vi via e-post.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="sf-name" className="block text-[13px] font-medium text-white/85 mb-1.5">
            Namn <span className="text-white/50">(valfritt)</span>
          </label>
          <input
            id="sf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ditt namn"
            className="w-full h-11 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[15px] focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="sf-email" className="block text-[13px] font-medium text-white/85 mb-1.5">
            E-post *
          </label>
          <input
            id="sf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="namn@exempel.se"
            className="w-full h-11 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[15px] focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="sf-msg" className="block text-[13px] font-medium text-white/85 mb-1.5">
            Meddelande *
          </label>
          <textarea
            id="sf-msg"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Vad gäller ditt ärende?"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-[15px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-colors resize-none"
          />
          <p className="mt-1.5 text-[12px] text-white/60 text-right">
            {message.length} tecken
          </p>
        </div>

        {error && (
          <div className="px-4 py-3 rounded-xl bg-red-500/20 border border-red-300/30 text-[14px] text-white">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-xl bg-white text-primary font-semibold text-[15px] hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            'Skickar…'
          ) : (
            <>
              Skicka meddelande
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <p className="text-[12px] text-white/60 text-center pt-1">
          Enhetsinformation skickas automatiskt för felsökning.
        </p>
      </form>
    </div>
  );
}
