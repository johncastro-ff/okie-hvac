import { Clock, DollarSign, Shield, Wrench, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "24/7 Emergency Response",
    desc: "HVAC emergencies don't wait for business hours. Neither do we. Call any time — day, night, or weekend.",
    accent: "cool",
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "No Overtime Charges",
    desc: "Our price stays flat no matter when you call. 2am on a Sunday costs the same as Monday at noon.",
    accent: "warm",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Licensed & Fully Insured",
    desc: "Every job is covered. You hire a licensed HVAC contractor — not a guy with a truck.",
    accent: "cool",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "All Major Brands Serviced",
    desc: "Trane, Carrier, Lennox, Rheem, Goodman — we work on them all and carry common parts on every truck.",
    accent: "warm",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Locally Owned & Operated",
    desc: "We live here too. Our reputation is built on Stillwater neighbors telling their neighbors to call us.",
    accent: "cool",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Upfront Pricing",
    desc: "No surprises on your invoice. We give you the price before the work starts — and we stick to it.",
    accent: "warm",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background photo {REPLACE: OKIE trucks lined up, job site, or team photo} */}
      <img
        src="https://images.unsplash.com/photo-1621905251918-1e8b9b9b2a9b?auto=format&fit=crop&w=1800&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"

      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            Why OKIE HVAC?
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase">
            What Makes the{" "}
            <span className="text-gradient-warm">OKIE Difference</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                  pillar.accent === "cool"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                {pillar.icon}
              </div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
