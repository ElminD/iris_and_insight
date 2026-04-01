interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, type = 'button', onClick, className = '' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-brand-teal hover:bg-brand-teal-dark text-white font-body font-semibold py-3 px-8 rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
