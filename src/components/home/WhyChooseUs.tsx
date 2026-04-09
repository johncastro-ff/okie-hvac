import { Coffee, CheckCircle, Building2, Lightbulb, Phone, Star } from "lucide-react";

const pillars = [
  {
    icon: <Coffee className="w-7 h-7" />,
    title: "We Call Ahead. Sometimes We Bring Donuts.",
    desc: "Expect a heads-up before we show up, and don't be surprised if we pull up with donuts. You're our neighbors, not a ticket number — and we've never forgotten that.",
    accent: "cool",
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: "We Don't Leave Until You're Comfortable.",
    desc: "\"Done\" means your system is running right and you feel good about it — not just patched up so we can make the next call. We stay until the job's finished.",
    accent: "warm",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Small Service Calls to New Shopping Malls.",
    desc: "Every tech on our crew is skilled enough to run their own operation. Whether it's a quick residential fix or a full commercial build, we've got the experience to handle it — no tag-teaming required.",
    accent: "cool",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "When Other Contractors Get Stumped, They Call Us.",
    desc: "We know the code, the edge cases, and the fixes that leave other companies guessing. If your last contractor couldn't figure it out, give us a call — we hear that one all the time.",
    accent: "warm",
  },
  {
    icon: <Phone className="w-7 h-7" />,
    title: "Professional Office That Takes Care of You.",
    desc: "Our office runs as tight as the rest of the operation. You'll know your appointment window, get a real follow-up, and never have to chase us down for an answer. Someone always picks up.",
    accent: "cool",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Once You Go OKIE, You Don't Go Back.",
    desc: "Most of our work comes from repeat customers and the neighbors they send our way — that's not luck, that's The OKIE Standard. Once you see how we operate, you stop looking for a second opinion.",
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
