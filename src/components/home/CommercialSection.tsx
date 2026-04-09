import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/data/services";

const capabilities = [
  "New construction HVAC systems",
  "Retail & restaurant build-outs",
  "Multi-unit residential projects",
  "Warehouse & industrial climate control",
  "Rooftop unit installation & service",
  "Planned maintenance contracts",
];

const CommercialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Content */}
          <div className="lg:w-7/12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-2">
              Beyond Residential
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase leading-[1.1] mb-6">
              Big Enough for{" "}
              <span className="text-gradient-warm">Commercial.</span>{" "}
              <br className="hidden md:block" />
              Local Enough to{" "}
              <span className="text-gradient-cool">Care.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Most local HVAC companies run a single truck and stick to residential calls. OKIE HVAC Systems handles large-scale commercial projects for general contractors, property managers, and business owners across Central Oklahoma — with the crew, equipment, and expertise to deliver on time and on budget.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-sm uppercase tracking-wide px-6 py-3 rounded-md transition-colors font-bold text-center"
              >
                Call for a Commercial Quote
              </a>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm uppercase tracking-wide px-6 py-3 rounded-md transition-colors font-bold text-center"
              >
                Request a Bid →
              </Link>
            </div>
          </div>

          {/* Right — Photo {REPLACE: rooftop commercial HVAC install, tech on roof} */}
          <div className="lg:w-5/12 w-full">
            <div className="relative overflow-hidden rounded-2xl h-[420px] lg:h-[500px]">
              <img
                src="/commercial_roof_mall.jpg"
                alt="Commercial rooftop HVAC installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="bg-secondary/90 backdrop-blur rounded-lg px-5 py-4 text-white">
                  <p className="font-heading text-2xl font-black leading-none">GC</p>
                  <p className="font-heading text-xs uppercase tracking-widest mt-1 opacity-90">Ready</p>
                </div>
                <div className="bg-black/60 backdrop-blur rounded-lg px-5 py-4 text-white border border-white/10 flex-1">
                  <p className="font-heading text-sm font-bold uppercase tracking-wide leading-snug">
                    Full-Scope Mechanical
                  </p>
                  <p className="text-xs text-white/70 mt-1">Design through commissioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
