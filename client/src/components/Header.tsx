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
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-logo">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
              <i className="fas fa-rocket text-white text-lg"></i>
            </div>
            <span className="text-2xl font-bold text-white font-orbitron">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.items.map((item, index) => {
              if (item.type === 'link' && item.href) {
                return (
                  <Link 
                    key={index}
                    href={item.href} 
                    className="text-white hover:text-accent transition-colors font-tech-mono font-medium" 
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                );
              }
              
              if (item.type === 'dropdown') {
                return (
                  <div key={index} className="relative group">
                    <button 
                      className="text-white hover:text-accent transition-colors flex items-center font-tech-mono font-medium" 
                      data-testid={`button-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="nav-dropdown absolute top-full left-0 mt-3 w-56 bg-secondary/95 backdrop-blur-sm rounded-xl border border-custom shadow-2xl group-hover:show">
                      {item.items?.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          href={subItem.href} 
                          className={`flex items-center px-4 py-3 text-sm text-white hover:bg-accent/10 hover:text-accent transition-all duration-200 ${
                            subIndex === 0 ? 'rounded-t-xl' : ''
                          } ${subIndex === item.items!.length - 1 ? 'rounded-b-xl' : ''}`}
                          data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <i className={`${subItem.icon} w-5 h-5 mr-3 text-accent`}></i>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return null;
            })}
          </div>

          {/* Client Area Button - Far Right */}
          <div className="hidden lg:flex relative group">
            <button 
              className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-tech-mono font-medium transition-all duration-200 flex items-center shadow-lg" 
              data-testid="button-client-area"
            >
              Client Area
              <ChevronDown className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="nav-dropdown absolute top-full right-0 mt-3 w-48 bg-secondary/95 backdrop-blur-sm rounded-xl border border-custom shadow-2xl group-hover:show">
              {siteConfig.navigation.clientArea.items.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`flex items-center px-4 py-3 text-sm text-white hover:bg-accent/10 hover:text-accent transition-all duration-200 ${
                    index === 0 ? 'rounded-t-xl' : ''
                  } ${index === siteConfig.navigation.clientArea.items.length - 1 ? 'rounded-b-xl' : ''}`}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  <i className={`${item.icon} w-5 h-5 mr-3 text-accent`}></i>
                  {item.name}
                </Link>
              ))}
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
