"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, ExternalLink, Heart, Star, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: Heart,
    title: "Get Launch Discount",
    description: "Be the first to get 20% off when we launch",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    icon: Calendar,
    title: "Release Notification",
    description: "Steam will notify you the moment it's available",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Users,
    title: "Support Indie Devs",
    description: "Help us reach more players and keep making weird games",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

function SteamBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 backdrop-blur-sm">
      <Star className="size-4 fill-red-500 text-red-500" />
      <span className="font-mono text-xs font-bold tracking-[0.2em] text-red-400 uppercase">
        Coming to Steam
      </span>
    </div>
  );
}

function PixelDecoration({
  className,
  color = "bg-red-500",
  delay = "0s",
  duration = "3s",
}: {
  className?: string;
  color?: string;
  delay?: string;
  duration?: string;
}) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none animate-bounce",
        color,
        className,
      )}
      style={{
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  );
}

function GameCard({
  mobileVideoRef,
}: {
  mobileVideoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  return (
    <div className="group relative">
      {/* Floating pixel decorations */}
      <PixelDecoration
        className="-left-3 bottom-20 size-5"
        color="bg-blue-500/80"
        duration="3s"
      />
      <PixelDecoration
        className="-right-2 top-12 size-4"
        color="bg-red-500/80"
        delay="0.5s"
        duration="3.5s"
      />
      <PixelDecoration
        className="right-16 -top-3 size-3"
        color="bg-purple-500/80"
        delay="1s"
        duration="4s"
      />
      <PixelDecoration
        className="left-20 -bottom-3 size-3"
        color="bg-emerald-500/80"
        delay="1.5s"
        duration="3.2s"
      />

      {/* Pixelated-style frame using layered box-shadow */}
      <div
        className="relative rounded-lg bg-zinc-900 transition-transform duration-300 group-hover:scale-[1.02]"
        style={{
          boxShadow:
            "0 0 0 2px #27272a, 0 0 0 4px #000, 0 25px 50px -12px rgba(239, 68, 68, 0.25)",
        }}
      >
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="/lavatro.png"
            alt="Lavatro - A clothes builder game where you wash to score points"
            fill
            className="object-cover"
            priority
          />
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 ease-in-out lg:hidden"
          >
            <source src="/clip.mp4" type="video/mp4" />
          </video>
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

          {/* Game info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="mb-2 inline-block rounded-sm bg-red-500 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
              Next Project
            </div>
            <h3 className="font-mono text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
              Lavatro
            </h3>
            <p className="mt-2 max-w-md text-base leading-relaxed text-zinc-300">
              Lavatro is a clothes builder where you will wash to get as many
              points as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitsList() {
  return (
    <div>
      <h3 className="mb-5 font-mono text-2xl font-bold text-white sm:text-3xl">
        Why <span className="text-blue-400">Wishlist</span>?
      </h3>
      <div className="space-y-4">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex items-start gap-4">
            <div
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-md border",
                benefit.bg,
              )}
            >
              <benefit.icon
                className={cn("size-5", benefit.color)}
                strokeWidth={2}
              />
            </div>
            <div>
              <h4 className="font-mono text-base font-semibold text-white">
                {benefit.title}
              </h4>
              <p className="mt-0.5 text-sm text-zinc-300">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoalCard() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/80 p-5 backdrop-blur-sm sm:p-6">
      {/* Decorative pixel corners */}
      <div className="absolute left-0 top-0 size-2 bg-red-500" />
      <div className="absolute right-0 top-0 size-2 bg-blue-500" />
      <div className="absolute bottom-0 left-0 size-2 bg-blue-500" />
      <div className="absolute bottom-0 right-0 size-2 bg-red-500" />

      <h4 className="mb-5 font-mono text-lg font-semibold text-white">Goal</h4>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="font-mono text-3xl font-bold text-red-500 sm:text-4xl">
            10,000
          </div>
          <div className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Wishlists
          </div>
        </div>
        <div>
          <div className="font-mono text-3xl font-bold text-blue-500 sm:text-4xl">
            Q4 2026
          </div>
          <div className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">
            Expected Release
          </div>
        </div>
      </div>

      {/* Retro progress bar */}
      {/*<div className="mt-5 h-3 w-full overflow-hidden rounded-sm border border-zinc-700 bg-zinc-800 p-0.5">
        <div
          className="h-full rounded-sm bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
          style={{ width: "34.2%" }}
        />
      </div>
      <p className="mt-2 text-right font-mono text-xs text-zinc-500">
        3,420 / 10,000 wishlists
      </p>*/}
    </div>
  );
}

function WishlistCTA() {
  return (
    <Button
      size="lg"
      className="group relative w-full overflow-hidden bg-red-600 py-7 font-mono text-lg font-bold text-white shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-[0_0_45px_rgba(239,68,68,0.5)] active:translate-y-0"
      asChild
    >
      <a
        href="https://store.steampowered.com/app/4157200/Lavatro/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-center"
      >
        <Heart className="mr-2 size-5 animate-heartbeat fill-white" />
        Wishlist on Steam
        <ExternalLink className="ml-2 size-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
      </a>
    </Button>
  );
}

export default function WishlistSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hideOverlayRef = useRef<HTMLDivElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const hideOverlay = hideOverlayRef.current;
    const mobileVideo = mobileVideoRef.current;
    if (!section || !hideOverlay) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);
      // Threshold: 20% of viewport height. Beyond it, video is fully hidden.
      const threshold = vh * 0.2;
      const visible = distance <= threshold;
      const opacity = visible ? "0" : "1";
      hideOverlay.style.opacity = opacity;
      if (mobileVideo) {
        mobileVideo.style.opacity = visible ? "1" : "0";
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lavatro"
      className="relative overflow-hidden bg-black py-24 lg:py-32"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full hidden object-cover lg:block"
      >
        <source src="/clip.mp4" type="video/mp4" />
      </video>

      {/* Overlay: darkens video for readability while keeping it visible. */}
      <div className="pointer-events-none absolute inset-0 bg-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />

      {/* Hide overlay: solid black, toggled by scroll position.
          Visible only when section is within 20% of viewport center.
          Smooth transition handles the abrupt state change. */}
      <div
        ref={hideOverlayRef}
        className="pointer-events-none absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out"
      />

      {/* Subtle CRT scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 bg-blue-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center lg:mb-20">
          <SteamBadge />
          <h2 className="mt-6 font-mono text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="text-red-500">Wishlist</span> Our Next Game
          </h2>
          <div className="mt-6 h-1 w-24 rounded-full bg-red-500" />
          <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Get notified when our biggest project yet launches on Steam
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <GameCard mobileVideoRef={mobileVideoRef} />
          <div className="md:hidden block">
            <WishlistCTA />
          </div>

          <div className="flex flex-col gap-8">
            <BenefitsList />
            <GoalCard />
            <div className="md:block hidden">
              <WishlistCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
