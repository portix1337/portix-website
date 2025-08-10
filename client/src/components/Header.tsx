import { useState } from "react";
import { Link } from "wouter";
import { 
  Menu, 
  X, 
  ChevronDown, 
  HelpCircle, 
  Newspaper, 
  FileText, 
  Users,
  Briefcase,
  Laptop,
  Server,
  Home, 
  Rocket,
  MessageSquare,
  Globe
} from "lucide-react";
// Mock siteConfig for a self-contained example. In a real app, this would be an import.
const siteConfig = {
  brand: {
    logo: "https://raw.githubusercontent.com/portix1337/assets/main/logo.png",
    name: {
      first: "Portix",
      second: "Host"
    }
  },
  navigation: {
    items: [
      { 
        name: "Products",
        type: "dropdown",
        items: [
          { name: "Web Hosting", href: "/web-hosting", icon: "Globe" },
          { name: "Game Hosting", href: "/game-hosting", icon: "Laptop" }
        ]
      },
    ],
    clientArea: {
      name: "Client Area",
      icon: "Briefcase",
      items: [
        { name: "Panel", href: "https://panel.portix.online", icon: "Server" },
        { name: "Billing", href: "https://billing.portix.online/login", icon: "FileText" },
      ]
    },
  },
};

// A utility to dynamically get the Lucide icon component from its name string.
const getIconComponent = (iconName) => {
  const icons = {
    Menu, X, ChevronDown, HelpCircle, Newspaper, FileText, Users, Briefcase, Laptop, Server, Home, Rocket, MessageSquare, Globe
  };
  return icons[iconName] || null;
};

