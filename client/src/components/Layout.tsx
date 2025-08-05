import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DiscountBanner from "./DiscountBanner";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-primary text-white">
      <DiscountBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
