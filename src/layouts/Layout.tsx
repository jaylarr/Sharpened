import { useState } from "react";
import type { ReactNode } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "../components/ui/Button";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Solution", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "System", href: "#systems" },
    { name: "FAQ", href: "#faqs" },
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F7] text-[#333333] font-sans antialiased">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#FFC107] focus:px-4 focus:py-2 focus:font-semibold focus:text-[#0D1B3D]"
        href="#main-content"
      >
        Skip to main content
      </a>

      {/* Sticky Header */}
      <header
        className="sticky top-0 z-40 border-b border-[#D8DCE3] bg-white/90 backdrop-blur-md transition-shadow duration-200"
        role="banner"
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D1B3D] text-[#FFC107] transition-transform duration-200 group-hover:scale-105">
              <Zap className="size-5 fill-current" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-wider text-[#0D1B3D]">
              SHARPENED
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#62666D] hover:text-[#0D1B3D] transition-colors duration-150 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              href="/workflow-assessment"
              variant="primary"
              size="sm"
              className="shadow-sm hover:shadow"
            >
              Schedule Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D8DCE3] text-[#0D1B3D] hover:bg-[#F2F4F7] md:hidden focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#D8DCE3] bg-white md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-4 px-4 py-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-semibold text-[#333333] hover:text-[#0D1B3D] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-[#D8DCE3]" />
              <Button
                href="/workflow-assessment"
                variant="primary"
                fullWidth
                size="md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Assessment
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content" className="outline-none" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0D1B3D] text-white/90 border-t border-[#0D1B3D]" role="contentinfo">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFC107] text-[#0D1B3D]">
                  <Zap className="size-4.5 fill-current" />
                </span>
                <span className="font-display text-lg font-extrabold tracking-wider text-white">
                  SHARPENED
                </span>
              </div>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-white/70">
                Sharpened helps law firms reduce repetitive tasks, filing, follow-up, and handoff work through practical workflow assessment and automation.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#FFC107]">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[14px] text-white/60 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#FFC107]">Contact Info</h3>
              <p className="mt-4 text-[14px] leading-6 text-white/60">
                Sharpened Automation<br />
                Email: <a href="mailto:hello@sharpened.ph" className="hover:text-white underline">hello@sharpened.ph</a><br />
                Domain: <a href="https://sharp-enedautomation.site" target="_blank" rel="noreferrer" className="hover:text-white underline">sharp-enedautomation.site</a>
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} SHARPENED. All rights reserved.
            </p>
            <p className="text-xs text-white/40 italic">
              Where Automation Sharpens Your Practice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
