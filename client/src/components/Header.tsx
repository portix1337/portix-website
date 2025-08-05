import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-custom" data-testid="header">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-logo">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-white">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors" data-testid="link-home">
              HOME
            </Link>
            
            {/* Bot Hosting Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-accent transition-colors flex items-center" data-testid="button-bot-hosting">
                Bot Hosting
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="nav-dropdown absolute top-full left-0 mt-2 w-48 bg-secondary rounded-lg border border-custom shadow-xl group-hover:show">
                <Link href="/discord-bot-hosting" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-t-lg" data-testid="link-discord-bot">
                  Discord Bot Hosting
                </Link>
                <Link href="/telegram-bot-hosting" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-b-lg" data-testid="link-telegram-bot">
                  Telegram Bot Hosting
                </Link>
              </div>
            </div>

            {/* Web Hosting Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-accent transition-colors flex items-center" data-testid="button-web-hosting">
                Web Hosting
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="nav-dropdown absolute top-full left-0 mt-2 w-48 bg-secondary rounded-lg border border-custom shadow-xl group-hover:show">
                <Link href="#wordpress" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-t-lg" data-testid="link-wordpress">
                  WordPress Hosting
                </Link>
                <Link href="#shared" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-b-lg" data-testid="link-shared">
                  Shared Hosting
                </Link>
              </div>
            </div>

            {/* Game Hosting Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-accent transition-colors flex items-center" data-testid="button-game-hosting">
                Game Hosting
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="nav-dropdown absolute top-full left-0 mt-2 w-48 bg-secondary rounded-lg border border-custom shadow-xl group-hover:show">
                <Link href="#minecraft" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-lg" data-testid="link-minecraft">
                  Minecraft Hosting
                </Link>
              </div>
            </div>

            {/* Learn Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-accent transition-colors flex items-center" data-testid="button-learn">
                LEARN
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="nav-dropdown absolute top-full left-0 mt-2 w-32 bg-secondary rounded-lg border border-custom shadow-xl group-hover:show">
                <Link href="/faq" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-t-lg" data-testid="link-faq">
                  FAQ
                </Link>
                <Link href="/about-us" className="block px-4 py-2 text-sm text-white hover:bg-border" data-testid="link-about">
                  About Us
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-b-lg" data-testid="link-blog">
                  Blog
                </Link>
              </div>
            </div>

            <Link href="#support" className="text-white hover:text-accent transition-colors" data-testid="link-support">
              Support
            </Link>
          </div>

          {/* Client Area Button */}
          <div className="hidden lg:flex relative group">
            <button className="bg-accent hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center" data-testid="button-client-area">
              Client Area
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <div className="nav-dropdown absolute top-full right-0 mt-2 w-32 bg-secondary rounded-lg border border-custom shadow-xl group-hover:show">
              <Link href="#billing" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-t-lg" data-testid="link-billing">
                Billing
              </Link>
              <Link href="#panel" className="block px-4 py-2 text-sm text-white hover:bg-border" data-testid="link-panel">
                Panel
              </Link>
              <Link href="#login" className="block px-4 py-2 text-sm text-white hover:bg-border rounded-b-lg" data-testid="link-login">
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            data-testid="button-mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden fixed top-0 left-0 w-full h-full bg-primary z-50 show" data-testid="mobile-menu">
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">{siteConfig.name}</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
                data-testid="button-close-mobile-menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-4">
              <Link href="/" className="block text-white text-lg" data-testid="mobile-link-home">
                HOME
              </Link>
              <div className="space-y-2">
                <span className="block text-white text-lg font-medium">Bot Hosting</span>
                <Link href="/discord-bot-hosting" className="block text-secondary ml-4" data-testid="mobile-link-discord">
                  Discord Bot Hosting
                </Link>
                <Link href="/telegram-bot-hosting" className="block text-secondary ml-4" data-testid="mobile-link-telegram">
                  Telegram Bot Hosting
                </Link>
              </div>
              <div className="space-y-2">
                <span className="block text-white text-lg font-medium">Web Hosting</span>
                <Link href="#wordpress" className="block text-secondary ml-4" data-testid="mobile-link-wordpress">
                  WordPress Hosting
                </Link>
                <Link href="#shared" className="block text-secondary ml-4" data-testid="mobile-link-shared">
                  Shared Hosting
                </Link>
              </div>
              <Link href="/faq" className="block text-white text-lg" data-testid="mobile-link-faq">
                FAQ
              </Link>
              <Link href="/about-us" className="block text-white text-lg" data-testid="mobile-link-about">
                About Us
              </Link>
              <Link href="/blog" className="block text-white text-lg" data-testid="mobile-link-blog">
                Blog
              </Link>
              <Link href="#support" className="block text-white text-lg" data-testid="mobile-link-support">
                Support
              </Link>
              <Link href="#client-area" className="block bg-accent text-white px-4 py-2 rounded-lg text-center" data-testid="mobile-link-client-area">
                Client Area
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
