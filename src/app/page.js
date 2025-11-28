"use client";

import { useState, useEffect } from 'react';
import GradientText from '../components/GradientText';
import GlassNav from '../components/GlassNav';
import BrandText from '../components/BrandText';
import NavLink from '../components/NavLink';
import AnimatedHeading from '../components/AnimatedHeading';
import AnimatedText from '../components/AnimatedText';
import AnimatedButton from '../components/AnimatedButton';
import Dither from '../components/Dither';
import TiltedCard from '../components/TiltedCard';
import CountUp from '../components/CountUp';
import FocusIn from '../components/FocusIn';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 slide-in" style={{ width: '100%', height: '100vh', willChange: 'transform' }}>
        <Dither
          waveColor={[1.0, 0.75, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={10}
          waveAmplitude={0.3}
          waveFrequency={1.5}
          waveSpeed={0.0267}
        />
      </div>
      <GlassNav isScrolled={isScrolled}>
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <BrandText>firefly</BrandText>
          <div className="space-x-12">
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>
        </div>
      </GlassNav>

      <main className="relative z-10 h-screen px-8 flex items-center pt-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <FocusIn delay={0} duration={0.8} margin="-100px">
              <AnimatedHeading className="text-5xl md:text-7xl">
                Muscle Rehabilitation{" "}
                <GradientText
                  colors={["#FF5500", "#FF5500", "#F7A972", "#FF5500", "#FF5500"]}
                  animationSpeed={5}
                  showBorder={false}
                  className="inline-block text-6xl md:text-8xl"
                  style={{ fontWeight: 575, letterSpacing: "-0.04em" }}
                >
                  Reinvented.
                </GradientText>
              </AnimatedHeading>
            </FocusIn>

            <FocusIn delay={0.1} duration={0.8} margin="-80px">
              <AnimatedText>
                An all-new recovery sleeve powered by EMS technology.
              </AnimatedText>
            </FocusIn>

            <FocusIn delay={0.2} duration={0.8} margin="-60px">
              <AnimatedButton>Buy Now</AnimatedButton>
            </FocusIn>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <FocusIn delay={0.15} duration={0.8} margin="-90px">
              <TiltedCard
                imageSrc="/IMG_4147.jpeg"
                altText="Product Image"
                captionText="Firefly Recovery Sleeve"
                containerHeight="650px"
                containerWidth="500px"
                imageHeight="650px"
                imageWidth="500px"
                rotateAmplitude={6.7}
                scaleOnHover={1.067}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </FocusIn>
          </div>
        </div>
      </main>

      <section className="bg-white relative z-10 h-screen px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <FocusIn delay={0} duration={0.8} margin="-150px">
            <div className="text-center mb-32">
              <h2 className="text-4xl md:text-6xl font-light leading-none tracking-tight text-[var(--text)]">
                Built with the{" "}
                <span className="text-[#FF5500]" style={{ fontWeight: 575, letterSpacing: "-0.04em" }}>
                  future
                </span>{" "}
                of rehabilitation technology.
              </h2>
            </div>
          </FocusIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FocusIn delay={0.1} duration={0.8} margin="-120px">
              <div className="text-center">
                <div className="text-7xl font-bold text-[#FF5500] mb-6">
                  <CountUp to={15} duration={2} className="text-7xl font-bold text-[#FF5500]" />%
                </div>
                <div className="text-lg text-gray-700 max-w-[350px] mx-auto">Improvement in Muscle Function After 5-6 Weeks of Use</div>
              </div>
            </FocusIn>
            <FocusIn delay={0.2} duration={0.8} margin="-100px">
              <div className="text-center">
                <div className="text-7xl font-bold text-[#FF5500] mb-6">
                  <CountUp to={17} duration={2} className="text-7xl font-bold text-[#FF5500]" />%
                </div>
                <div className="text-lg text-gray-700 max-w-[350px] mx-auto">More Muscle Mass Preserved in Injured Muscles</div>
              </div>
            </FocusIn>
            <FocusIn delay={0.3} duration={0.8} margin="-80px">
              <div className="text-center">
                <div className="text-7xl font-bold text-[#FF5500] mb-6">
                  <CountUp to={60} duration={2} className="text-7xl font-bold text-[#FF5500]" />%
                </div>
                <div className="text-lg text-gray-700 max-w-[350px] mx-auto">Increase in Muscle Strength When Incorporated into Exercise</div>
              </div>
            </FocusIn>
          </div>
        </div>
      </section>
    </>
  );
}