import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ContactForm from '../components/sections/ContactForm';

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Iris + Insight</title>
        <meta name="description" content="Get in touch with Iris + Insight to learn more about our equine-assisted services." />
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
              <h3 className="font-display text-2xl font-medium text-brand-charcoal mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-1">Email</p>
                  <p className="font-body text-sm text-brand-gray italic">Coming soon</p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-1">Phone</p>
                  <p className="font-body text-sm text-brand-gray italic">Coming soon</p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-1">Location</p>
                  <p className="font-body text-sm text-brand-charcoal-muted">Central Iowa</p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-1">Social Media</p>
                  <p className="font-body text-sm text-brand-gray italic">Coming soon</p>
                </div>
              </div>

              {/* Placeholder */}
              <div className="mt-8 rounded-lg border-2 border-dashed border-brand-gray p-4 text-center">
                <p className="font-body text-xs text-brand-gray italic">
                  Contact details pending from client.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
