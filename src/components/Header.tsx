"use client";

import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { PHONE, PHONE_HREF, BUSINESS_NAME, SERVICE_SILOS } from "@/data/services";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-secondary text-white text-center py-2.5 px-4 text-sm font-semibold tracking-wide">
        Summer Ready? Schedule Your AC Tune-Up Before the Heat Hits —{" "}
        <Link href="/contact" className="underline underline-offset-2 hover:no-underline">
          Book Now →
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/okie-logo-fire.png" alt={BUSINESS_NAME} className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wide px-3 py-2">
              Home
            </Link>

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wide px-3 py-2">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-background border border-border rounded-lg shadow-2xl py-2 min-w-[220px] z-50">
                  {SERVICE_SILOS.map((silo) => (
                    <Link
                      key={silo.slug}
                      href={`/services/${silo.slug}`}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                    >
                      {silo.title}
                    </Link>
                  ))}
                  <div className="border-t border-border mt-2 pt-2">
                    <Link href="/services" className="block px-4 py-2.5 text-sm text-primary font-semibold hover:bg-surface transition-colors">
                      All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wide px-3 py-2">About</Link>
            <Link href="/service-areas" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wide px-3 py-2">Service Areas</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wide px-3 py-2">Contact</Link>
          </nav>

          {/* Right side CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-foreground font-heading font-semibold text-base uppercase tracking-wide">
              <Phone className="w-4 h-4 text-primary" />
              {PHONE}
            </a>
            <Link href="/contact" className="hidden md:block bg-secondary hover:bg-secondary/90 text-white font-heading text-sm uppercase tracking-wide px-5 py-2.5 rounded-md transition-colors font-bold">
              Request Service →
            </Link>
            <a href={PHONE_HREF} className="md:hidden bg-secondary hover:bg-secondary/90 text-white font-heading text-sm uppercase tracking-wide px-4 py-2.5 rounded-md transition-colors font-bold">
              Call Now
            </a>
            <button className="lg:hidden text-foreground p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden bg-background border-t border-border px-4 pb-6">
            <Link href="/" className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium uppercase tracking-wide border-b border-border" onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="border-b border-border">
              <button className="flex items-center justify-between w-full py-3 text-muted-foreground font-medium uppercase tracking-wide" onClick={() => setServicesOpen(!servicesOpen)}>
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pb-2 pl-4 space-y-1">
                  {SERVICE_SILOS.map((silo) => (
                    <Link key={silo.slug} href={`/services/${silo.slug}`} className="block py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>
                      {silo.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { label: "About", href: "/about" },
              { label: "Service Areas", href: "/service-areas" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium uppercase tracking-wide border-b border-border last:border-b-0" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-secondary text-white font-heading uppercase tracking-wide py-3 rounded-md font-bold w-full">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
