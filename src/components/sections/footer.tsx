import { ArrowUpRight, Heart } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/brand-icons";

const year = new Date().getFullYear();

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInIcon },
  { label: "X", href: siteConfig.socials.twitter, Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#home"
              className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
                {siteConfig.name.charAt(0)}
              </span>
              {siteConfig.name}
            </a>
            <p className="mt-4 text-sm text-pretty text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-brand-gradient hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-12 sm:gap-20">
            <div>
              <h4 className="text-sm font-semibold">Navigate</h4>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Connect</h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={siteConfig.socials.email}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={siteConfig.socials.email}
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-brand-1"
          >
            {siteConfig.email}
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
