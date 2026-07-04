import { Button } from "@/components/ui/button";
import { ExternalLink, Gamepad2 } from "lucide-react";
import Image from "next/image";

const games = [
  {
    title: "Happy Dawn",
    description:
      "Happy Dawn is a small Game Boy Advance game. Yes, as you just read, in 2024, a GBA game.",
    image: "/games/happy dawn.png",
    link: "https://itch.io",
    tag: "GBA",
  },
  {
    title: "Ghostle GB",
    description: "Ghostle GB, the amazing game about ghosts and puzzles",
    image: "/games/ghostle.png",
    link: "https://itch.io",
    tag: "Puzzle",
  },
  {
    title: "Metal Slayer",
    description:
      "Metal Slayer is an exciting Boss Rush video game created for Boss Rush Jam 2025",
    image: "/games/metal slayer.png",
    link: "https://itch.io",
    tag: "Action",
  },
];

export default function Games() {
  return (
    <section id="games" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5">
            <Gamepad2 className="size-4 text-red-400" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-red-400 uppercase">
              Our Catalog
            </span>
          </div>
          <h2 className="font-mono text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our <span className="text-red-500">Games</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-500" />
          <p className="mt-6 text-lg text-zinc-300">
            Experimental games that break rules and expectations
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-red-500/50 hover:bg-zinc-900"
            >
              <div className="relative aspect-5/4 overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                <div className="absolute left-4 top-4">
                  <span className="inline-block rounded-md bg-red-500 px-3 py-1 font-mono text-xs font-bold text-white uppercase">
                    {game.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-mono text-xl font-bold text-white">
                  {game.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {game.description}
                </p>
                <div className="h-6"></div>
                <Button
                  asChild
                  className="group relative mt-auto w-full overflow-hidden bg-red-600 py-5 font-mono text-base font-bold text-white shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-[0_0_45px_rgba(239,68,68,0.5)] active:translate-y-0"
                >
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex items-center justify-center"
                  >
                    <Gamepad2 className="mr-2 size-5 fill-white" />
                    Itch.io
                    <ExternalLink className="ml-2 size-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
