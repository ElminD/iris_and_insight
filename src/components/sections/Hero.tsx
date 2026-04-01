import heroImg from '../../assets/images/scenic/Horses in pasture.jpg';

export default function Hero() {
  return (
    <section className="bg-brand-bg py-16 px-6">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center gap-12">
        {/* Left: Photo */}
        <div className="flex-1 w-full">
          <div className="aspect-[3/4] w-full max-w-md mx-auto rounded-xl overflow-hidden">
            <img
              src={heroImg}
              alt="Horses in pasture at Iris + Insight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-4">
            Equine-Assisted Psychotherapy &amp; Consulting
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-medium text-brand-charcoal mb-6">
            Welcome to <span className="italic text-brand-teal">Iris + Insight</span>!
          </h1>
          <p className="font-body text-base leading-relaxed text-brand-charcoal-muted">
            Where healing, growth, and connection begin — guided by the wisdom of horses. We are two
            licensed therapists who believe in the power of the horse-human bond to transform lives,
            strengthen relationships, and foster personal growth.
          </p>
        </div>
      </div>
    </section>
  );
}
