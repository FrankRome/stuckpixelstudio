import { cn } from "@/lib/utils";
import { Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaPatreon } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Lavatro", href: "#lavatro" },
  { label: "About", href: "#about" },
  { label: "Games", href: "#games" },
  { label: "Contact", href: "#contact" },
];

const supportLinks: { name: string; href: string; icon: IconType }[] = [
  {
    name: "Patreon",
    href: "https://www.patreon.com/c/Stuckpixelstudio",
    icon: FaPatreon,
  },
  // {
  //   name: "Discord",
  //   href: "https://discord.com/",
  //   icon: FaDiscord,
  // },
  {
    name: "Press Kit",
    href: "https://drive.google.com/drive/folders/1NKPyUVWevpVEFZF_rc60uWxvmK72H8iF?usp=sharing",
    icon: Newspaper,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Stuck Pixel Studio"
                width={40}
                height={40}
                className="size-10"
              />
              <span className="font-mono text-xl font-bold text-white">
                Stuck Pixel Studio
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-zinc-400">
              Making weird & fun games since 2025. Expect the unexpected.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-red-500">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isLavatro = item.label === "Lavatro";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "font-mono text-sm transition-colors",
                        isLavatro
                          ? "text-red-400 hover:text-red-300"
                          : "text-zinc-300 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-red-500">
              Support Us
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 transition-all hover:border-red-500/50 hover:bg-zinc-800"
                    >
                      <Icon className="size-5 text-zinc-400" />
                      <span className="font-mono text-sm font-semibold text-white">
                        {link.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-zinc-500">
            © {new Date().getFullYear()} Stuck Pixel Studio. All rights
            reserved.
          </p>
          <p className="font-mono text-xs text-zinc-500">
            Built with{" "}
            <span className="animate-heartbeat inline-block text-red-500">
              ♥️
            </span>{" "}
            by{" "}
            <a
              href="https://alanpro.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 underline decoration-red-500/50 underline-offset-2 transition-colors hover:text-red-400 hover:decoration-red-500"
            >
              Alanpro.dev
            </a>{" "}
            for Stuck Pixel Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
