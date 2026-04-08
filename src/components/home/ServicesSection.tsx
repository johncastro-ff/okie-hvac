import Link from "next/link";
import { Snowflake, Flame, Wrench, Wind, Thermometer, Settings } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "HVAC Contractor",
    desc: "Full-service HVAC solutions for residential and commercial properties. Installation, repair, and maintenance.",
    slug: "hvac-contractor",
    accent: "cool" as const,
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "Air Conditioning",
    desc: "AC installation, tune-ups, and ductless mini-split systems. Stay cool through Oklahoma summers.",
    slug: "air-conditioning-contractor",
    accent: "cool" as const,
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "AC Repair",
    desc: "Fast diagnosis and repair for all cooling issues — refrigerant leaks, compressor failures, and more.",
    slug: "air-conditioning-repair-service",
    accent: "cool" as const,
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "Heating Contractor",
    desc: "Furnace, heat pump, and ductless heating installation. Keep your family warm when Oklahoma winters hit.",
    slug: "heating-contractor",
    accent: "warm" as const,
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Furnace Repair",
    desc: "Emergency heating repair for furnaces and heat pumps. We respond fast — no heat is an emergency.",
    slug: "furnace-repair-service",
    accent: "warm" as const,
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Ductwork & Air Quality",
    desc: "Duct installation, repair, cleaning, thermostat upgrades, and indoor air quality solutions.",
    slug: "mechanical-contractor",
    accent: "cool" as const,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase">
            How Can We{" "}
            <span className="text-gradient-cool">Help You?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.slug}`}
              className="group bg-surface border border-border rounded-xl p-8 hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors ${
                  service.accent === "cool"
                    ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                    : "bg-secondary/10 text-secondary group-hover:bg-secondary/20"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.desc}
              </p>
              <span
                className={`text-sm font-heading font-bold uppercase tracking-wide transition-colors ${
                  service.accent === "cool"
                    ? "text-primary group-hover:text-primary/80"
                    : "text-secondary group-hover:text-secondary/80"
                }`}
              >
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-border hover:border-primary/50 hover:bg-surface text-foreground font-heading text-sm uppercase tracking-wide px-8 py-4 rounded-md transition-colors font-bold"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
