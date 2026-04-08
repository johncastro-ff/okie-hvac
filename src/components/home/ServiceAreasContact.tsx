"use client";

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { SERVICE_AREAS, PHONE, PHONE_HREF } from "@/data/services";

const ServiceAreasContact = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-2">Connecting Communities</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-12">
            Proudly Serving <span className="text-gradient-cool">Stillwater</span>{" "}
            and Central Oklahoma
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Areas List */}
          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              View All Service Areas <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-heading text-xl font-bold uppercase mb-2 text-muted-foreground">Need Our Services?</h3>
            <h4 className="font-heading text-2xl font-bold uppercase mb-6 text-foreground">Request a Call</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="tel"
                  placeholder="Number"
                  className="bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-sm uppercase tracking-wide px-8 py-3 rounded-md transition-colors font-bold"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasContact;
