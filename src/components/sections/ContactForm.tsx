import { useState, type FormEvent } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const res = await fetch('https://formspree.io/f/xnjwwndr', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-brand-teal-light rounded-xl p-8 text-center">
        <h3 className="font-display text-2xl font-medium text-brand-charcoal mb-2">Thank You!</h3>
        <p className="font-body text-brand-charcoal-muted">
          Your message has been received. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-body text-sm font-medium text-brand-charcoal mb-1">
          Name <span className="text-brand-teal">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-brand-gray-light px-4 py-2.5 font-body text-sm text-brand-charcoal focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-body text-sm font-medium text-brand-charcoal mb-1">
          Email <span className="text-brand-teal">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-brand-gray-light px-4 py-2.5 font-body text-sm text-brand-charcoal focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-body text-sm font-medium text-brand-charcoal mb-1">
          Phone <span className="text-brand-charcoal-muted font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-lg border border-brand-gray-light px-4 py-2.5 font-body text-sm text-brand-charcoal focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-brand-charcoal mb-1">
          Message <span className="text-brand-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-brand-gray-light px-4 py-2.5 font-body text-sm text-brand-charcoal focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none resize-vertical"
        />
      </div>

      {error && (
        <p className="font-body text-sm text-red-500">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <Button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
