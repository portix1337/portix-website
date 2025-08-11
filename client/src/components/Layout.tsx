import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-primary">
      {/* Discount Banner */}
      <div className="bg-accent text-white text-center py-3" data-testid="discount-banner">
        <p className="font-tech-mono text-sm">
          <span className="font-medium"></span><span className="bg-white/20 px-2 py-1 rounded font-bold">WELCOME TO PORTIXHOST</span>
        </p>
      </div>
      
      <Header />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}