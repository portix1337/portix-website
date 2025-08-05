import { Link } from "wouter";
import { siteConfig } from "@/lib/config";

export default function Footer() {
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
                className="w-10 h-10"
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
                  <Link 
                    href={link.href} 
                    className="text-secondary hover:text-accent transition-colors font-tech-mono text-sm"
                    data-testid={`footer-hosting-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
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
                  <Link 
                    href={link.href} 
                    className="text-secondary hover:text-accent transition-colors font-tech-mono text-sm"
                    data-testid={`footer-support-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
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
                  <Link 
                    href={link.href} 
                    className="text-secondary hover:text-accent transition-colors font-tech-mono text-sm"
                    data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-custom mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-secondary font-tech-mono text-sm mb-4 md:mb-0">
            <span>{siteConfig.footer.bottom.text} </span>
            <Link 
              href={siteConfig.footer.bottom.link.href}
              className="text-accent hover:text-blue-400 transition-colors ml-1"
              data-testid="footer-portix-link"
            >
              {siteConfig.footer.bottom.link.text}
            </Link>
          </div>
          
          {/* DMCA Badge */}
          <div className="flex items-center">
            <button className="bg-accent hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-tech-mono text-xs transition-colors">
              DMCA Protected
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}