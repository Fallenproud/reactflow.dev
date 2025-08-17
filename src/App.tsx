import React from 'react';
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { GettingStartedSection } from './components/sections/GettingStartedSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { CompanyLogosSection } from './components/sections/CompanyLogosSection';
import { ShowcaseSection } from './components/sections/ShowcaseSection';
import { NewsSection } from './components/sections/NewsSection';
import { TeamSection } from './components/sections/TeamSection';
import { RelatedProjectsSection } from './components/sections/RelatedProjectsSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="text-slate-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-ntdapperfont">
      <div className="box-border hidden"></div>
      <Header />
      <MobileMenu />
      <main className="box-border max-w-[1440px] mx-auto pt-10 pb-24 px-6 md:pt-14">
        <HeroSection />
        <StatsSection />
        <GettingStartedSection />
        <FeaturesSection />
        <CompanyLogosSection />
        <ShowcaseSection />
        <NewsSection />
        <TeamSection />
        <RelatedProjectsSection />
      </main>
      <Footer />
      <div className="absolute box-border block"></div>
    </div>
  );
}

export default App;
