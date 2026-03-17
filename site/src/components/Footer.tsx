import Image from "next/image";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/levaworks" },
  { label: "Instagram", href: "https://instagram.com/levaworks" },
  { label: "X", href: "https://x.com/levaworks" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Image
            src="/logos/v_fulcrum_logo_dark.png"
            alt="LevaWorks"
            width={120}
            height={30}
            className="h-6 w-auto"
          />
          <span className="text-muted text-sm">
            Small business. Big leverage.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} levaworksAI, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
