import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { team } from '../data/team';

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Iris + Insight</title>
        <meta name="description" content="Meet Kelsey and Sareena — two licensed therapists passionate about equine-assisted services." />
        <link rel="canonical" href="https://irisandinsight.com/about" />
      </Helmet>

      <section className="bg-brand-bg py-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Our Team"
            title="About Us"
            subtitle="Two licensed therapists, one shared passion."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card key={member.name}>
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6">
                  {/* Circular photo placeholder */}
                  <div className="h-20 w-20 shrink-0 rounded-full bg-brand-gray-light border-2 border-dashed border-brand-gray flex items-center justify-center">
                    <span className="text-brand-charcoal-muted font-body text-[10px]">Photo</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-brand-charcoal">{member.name}</h3>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mt-1">
                      {member.role}
                    </p>
                    <p className={`font-body text-sm leading-relaxed mt-3 ${member.placeholder ? 'italic text-brand-gray' : 'text-brand-charcoal-muted'}`}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Placeholder block */}
          <div className="mt-10 rounded-lg border-2 border-dashed border-brand-gray p-6 text-center">
            <p className="font-body text-sm text-brand-gray italic">
              Additional content needed: certification details, credentials, insurance information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
