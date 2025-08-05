import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 bg-transparent lg:bg-transparent backdrop-blur-md border-b border-custom/20" data-testid="header">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Leftmost */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-logo">
            <img 
              src={siteConfig.brand.logo} 
              alt="Portix Host" 
              className="w-8 h-8"
              data-testid="logo-image"
            />
            <span className="text-xl font-bold font-orbitron" data-testid="logo-text">
              <span className="text-white">{siteConfig.brand.name.first}</span>
              <span className="text-accent"> {siteConfig.brand.name.second}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.items.map((item, index) => {
              if (item.type === 'link' && item.href) {
                return (
                  <Link 
                    key={index}
                    href={item.href} 
                    className="text-white hover:text-accent transition-colors font-tech-mono text-sm flex items-center" 
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    <i className={`${item.icon} mr-2`}></i>
                    {item.name}
                  </Link>
                );
              }
              
              if (item.type === 'dropdown') {
                return (
                  <div key={index} className="relative group">
                    <button className="text-white hover:text-accent transition-colors font-tech-mono text-sm flex items-center" data-testid={`dropdown-${item.name.toLowerCase()}`}>
                      <i className={`${item.icon} mr-2`}></i>
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="nav-dropdown absolute top-full left-0 mt-3 w-52 bg-accent rounded-xl border border-custom shadow-2xl group-hover:show">
                      {item.items?.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          href={subItem.href} 
                          className={`flex items-center px-4 py-3 text-sm text-white hover:bg-blue-600 transition-colors ${
                            subIndex === 0 ? 'rounded-t-xl' : ''
                          } ${subIndex === item.items!.length - 1 ? 'rounded-b-xl' : ''}`}
                          data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <i className={`${subItem.icon} w-4 h-4 mr-3`}></i>
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

          {/* Client Area Button - Extreme Right */}
          <div className="hidden lg:flex relative group ml-auto">
            <button 
              className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-tech-mono text-sm transition-all duration-200 flex items-center shadow-lg" 
              data-testid="button-client-area"
            >
              <i className={`${siteConfig.navigation.clientArea.icon} mr-2`}></i>
              {siteConfig.navigation.clientArea.name}
              <ChevronDown className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="nav-dropdown absolute top-full right-0 mt-3 w-48 bg-accent rounded-xl border border-custom shadow-2xl group-hover:show">
              {siteConfig.navigation.clientArea.items.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`flex items-center px-4 py-3 text-sm text-white hover:bg-blue-600 transition-all duration-200 ${
                    index === 0 ? 'rounded-t-xl' : ''
                  } ${index === siteConfig.navigation.clientArea.items.length - 1 ? 'rounded-b-xl' : ''}`}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  <i className={`${item.icon} w-4 h-4 mr-3`}></i>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-accent transition-colors"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Solid Black Background */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-custom shadow-2xl" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              {siteConfig.navigation.items.map((item, index) => {
                if (item.type === 'link' && item.href) {
                  return (
                    <Link 
                      key={index}
                      href={item.href} 
                      className="flex items-center text-white hover:text-accent transition-colors font-tech-mono py-2" 
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <i className={`${item.icon} mr-3`}></i>
                      {item.name}
                    </Link>
                  );
                }
                
                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center text-white font-tech-mono py-2">
                        <i className={`${item.icon} mr-3`}></i>
                        {item.name}
                      </div>
                      <div className="pl-6 space-y-2">
                        {item.items?.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex}
                            href={subItem.href} 
                            className="flex items-center text-gray-300 hover:text-accent transition-colors font-tech-mono text-sm py-1"
                            data-testid={`mobile-link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <i className={`${subItem.icon} w-4 h-4 mr-3`}></i>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
              
              {/* Mobile Client Area */}
              <div className="border-t border-custom pt-4 mt-4">
                <div className="text-white font-tech-mono py-2">
                  <i className={`${siteConfig.navigation.clientArea.icon} mr-3`}></i>
                  {siteConfig.navigation.clientArea.name}
                </div>
                <div className="pl-6 space-y-2">
                  {siteConfig.navigation.clientArea.items.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href} 
                      className="flex items-center text-gray-300 hover:text-accent transition-colors font-tech-mono text-sm py-1"
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <i className={`${item.icon} w-4 h-4 mr-3`}></i>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}