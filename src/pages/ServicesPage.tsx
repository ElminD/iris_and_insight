import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { services, clientTags } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Iris + Insight</title>
        <meta name="description" content="Personalized equine-assisted therapy for individuals, couples, families, and businesses." />
        <link rel="canonical" href="https://irisandinsight.com/services" />
      </Helmet>

      <section className="bg-brand-bg py-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="How We Help"
            title="Services"
            subtitle="Personalized approaches tailored to your needs and goals."
          />

          {/* Who We Serve */}
          <Card className="mt-12">
            <h3 className="font-display text-2xl font-medium text-brand-charcoal mb-3">Who We Serve</h3>
            <p className="font-body text-base leading-relaxed text-brand-charcoal-muted">
              At Iris + Insight, clients get two licensed therapists who care deeply about the work
              they do. We work with adolescents, adults, couples, families, and businesses —
              personalizing and tailoring our approaches to fit different needs and goals.
            </p>
            <p className="font-body text-base leading-relaxed text-brand-charcoal-muted mt-4">
              We are passionate about serving those looking for new approaches to personal and
              professional growth, including the LGBTQ+ community, underrepresented populations,
              and corporate teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {clientTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-brand-teal-light text-brand-charcoal font-body text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* Focus Areas */}
          <Card className="mt-6">
            <h3 className="font-display text-2xl font-medium text-brand-charcoal mb-3">Our Focus Areas</h3>
            <p className="font-body text-base leading-relaxed text-brand-charcoal-muted">
              Building self-esteem, strengthening relationships, improving communication, encouraging
              teamwork, and fostering a sense of self-worth — all through the unique and intuitive
              language of horses.
            </p>
          </Card>

          {/* Service cards grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.name} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal-light text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-body text-base font-semibold text-brand-charcoal">{service.name}</h3>
                <p className="font-body text-sm text-brand-charcoal-muted mt-1">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Opportunities */}
          <div className="mt-10 text-center">
            <p className="font-body text-sm font-medium text-brand-charcoal-muted">
              Will travel &nbsp;|&nbsp; EAL/EAP &nbsp;|&nbsp; Workshops &nbsp;|&nbsp; Corporate Partnerships
            </p>
          </div>

          {/* Placeholder */}
          <div className="mt-8 rounded-lg border-2 border-dashed border-brand-gray p-6 text-center">
            <p className="font-body text-sm text-brand-gray italic">
              Content needed: insurance info, pricing details, travel availability specifics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
