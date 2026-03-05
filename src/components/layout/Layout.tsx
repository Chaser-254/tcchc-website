import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
interface LayoutProps {
  children: ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-deep-charcoal font-sans selection:bg-terracotta/30 selection:text-deep-charcoal">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>);

}