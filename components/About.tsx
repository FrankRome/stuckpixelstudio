"use client";

import { Code, Music, Palette } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Luife",
    role: "Game Developer",
    origin: "Cuba",
    color: "red",
    borderColor: "border-red-500",
    bgGlow: "shadow-red-500/20",
    textColor: "text-red-400",
    iconBg: "bg-red-500/10",
    icon: Code,
    image: "/team/luife.webp",
    overlayColor: "#ef4444",
    description:
      "With strong programming skills and a passion for building interactive systems, he transforms concepts into polished and engaging gameplay experiences.",
  },
  {
    name: "Santi",
    role: "Pixel Artist & Animator",
    origin: "Venezuela",
    color: "green",
    borderColor: "border-green-500",
    bgGlow: "shadow-green-500/20",
    textColor: "text-green-400",
    iconBg: "bg-green-500/10",
    icon: Palette,
    image: "/team/santi.webp",
    overlayColor: "#22c55e",
    description:
      "Specializing in pixel art and animations, he brings the visual identity of our games to life with vibrant style and attention to detail.",
  },
  {
    name: "Fran Nabo",
    role: "Sound Designer & Developer",
    origin: "Mexico",
    color: "blue",
    borderColor: "border-blue-500",
    bgGlow: "shadow-blue-500/20",
    textColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    icon: Music,
    image: "/team/fran-nabo.webp",
    overlayColor: "#3b82f6",
    description:
      "Beyond coding, he brings his talent for music and sound design, shaping the atmosphere and emotional impact of our games through unique audio experiences.",
  },
];

export default function About() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [centered, setCentered] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isMobileRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => {
      isMobileRef.current = mq.matches;
      if (!mq.matches) setCentered(null);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isMobileRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const name = visible[0].target.getAttribute("data-name");
          if (name) setCentered(name);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const active = hovered ?? centered;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
    >
      {team.map((member) => {
        const isActive = active === member.name;
        return (
          <div
            key={member.name}
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out hidden sm:block"
              style={{
                backgroundImage: `url(${member.image})`,
                opacity: active === member.name ? 0.35 : 0,
              }}
            />
            <div
              className="absolute inset-0 mix-blend-multiply transition-opacity duration-700 ease-in-out"
              style={{
                backgroundColor: member.overlayColor,
                opacity: isActive ? 0.8 : 0,
              }}
            />
          </div>
        );
      })}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/50 to-zinc-950 transition-opacity duration-700"
        style={{ opacity: active ? 1 : 0 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/icon.png"
              alt="Stuck Pixel Studio"
              width={80}
              height={80}
              className="size-20 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            />
          </div>
          <h2 className="font-mono text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Story
          </h2>
          <p className="mt-6 text-xl leading-9 text-zinc-300">
            We&apos;re Stuck Pixel Studio — a Latin American boy band that makes
            video games. International team based in Mexico. Three friends, one
            mission: to create weird, fun, and fresh gaming experiences. We mix
            code, art, and a bit of chaos to ship games that don&apos;t take
            themselves too seriously — but still hit hard.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => {
            const Icon = member.icon;
            const isCentered = centered === member.name;
            return (
              <div
                key={member.name}
                data-name={member.name}
                ref={(el) => {
                  cardRefs.current[member.name] = el;
                }}
                onMouseEnter={() => setHovered(member.name)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative overflow-hidden rounded-xl border ${member.borderColor} bg-zinc-900 p-6 shadow-lg ${member.bgGlow} sm:bg-zinc-900/50 sm:backdrop-blur-sm transition-all hover:shadow-xl`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out sm:hidden"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    opacity: isCentered ? 1 : 0,
                  }}
                />
                <div
                  className="absolute inset-0 mix-blend-multiply transition-opacity duration-700 ease-in-out"
                  style={{
                    backgroundColor: member.overlayColor,
                    opacity: isCentered ? 0.55 : 0,
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/50 to-zinc-900/80 transition-opacity duration-700 ease-in-out sm:hidden"
                  style={{ opacity: isCentered ? 1 : 0 }}
                />
                <div className="relative">
                  <div
                    className={`mb-4 inline-flex rounded-lg ${member.iconBg} p-3`}
                  >
                    <Icon className={`size-6 ${member.textColor}`} />
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className={`font-mono text-sm ${member.textColor}`}>
                    {member.role}
                  </p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {member.origin}
                  </p>
                  <p className="mt-4 text-base leading-7 text-zinc-300">
                    {member.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
