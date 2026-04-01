interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-brand-white rounded-xl border border-brand-gray-light p-8 ${className}`}>
      {children}
    </div>
  );
}
