"use client";

import GradientText from '../components/GradientText';
import GlassNav from '../components/GlassNav';
import BrandText from '../components/BrandText';
import NavLink from '../components/NavLink';
import AnimatedHeading from '../components/AnimatedHeading';
import AnimatedText from '../components/AnimatedText';
import AnimatedButton from '../components/AnimatedButton';
import Dither from '../components/Dither';
import TiltedCard from '../components/TiltedCard';

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0" style={{ width: '100%', height: '100vh', willChange: 'transform' }}>
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
      <GlassNav>
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <BrandText>firefly</BrandText>
          <div className="space-x-12">
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>
        </div>
      </GlassNav>

      <main className="px-8 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
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

            <AnimatedText>
              An all-new recovery sleeve powered by EMS technology.
            </AnimatedText>

            <AnimatedButton>Buy Now</AnimatedButton>
          </div>
          <div className="hidden lg:flex items-center justify-center">
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
          </div>
        </div>
      </main>
    </>
  );
}