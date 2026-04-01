import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';

const sections = [
  {
    title: 'Equine-Assisted Learning (EAL)',
    content: 'An experiential learning approach that uses interactions with horses to help individuals develop personal, social, and emotional skills. Participants typically work with horses on the ground completing problem-solving exercises. These experiences create opportunities for reflection, communication, and growth.',
  },
  {
    title: 'Equine-Assisted Psychotherapy (EAP)',
    content: 'An experiential form of mental health treatment that involves interactions between clients, horses, and trained mental health professionals. Rather than traditional talk therapy alone, EAP incorporates guided activities with horses — such as grooming, leading, observing behavior, and ground-based exercises — to help individuals explore emotions, build self-awareness, and develop healthier patterns of thinking and behavior.',
  },
  {
    title: 'Why Horses?',
    content: 'Horses are highly sensitive animals that naturally respond to human body language, emotions, and energy. Because of this, they provide immediate and honest feedback to participants. This feedback helps individuals become more aware of their behavior, emotions, and communication styles.',
  },
];

export default function AboutEALEAPPage() {
  return (
    <>
      <Helmet>
        <title>About EAL/EAP | Iris + Insight</title>
        <meta name="description" content="Learn about equine-assisted learning and psychotherapy at Iris + Insight." />
        <link rel="canonical" href="https://irisandinsight.com/equine-services" />
      </Helmet>

      <section className="bg-brand-bg py-16 px-6">
        <div className="mx-auto max-w-[800px]">
          <SectionHeading
            eyebrow="What We Do"
            title="About EAL / EAP"
            subtitle="Experiential approaches that harness the intuitive nature of horses."
          />

          <div className="mt-12 space-y-6">
            {sections.map((s) => (
              <Card key={s.title}>
                <h3 className="font-display text-2xl font-medium text-brand-charcoal mb-3">{s.title}</h3>
                <p className="font-body text-base leading-relaxed text-brand-charcoal-muted">{s.content}</p>
              </Card>
            ))}

            <Card>
              <h3 className="font-display text-2xl font-medium text-brand-charcoal mb-3">Our Certification</h3>
              <p className="font-body text-base leading-relaxed text-brand-charcoal-muted">
                Iris + Insight is certified by the O.K. Corral Series. Kelsey and Sareena were
                personally trained by Greg Kersten, recognized as the founder of Equine-Assisted
                Psychotherapy/Philosophy. The techniques emphasize natural, authentic horse and herd
                behavior as a model for human mental and emotional health.
              </p>
              <p className="font-body text-base leading-relaxed text-brand-charcoal-muted mt-4">
                Iris + Insight is unique — both facilitators are licensed mental health professionals,
                with Sareena also serving as the equine professional.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
