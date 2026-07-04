"use client";

import FaultyTerminal from "@/components/FaultyTerminal";
import { Button } from "@/components/ui/button";
import { Gamepad2, Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative  flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {isVisible && (
        <div className="absolute inset-0">
          <FaultyTerminal
            className="hidden md:block"
            scale={1}
            digitSize={1.5}
            scanlineIntensity={0.3}
            glitchAmount={0}
            flickerAmount={0}
            noiseAmp={0}
            chromaticAberration={0}
            dither={0}
            curvature={0.2}
            tint="#EF4444"
            mouseReact
            mouseStrength={0.2}
            brightness={1}
          />
          <FaultyTerminal
            // pageLoadAnimation={false}
            className="block md:hidden"
            figureWidth={0.3}
            figureHeight={1}
            scale={1}
            digitSize={1.5}
            scanlineIntensity={0.3}
            glitchAmount={0}
            flickerAmount={0}
            noiseAmp={0}
            chromaticAberration={0}
            dither={0}
            curvature={0.2}
            tint="#EF4444"
            mouseStrength={0.2}
            brightness={0.6}
            pause={true}
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-mono text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] sm:text-7xl md:text-8xl">
            Stuck Pixel Studio
          </h1>
          <p className="font-mono text-lg tracking-[0.3em] text-red-400 uppercase sm:text-xl md:text-2xl">
            A gamedev Boyband
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href={"#games"}>
            <Button
              size="lg"
              className="bg-red-600 px-8 py-6 font-mono text-base text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all hover:bg-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
            >
              <Gamepad2 className="mr-2 size-5" />
              Play our Games
            </Button>
          </Link>
          <a
            href={"https://www.patreon.com/c/Stuckpixelstudio"}
            target="_blank"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-red-500/50 bg-black/50 px-8 py-6 font-mono text-base text-red-400 backdrop-blur-sm transition-all hover:border-red-400 hover:bg-black/70 hover:text-red-300"
            >
              <Heart className="mr-2 size-5" />
              Join our Patreon
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
