export default function Footer() {
  return (
    <footer className="bg-brand-charcoal py-10">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="font-display text-lg font-medium">
          <span className="text-white">Iris</span>
          <span className="italic text-brand-teal"> + Insight</span>
        </p>
        <p className="font-body mt-2 text-sm text-white/60">
          Equine-Assisted Psychotherapy &amp; Consulting
        </p>
        <p className="font-body mt-4 text-xs text-white/40">
          &copy; {new Date().getFullYear()} Iris + Insight. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
