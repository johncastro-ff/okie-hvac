import { PHONE, PHONE_HREF } from "@/data/services";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-warm/10 via-background to-cool/10" />
      <div className="relative container mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-4">
          Free Estimates on Complete System Replacement!
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
          System Down? <span className="text-gradient-warm">We're Ready.</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          24/7 emergency HVAC repair in Stillwater, OK. No overtime charges. No hidden fees.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-xl uppercase tracking-wide px-10 py-5 rounded-md transition-colors font-bold glow-warm animate-pulse-glow"
        >
          Call Now — {PHONE}
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
