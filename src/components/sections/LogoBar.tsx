import logoImg from '../../assets/images/Logo.png';

export default function LogoBar() {
  return (
    <section className="bg-brand-bg py-14 px-6">
      <div className="mx-auto max-w-[1200px] flex items-center justify-center">
        <img src={logoImg} alt="Iris + Insight logo" className="h-64 w-auto object-contain" />
      </div>
    </section>
  );
}
