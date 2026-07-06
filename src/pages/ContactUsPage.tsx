import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ContactForm from '../components/sections/ContactForm';

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Iris + Insight</title>
        <meta
          name="description"
          content="Get in touch with Iris + Insight to learn more about our equine-assisted services."
        />
        <link rel="canonical" href="https://irisandinsight.com/contact" />
      </Helmet>

      <section className="bg-brand-bg py-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact Us"
            subtitle="We'd love to hear from you."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <Card>
              <ContactForm />
            </Card>

            {/* Contact info */}
            <Card>
              <h3 className="font-display text-2xl font-medium text-brand-charcoal mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:irisandinsight@gmail.com"
                    className="inline-flex items-center gap-2 font-body text-sm text-brand-teal underline underline-offset-2 hover:text-brand-teal-dark focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-sm transition-colors py-1"
                  >
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    irisandinsight@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+15154281728"
                    className="inline-flex items-center gap-2 font-body text-sm text-brand-teal underline underline-offset-2 hover:text-brand-teal-dark focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-sm transition-colors py-1"
                  >
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    515-428-1728
                  </a>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-2">
                    Location
                  </p>
                  <p className="font-body text-sm text-brand-charcoal-muted">Central Iowa</p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-2">
                    Social Media
                  </p>
                  <a
                    href="https://www.facebook.com/share/1JTUw2LJGZ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Iris + Insight on Facebook (opens in new tab)"
                    className="inline-flex items-center gap-2 font-body text-sm text-brand-teal underline underline-offset-2 hover:text-brand-teal-dark focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 rounded-sm transition-colors py-1"
                  >
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="shrink-0"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Iris + Insight on Facebook
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
