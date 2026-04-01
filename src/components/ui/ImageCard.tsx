interface ImageCardProps {
  imageSrc?: string;
  imageAlt: string;
  imagePosition?: string;
  title: string;
  subtitle?: string;
  description: string;
  placeholder?: boolean;
}

export default function ImageCard({ imageSrc, imageAlt, imagePosition, title, subtitle, description, placeholder = false }: ImageCardProps) {
  return (
    <div className="bg-brand-white rounded-xl border border-brand-gray-light overflow-hidden transition-shadow hover:shadow-md">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      ) : (
        <div className="w-full aspect-[4/3] bg-brand-gray-light flex items-center justify-center border-b border-dashed border-brand-gray">
          <span className="text-brand-charcoal-muted font-body text-sm">Photo coming soon</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-display text-xl font-medium text-brand-charcoal">{title}</h3>
        {subtitle && (
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal mt-1">
            {subtitle}
          </p>
        )}
        <p className={`font-body text-sm mt-3 ${placeholder ? 'italic text-brand-gray' : 'text-brand-charcoal-muted'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
