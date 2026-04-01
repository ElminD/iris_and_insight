import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';

const historyBlocks = [
  `Iris + Insight's journey began with a horse named <strong>How D Iris</strong> — affectionately known as Cat. She came into Sareena's life at a time when everything felt heavy, and she had all but lost hope. Cat was more than a horse; she was a lifeline, a quiet guide who reminded Sareena of her strength when she couldn't see it for herself. Cat's presence became the spark for something bigger — a dream Sareena had carried with her for years: to create a healing space where others could find what she found through horses — connection, clarity, and courage.`,
  `Horses have been a part of Sareena's story since before she could walk. They've kept her focused, goal-oriented, and grounded through every season of life. She has seen firsthand how they can teach patience, build confidence, and help people communicate without a single word.`,
  `Kelsey grew up on a farm in rural Wisconsin and begged her parents for a horse throughout her childhood. Even as a young girl with little exposure to horses, she knew they were something special. She moved to the Des Moines area and figured her dream of spending time with horses would remain a dream.`,
  `Sareena and Kelsey met through their work in mental health, and initially bonded over their shared commitment to helping others. Sareena learned of Kelsey's love of horses and introduced her to her own. One day at work while talking about their love for horses, Sareena informed Kelsey that equine-assisted therapy is often recommended with two therapists. Kelsey couldn't let that carrot dangle, and the rest is history.`,
];

const closingBlock = `Kelsey and Sareena got certified in equine-assisted therapy in November 2025 and founded Iris + Insight in January 2026, which offers <strong>equine-assisted therapy and learning</strong>, grounded in lived experience and deep respect for both people and horses.`;

const closingQuote = `Iris + Insight's story is just beginning — and they're honored to walk (and ride) alongside those ready to start their own journey of insight, healing, and growth.`;

export default function HistoryPage() {
  return (
    <>
      <Helmet>
        <title>Our Story | Iris + Insight</title>
        <meta name="description" content="How a horse named Cat sparked the dream behind Iris + Insight." />
        <link rel="canonical" href="https://irisandinsight.com/history" />
      </Helmet>

      <section className="bg-brand-bg py-16 px-6">
        <div className="mx-auto max-w-[800px]">
          <SectionHeading
            eyebrow="Our Story"
            title="History"
            subtitle="How a horse named Cat sparked a dream."
          />

          <div className="mt-12 space-y-6">
            {historyBlocks.map((block, i) => (
              <Card key={i}>
                <p
                  className="font-body text-base leading-relaxed text-brand-charcoal-muted"
                  dangerouslySetInnerHTML={{ __html: block }}
                />
              </Card>
            ))}

            <Card>
              <p
                className="font-body text-base leading-relaxed text-brand-charcoal-muted"
                dangerouslySetInnerHTML={{ __html: closingBlock }}
              />
              <p className="font-display italic text-lg text-brand-teal mt-4 leading-relaxed">
                {closingQuote}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
