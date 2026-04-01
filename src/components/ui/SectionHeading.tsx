interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-medium text-brand-charcoal mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base text-brand-charcoal-muted max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
