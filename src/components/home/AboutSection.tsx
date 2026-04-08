import Link from "next/link";


const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/claytin-hero.jpg"
                alt="Claytin Beaver — OKIE HVAC Systems"
                className="w-full h-[560px] object-cover object-top"
              />
              {/* Accent border overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-5 bg-secondary text-white rounded-xl px-6 py-5 shadow-2xl">
              <p className="font-heading text-4xl font-black leading-none">252</p>
              <p className="font-heading text-xs uppercase tracking-widest mt-1 opacity-90">Google Reviews</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              About OKIE HVAC Systems
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Stillwater's HVAC Company That{" "}
              <span className="text-gradient-warm">Actually Shows Up</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                OKIE HVAC Systems was built on a simple idea: homeowners and businesses in Stillwater deserve an HVAC company that picks up the phone, shows up on time, and does the job right the first time.
              </p>
              <p>
                Led by Claytin Beaver, our team handles everything from emergency breakdowns at 2am to full system replacements. We serve residential and commercial customers across Stillwater and 17 surrounding communities.
              </p>
              <p>
                We don't charge overtime — day, night, weekend, or holiday. When your system goes down, the price stays the same. That's the OKIE promise.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-border">
              {[
                { value: "252+", label: "5-Star Reviews" },
                { value: "24/7", label: "Emergency Service" },
                { value: "$0", label: "Overtime Charges" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-heading text-3xl font-black text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm uppercase tracking-wide px-8 py-4 rounded-md transition-colors font-bold"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
