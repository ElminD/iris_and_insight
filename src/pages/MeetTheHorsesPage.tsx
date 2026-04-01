import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ImageCard from '../components/ui/ImageCard';
import { horses, bonusAnimals } from '../data/horses';

export default function MeetTheHorsesPage() {
  return (
    <>
      <Helmet>
        <title>Meet the Horses | Iris + Insight</title>
        <meta name="description" content="Meet the intuitive equine partners at Iris + Insight." />
        <link rel="canonical" href="https://irisandinsight.com/horses" />
      </Helmet>

      <section className="bg-brand-bg py-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Our Herd"
            title="Meet the Horses"
            subtitle="The intuitive partners who make the work possible."
          />

          {/* Intro */}
          <Card className="mt-12">
            <p className="font-body text-base leading-relaxed text-brand-charcoal-muted">
              The horses at Iris + Insight are more than animals — they are intuitive partners in the
              therapeutic process. Their sensitivity, honesty, and calm presence help create powerful
              moments of connection, self-awareness, and personal growth. Each horse in our herd
              brings a unique spirit and plays an important role in supporting connection, healing,
              and growth.
            </p>
          </Card>

          {/* Horse profile cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {horses.map((horse) => (
              <ImageCard
                key={horse.name}
                imageSrc={horse.photo}
                imageAlt={`${horse.name}${horse.fullName ? ` (${horse.fullName})` : ''} — therapy horse at Iris + Insight`}
                imagePosition={horse.imagePosition}
                title={horse.name}
                subtitle={horse.fullName}
                description={horse.description}
                placeholder={horse.description === 'Description coming soon...'}
              />
            ))}
          </div>

          {/* Bonus animals */}
          <div className="mt-14">
            <h3 className="font-display text-2xl font-medium text-brand-charcoal text-center mb-6">
              Friends of the Herd
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {bonusAnimals.map((animal) => (
                <ImageCard
                  key={animal.name}
                  imageSrc={animal.photo}
                  imageAlt={`${animal.name} at Iris + Insight`}
                  title={animal.name}
                  description={animal.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
