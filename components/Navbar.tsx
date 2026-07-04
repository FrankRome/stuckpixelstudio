"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ExternalLink, Heart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Lavatro", href: "#lavatro" },
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Contact", href: "#contact" },
];

const otherGames = [
  {
    title: "Happy Dawn",
    tag: "GBA",
    image: "/games/happy dawn.png",
    link: "https://itch.io",
  },
  {
    title: "Ghostle GB",
    tag: "Puzzle",
    image: "/games/ghostle.png",
    link: "https://itch.io",
  },
  {
    title: "Metal Slayer",
    tag: "Action",
    image: "/games/metal slayer.png",
    link: "https://itch.io",
  },
];

function LavatroCorners() {
  return (
    <>
      <span className="absolute -top-[0px] -left-[0px] size-[4px] bg-red-500" />
      <span className="absolute -top-[0px] -right-[0px] size-[4px] bg-red-500" />
      <span className="absolute -bottom-[0px] -left-[0px] size-[4px] bg-red-500" />
      <span className="absolute -bottom-[0px] -right-[0px] size-[4px] bg-red-500" />
    </>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="Stuck Pixel Studio"
            width={32}
            height={32}
            className="size-8"
          />
          <span className="font-mono text-lg font-bold text-white">
            Stuck Pixel Studio
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isLavatro = item.label === "Lavatro";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-4 py-2 font-mono text-sm transition-colors",
                  isLavatro
                    ? "text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white",
                )}
              >
                {isLavatro && <LavatroCorners />}
                {item.label}
              </Link>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-300 hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          showCloseButton={true}
          className="flex w-80 flex-col gap-0 overflow-y-auto border-l border-red-500/30 bg-black/95 px-0 py-0 backdrop-blur-md data-[side=right]:sm:max-w-xs"
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>

          <div className="flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-4">
            <Image
              src="/icon.png"
              alt="Stuck Pixel Studio"
              width={32}
              height={32}
              className="size-8"
            />
            <span className="font-mono text-base font-bold text-white">
              Stuck Pixel Studio
            </span>
          </div>

          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isLavatro = item.label === "Lavatro";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative rounded-md px-4 py-3 font-mono text-base transition-colors",
                    isLavatro
                      ? "text-red-400 hover:bg-red-500/10 hover:text-red-300"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {isLavatro && <LavatroCorners />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-2 flex flex-col gap-4 px-4 pb-8">
            <div className="flex items-center gap-2">
              <span className="size-2 bg-red-500" />
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-red-400 uppercase">
                Featured
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <Link
              href="#lavatro"
              onClick={() => setOpen(false)}
              className="group relative block overflow-hidden rounded-lg border border-red-500/40 bg-zinc-900 transition-all hover:border-red-500/80"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/lavatro.png"
                  alt="Lavatro"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute left-3 top-3">
                  <span className="inline-block rounded-sm bg-red-500 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    Next Project
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-mono text-2xl font-bold tracking-tight text-white drop-shadow-lg">
                    Lavatro
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                    A clothes builder where you wash to score points.
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="group relative w-full overflow-hidden rounded-none bg-red-600 py-4 font-mono text-sm font-bold text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all hover:bg-red-500"
              >
                <a
                  href="https://store.steampowered.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center"
                >
                  <Heart className="mr-2 size-4 animate-heartbeat fill-white" />
                  Wishlist on Steam
                  <ExternalLink className="ml-2 size-3.5 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                </a>
              </Button>
            </Link>

            <div className="flex items-center gap-2 pt-2">
              <span className="size-2 bg-zinc-500" />
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                More Games
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="flex flex-col gap-2">
              {otherGames.map((game) => (
                <a
                  key={game.title}
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-900/50 p-2 transition-all hover:border-red-500/40 hover:bg-zinc-900"
                >
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-mono text-sm font-bold text-white">
                      {game.title}
                    </h4>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-zinc-500 uppercase">
                      {game.tag}
                    </span>
                  </div>
                  <ExternalLink className="size-4 shrink-0 text-zinc-600 transition-colors group-hover:text-red-400" />
                </a>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
