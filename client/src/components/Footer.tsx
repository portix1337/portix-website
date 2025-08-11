import { Link } from "wouter";

// The original `siteConfig` is imported, but for this self-contained
// example, we'll define a temporary one with the updated values.
const siteConfig = {
  brand: {
    name: {
      first: "Portix",
      second: "Host"
    }
  },
  footer: {
    logo: "https://raw.githubusercontent.com/portix1337/assets/main/logo.png",
    tagline: "Your ultimate hosting solution for gaming, bots, and websites. High performance, low latency, and 24/7 support.",
    links: {
      hosting: [
        { name: "Discord Bot Hosting", href: "/discord-bot-hosting" },
        { name: "Telegram Hosting", href: "/telegram-bot-hosting" },
      ],
      support: [
        { name: "Documentation", href: "https://docs.portix.online" },
        { name: "Contact Us", href: "https://support.portix.online" },
        { name: "Status Page", href: "https://status.portix.online" },
        { name: "Community", href: "https://discord.gg/Q7NDCe7r" }, // Placeholder for discord link
      ],
      legal: [
        { name: "Terms of Service", href: "https://tos.portix.online" },
        { name: "Privacy Policy", href: "https://privacy.portix.online" },
        { name: "Cookie Policy", href: "https://cookies.portix.online" },
        { name: "DMCA", href: "https://www.dmca.com/Protection/Status.aspx?id=c93ead9f-e1d5-4f62-b07e-0623e1c65e38" },
      ],
    },
    bottom: {
      text: "Made with ❤️ by",
      link: {
        text: "Portix.online",
        href: "https://portix.online"
      }
    }
  }
};

export default function Footer() {
  // A helper function to determine if a link is internal or external
  const isInternal = (href) => {
    return href.startsWith('/') || href.startsWith('#');
  };

  // A component to handle either internal `Link` or external `a` tags
  const CustomLink = ({ href, children, ...props }) => {
    if (isInternal(href)) {
      return <Link href={href} {...props}>{children}</Link>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  };

  return (
    <footer className="bg-secondary py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left side - Logo and tagline */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <img
                src={siteConfig.footer.logo}
                alt="Portix Host"
                className="w-20 h-20" // 64px × 64px
                data-testid="footer-logo"
              />
              <span className="text-xl font-bold font-orbitron" data-testid="footer-brand">
                <span className="text-white">{siteConfig.brand.name.first}</span>
                <span className="text-accent"> {siteConfig.brand.name.second}</span>
              </span>
            </div>
            <p
              className="text-secondary text-sm leading-relaxed font-tech-mono max-w-sm mx-auto lg:mx-0"
              data-testid="footer-tagline"
            >
              {siteConfig.footer.tagline}
            </p>
          </div>

          {/* Hosting Links */}
          <div>
            <h3 className="text-white font-orbitron font-bold mb-6" data-testid="footer-hosting-title">
              Hosting
            </h3>
            <ul className="space-y-3">
              {siteConfig.footer.links.hosting.map((link, index) => (
                <li key={index}>
                  <CustomLink
                    href={link.href}
                    className="text-secondary hover:text-accent transition-colors font-tech-mono text-sm"
                    data-testid={`footer-hosting-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-orbitron font-bold mb-6" data-testid="footer-support-title">
              Support
            </h3>
            <ul className="space-y-3">
              {siteConfig.footer.links.support.map((link, index) => (
                <li key={index}>
                  <CustomLink
                    href={link.href}
                    className="text-secondary hover:text-accent transition-colors font-tech-mono text-sm"
                    data-testid={`footer-support-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-orbitron font-bold mb-6" data-testid="footer-legal-title">
              Legal
            </h3>
            <ul className="space-y-3">
              {siteConfig.footer.links.legal.map((link, index) => (
                <li key={index}>
                  <CustomLink
                    href={link.href}
                    className="text-secondary hover:text-accent transition-colors font-tech-mono text-sm"
                    data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-custom mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-secondary font-tech-mono text-sm mb-4 md:mb-0">
            <span>{siteConfig.footer.bottom.text} </span>
            <a
              href={siteConfig.footer.bottom.link.href}
              className="text-accent hover:text-blue-400 transition-colors ml-1"
              data-testid="footer-portix-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.footer.bottom.link.text}
            </a>
          </div>

          {/* DMCA Badge */}
          <div className="flex items-center">
            {/* The DMCA badge is rendered using dangerouslySetInnerHTML. 
                This is necessary to include the external script tag for the badge to function. */}
            <div
              dangerouslySetInnerHTML={{
                __html: `<a href="//www.dmca.com/Protection/Status.aspx?id=c93ead9f-e1d5-4f62-b07e-0623e1c65e38" title="DMCA.com Protection Status" class="dmca-badge"> <img src="//images.dmca.com/Badges/dmca-badge-w100-5x1-02.png?ID=c93ead9f-e1d5-4f62-b07e-0623e1c65e38" alt="DMCA.com Protection Status"></a> <script src="//images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>`
              }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
