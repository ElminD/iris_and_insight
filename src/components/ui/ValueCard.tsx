interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="bg-brand-white rounded-xl border border-brand-gray-light p-8 text-center">
      <h3 className="font-body text-sm font-semibold text-brand-teal mb-2">{title}</h3>
      <p className="font-body text-sm text-brand-charcoal-muted">{description}</p>
    </div>
  );
}
