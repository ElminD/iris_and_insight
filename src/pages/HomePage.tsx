import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import MissionBand from '../components/sections/MissionBand';
import LogoBar from '../components/sections/LogoBar';
import InclusionStatement from '../components/sections/InclusionStatement';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Iris + Insight</title>
        <meta name="description" content="Equine-assisted psychotherapy and consulting in Iowa. Healing, growth, and connection guided by horses." />
        <link rel="canonical" href="https://irisandinsight.com/" />
      </Helmet>
      <Hero />
      <MissionBand />
      <LogoBar />
      <InclusionStatement />
    </>
  );
}
