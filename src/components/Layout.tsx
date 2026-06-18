import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:font-medium">
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
