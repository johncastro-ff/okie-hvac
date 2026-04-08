import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_HREF, ADDRESS, BUSINESS_NAME, SERVICE_SILOS } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4 text-foreground">{BUSINESS_NAME}</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href={PHONE_HREF} className="hover:text-foreground transition-colors">{PHONE}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-foreground">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Service Areas", href: "/service-areas" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-foreground">Services</h4>
            <nav className="space-y-2 text-sm">
              {SERVICE_SILOS.map((silo) => (
                <Link key={silo.slug} href={`/services/${silo.slug}`} className="block text-muted-foreground hover:text-foreground transition-colors">
                  {silo.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-foreground">Find Us</h4>
            <div className="w-full h-48 bg-surface-elevated rounded-lg border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5!2d-97.058!3d36.116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA2JzU3LjYiTiA5N8KwMDMnMjguOCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="OKIE HVAC Systems Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. Licensed & Insured HVAC Contractor in Stillwater, OK.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
