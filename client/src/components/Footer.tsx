import { Link } from "wouter";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-custom" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="footer-services-title">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/discord-bot-hosting" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-discord">
                  Discord Bot Hosting
                </Link>
              </li>
              <li>
                <Link href="/telegram-bot-hosting" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-telegram">
                  Telegram Bot Hosting
                </Link>
              </li>
              <li>
                <Link href="#web-hosting" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-web">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="#game-hosting" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-game">
                  Game Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="footer-learn-title">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="footer-policies-title">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#terms" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-secondary hover:text-white transition-colors" data-testid="footer-link-privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="footer-connect-title">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href={siteConfig.social.discord} 
                className="w-10 h-10 bg-border hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-link-discord"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.github} 
                className="w-10 h-10 bg-border hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-link-github"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.twitter} 
                className="w-10 h-10 bg-border hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                data-testid="social-link-twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-custom mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm" data-testid="footer-copyright">
            {siteConfig.footer.copyright}
          </p>
          <p className="text-secondary text-sm mt-2 md:mt-0" data-testid="footer-made-by">
            {siteConfig.footer.madeBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
