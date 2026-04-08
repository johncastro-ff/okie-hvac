import Link from "next/link";
import { Star, Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/data/services";


const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex">
      {/* Left panel — content */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 md:px-12 lg:px-16 py-20 bg-background">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-5">
          Serving Stillwater, OK &amp; Surrounding Areas
        </p>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase leading-[1] font-black mb-6">
          <span className="text-foreground">The</span>{" "}
          <span className="text-gradient-warm">OKIE</span>
          <br />
          <span className="text-foreground">Standard.</span>
          <br />
          <span className="text-gradient-cool">Stillwater's</span>
          <br />
          <span className="text-foreground">HVAC</span>{" "}
          <span className="text-muted-foreground font-light">Done Right.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md leading-relaxed">
          Fast, reliable heating & cooling for your home or business. 24/7 emergency service — no overtime charges, ever.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md transition-colors font-bold"
          >
            <Phone className="w-5 h-5" />
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border border-border hover:border-primary/60 hover:bg-surface text-foreground font-heading text-lg uppercase tracking-wide px-8 py-4 rounded-md transition-colors font-bold"
          >
            Request Service →
          </Link>
        </div>

        {/* Google Review Badge */}
        <div className="inline-flex items-center gap-3 bg-surface border border-border rounded-lg px-5 py-3 w-fit">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          <div className="flex items-center gap-1.5">
            <span className="text-foreground font-bold text-base">5.0</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
          </div>
          <span className="text-muted-foreground text-sm font-medium">252 Google Reviews</span>
        </div>
      </div>

      {/* Right panel — Claytin photo */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/claytin-hero.jpg"
          alt="Claytin Beaver — OKIE HVAC Systems"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Bottom gradient fade into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Mobile: show photo as background */}
      <div className="lg:hidden absolute inset-0 -z-0">
        <img src="/claytin-hero.jpg" alt="" className="w-full h-full object-cover object-top opacity-15" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
    </section>
  );
};

export default HeroSection;
