import { ArrowRight, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks: { name: string; href: string; icon: IconType }[] = [
  {
    name: "X (Formerly Twitter)",
    href: "https://x.com/stuckpixelgame",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/stuckpixelstudio",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@stuckpixelstudio",
    icon: FaYoutube,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-mono text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Press & <span className="text-red-500">Contact</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-500" />
          <p className="mt-6 text-lg text-zinc-300">
            Get in touch for press inquiries, collaborations, or just to say
            hello
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Get in Touch */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-mono text-2xl font-bold text-white">
                Get in <span className="text-red-500">Touch</span>
              </h3>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                  <Mail className="size-6 text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-zinc-400">Email us</p>
                  <a
                    href="mailto:social.media@stuckpixelstudio.com"
                    className="font-mono text-sm md:text-base font-semibold text-white break-all hover:text-red-400 transition-colors sm:text-lg"
                  >
                    social.media@stuckpixelstudio.com
                  </a>
                </div>
              </div>
            </div>

            {/* Stuck Pixel Studio Info */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-mono text-xl font-bold text-white">
                Stuck Pixel Studio
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
                <li className="flex gap-2">
                  <span className="text-red-500">•</span>
                  Access to the new games released that month.
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span>
                  Focus on small, experimental games.
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span>
                  Games debut on Patreon before appearing on Steam/itch.io
                  later.
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">•</span>
                  Latam indie games.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Follow Us */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-mono text-2xl font-bold text-white">
                Follow <span className="text-red-500">Us</span>
              </h3>
              <div className="mt-6 space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-800/50 px-4 py-3 transition-all hover:border-red-500/50 hover:bg-zinc-800"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-5 text-zinc-400" />
                        <span className="font-mono text-base font-semibold text-white">
                          {social.name}
                        </span>
                      </div>
                      <ArrowRight className="size-4 text-zinc-400" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* For Business Inquiries */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-mono text-xl font-bold text-white">
                For Business Inquiries
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Interested in collaborations, publishing deals, or featuring our
                games? We&apos;d love to hear from you at our main contact
                email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