// Utility function to check if a URL is external
const isExternalLink = (href) => {
  return href && (href.startsWith('http') || href.startsWith('https'));
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // The original code used `useIsMobile`, but for this self-contained example,
  // we'll simulate the behavior with a hardcoded value.
  const useIsMobile = () => false; 
  const isMobile = useIsMobile();

  // Define top-level links and dropdowns.
  const homeLink = { name: 'Home', href: '/', type: 'link', icon: 'Home' };

  // Define the new Bot Hosting dropdown with sub-categories.
  const botHostingDropdown = {
    type: 'dropdown',
    name: 'Bot Hosting',
    icon: 'MessageSquare',
    items: [
      { name: 'Discord Bot Hosting', href: '/discord-bot-hosting', icon: 'MessageSquare' },
      { name: 'Telegram Bot Hosting', href: '/telegram-bot-hosting', icon: 'MessageSquare' }
    ]
  };
  
  // Find the original Products dropdown and filter out specific sub-items.
  const originalProducts = siteConfig.navigation.items.find(item => item.name === 'Products');
  let productsDropdown = null;
  if (originalProducts && originalProducts.type === 'dropdown') {
    // Filter out items that are now top-level or are no longer needed.
    const filteredSubItems = originalProducts.items.filter(
      (subItem) => !['Web Hosting', 'Game Hosting', 'Learn', 'Bot Hosting'].includes(subItem.name)
    );
    // Only create the dropdown if it has items left after filtering.
    if (filteredSubItems.length > 0) {
      productsDropdown = { ...originalProducts, items: filteredSubItems };
    }
  }

  // RENAMED the 'Support' dropdown to 'Learn'
  const learnDropdown = {
    type: 'dropdown',
    name: 'Learn',
    icon: 'HelpCircle',
    items: [
      { name: 'Blog', href: 'https://blog.portix.online', icon: 'Newspaper' },
      { name: 'Docs', href: 'https://docs.portix.online', icon: 'FileText' },
      { name: 'About Us', href: 'https://info.portix.online', icon: 'Users' }
    ]
  };

  // Construct the final array of navigation items in the desired order.
  const navigationItems = [homeLink];
  if (productsDropdown) {
    navigationItems.push(productsDropdown);
  }
  navigationItems.push(botHostingDropdown);
  navigationItems.push(learnDropdown);

  // Dynamically render the Client Area button icon for consistency.
  const ClientAreaIcon = getIconComponent(siteConfig.navigation.clientArea.icon);
  const SupportIcon = getIconComponent('HelpCircle');

  return (
    <header className="sticky top-0 z-50 bg-transparent lg:bg-transparent backdrop-blur-md border-b border-custom/20" data-testid="header">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Leftmost */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-logo">
            <img 
              src={siteConfig.brand.logo} 
              alt="Portix Host" 
              className="w-20 h-20" // 64px × 64px
              data-testid="logo-image"
            />
            <span className="text-xl font-bold font-orbitron" data-testid="logo-text">
              <span className="text-white">{siteConfig.brand.name.first}</span>
              <span className="text-accent"> {siteConfig.brand.name.second}</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigationItems.map((item, index) => {
              const IconComponent = getIconComponent(item.icon);
              
              if (item.type === 'link' && item.href) {
                // Render as a standard <a> tag for external links
                if (isExternalLink(item.href)) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent transition-colors font-tech-mono text-base flex items-center"
                      data-testid={`link-${item.name.toLowerCase()}`}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                      {item.name}
                    </a>
                  );
                }
                // Otherwise, use wouter's Link for internal links
                return (
                  <Link 
                    key={index}
                    href={item.href} 
                    className="text-white hover:text-accent transition-colors font-tech-mono text-base flex items-center" 
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                    {item.name}
                  </Link>
                );
              }
              
              if (item.type === 'dropdown') {
                return (
                  <div key={index} className="relative group">
                    <button className="text-white hover:text-accent transition-colors font-tech-mono text-base flex items-center" data-testid={`dropdown-${item.name.toLowerCase()}`}>
                      {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="nav-dropdown absolute top-full left-0 mt-3 w-52 bg-transparent rounded-xl border border-custom/20 shadow-2xl group-hover:show">
                      {item.items?.map((subItem, subIndex) => {
                        const SubIconComponent = getIconComponent(subItem.icon);
                        // Render as a standard <a> tag for external sub-links
                        if (isExternalLink(subItem.href)) {
                          return (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center px-4 py-3 text-base text-white hover:bg-white/10 transition-colors ${
                                subIndex === 0 ? 'rounded-t-xl' : ''
                              } ${subIndex === item.items!.length - 1 ? 'rounded-b-xl' : ''}`}
                              data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {SubIconComponent && <SubIconComponent className="w-4 h-4 mr-3" />}
                              {subItem.name}
                            </a>
                          );
                        }
                        // Otherwise, use wouter's Link
                        return (
                          <Link 
                            key={subIndex}
                            href={subItem.href}
                            className={`flex items-center px-4 py-3 text-base text-white hover:bg-white/10 transition-colors ${
                              subIndex === 0 ? 'rounded-t-xl' : ''
                            } ${subIndex === item.items!.length - 1 ? 'rounded-b-xl' : ''}`}
                            data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {SubIconComponent && <SubIconComponent className="w-4 h-4 mr-3" />}
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* New Support Button and Client Area Button - Extreme Right */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* NEW: Support Button */}
            <a 
              href="https://support.portix.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-tech-mono text-base transition-all duration-200 flex items-center shadow-lg"
              data-testid="button-support"
            >
              {SupportIcon && <SupportIcon className="w-4 h-4 mr-2" />}
              Support
            </a>

            {/* Client Area Button */}
            <div className="relative group">
              <button 
                className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-tech-mono text-base transition-all duration-200 flex items-center shadow-lg" 
                data-testid="button-client-area"
              >
                {ClientAreaIcon && <ClientAreaIcon className="w-4 h-4 mr-2" />}
                {siteConfig.navigation.clientArea.name}
                <ChevronDown className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="nav-dropdown absolute top-full right-0 mt-3 w-48 bg-transparent rounded-xl border border-custom/20 shadow-2xl group-hover:show">
                {siteConfig.navigation.clientArea.items.map((item, index) => {
                  const ClientIconComponent = getIconComponent(item.icon);
                  // Render as a standard <a> tag for external client area links
                  if (isExternalLink(item.href)) {
                    return (
                      <a 
                        key={index}
                        href={item.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-3 text-base text-white hover:bg-white/10 transition-all duration-200 ${
                          index === 0 ? 'rounded-t-xl' : ''
                        } ${index === siteConfig.navigation.clientArea.items.length - 1 ? 'rounded-b-xl' : ''}`}
                        data-testid={`link-${item.name.toLowerCase()}`}
                      >
                        {ClientIconComponent && <ClientIconComponent className="w-4 h-4 mr-3" />}
                        {item.name}
                      </a>
                    );
                  }
                  // Otherwise, use wouter's Link
                  return (
                    <Link 
                      key={index}
                      href={item.href} 
                      className={`flex items-center px-4 py-3 text-base text-white hover:bg-white/10 transition-all duration-200 ${
                        index === 0 ? 'rounded-t-xl' : ''
                      } ${index === siteConfig.navigation.clientArea.items.length - 1 ? 'rounded-b-xl' : ''}`}
                      data-testid={`link-${item.name.toLowerCase()}`}
                    >
                      {ClientIconComponent && <ClientIconComponent className="w-4 h-4 mr-3" />}
                      {item.name}
                    </Link>
                  );
                })}
              </div>
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
              {/* The filtered list is used here */}
              {navigationItems.map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                if (item.type === 'link' && item.href) {
                  // Render as a standard <a> tag for external links in mobile menu
                  if (isExternalLink(item.href)) {
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-accent transition-colors font-tech-mono py-2 text-base"
                        data-testid={`mobile-link-${item.name.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 mr-3" />}
                        {item.name}
                      </a>
                    );
                  }
                  // Otherwise, use wouter's Link
                  return (
                    <Link 
                      key={index}
                      href={item.href} 
                      className="flex items-center text-white hover:text-accent transition-colors font-tech-mono py-2 text-base" 
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4 mr-3" />}
                      {item.name}
                    </Link>
                  );
                }
                
                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center text-white font-tech-mono py-2 text-base">
                        {IconComponent && <IconComponent className="w-4 h-4 mr-3" />}
                        {item.name}
                      </div>
                      <div className="pl-6 space-y-2">
                        {item.items?.map((subItem, subIndex) => {
                          const SubIconComponent = getIconComponent(subItem.icon);
                          // Render as a standard <a> tag for external sub-links in mobile menu
                          if (isExternalLink(subItem.href)) {
                            return (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center text-gray-300 hover:text-accent transition-colors font-tech-mono text-base py-1"
                                data-testid={`mobile-link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {SubIconComponent && <SubIconComponent className="w-4 h-4 mr-3" />}
                                {subItem.name}
                              </a>
                            );
                          }
                          // Otherwise, use wouter's Link
                          return (
                            <Link 
                              key={subIndex}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center text-gray-300 hover:text-accent transition-colors font-tech-mono text-base py-1"
                              data-testid={`mobile-link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {SubIconComponent && <SubIconComponent className="w-4 h-4 mr-3" />}
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return null;
              })}

              {/* NEW: Mobile Support Button */}
              <a 
                href="https://support.portix.online" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center text-white hover:text-accent transition-colors font-tech-mono py-2 text-base border-t border-custom pt-4 mt-4"
                data-testid="mobile-button-support"
              >
                {SupportIcon && <SupportIcon className="w-4 h-4 mr-3" />}
                Support
              </a>
              
              {/* Mobile Client Area */}
              <div className="border-t border-custom pt-4 mt-4">
                <div className="text-white font-tech-mono py-2 text-base">
                  {ClientAreaIcon && <ClientAreaIcon className="w-4 h-4 mr-3" />}
                  {siteConfig.navigation.clientArea.name}
                </div>
                <div className="pl-6 space-y-2">
                  {siteConfig.navigation.clientArea.items.map((item, index) => {
                    const ClientIconComponent = getIconComponent(item.icon);
                    // Render as a standard <a> tag for external client area links in mobile menu
                    if (isExternalLink(item.href)) {
                      return (
                        <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-accent transition-colors font-tech-mono text-base py-1"
                          data-testid={`mobile-link-${item.name.toLowerCase()}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {ClientIconComponent && <ClientIconComponent className="w-4 h-4 mr-3" />}
                          {item.name}
                        </a>
                      );
                    }
                    // Otherwise, use wouter's Link
                    return (
                      <Link 
                        key={index}
                        href={item.href} 
                        className="flex items-center text-gray-300 hover:text-accent transition-colors font-tech-mono text-base py-1"
                        data-testid={`mobile-link-${item.name.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {ClientIconComponent && <ClientIconComponent className="w-4 h-4 mr-3" />}
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
