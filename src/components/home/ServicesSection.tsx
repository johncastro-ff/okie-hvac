import Link from "next/link";
import { Snowflake, Flame, Wrench, Wind } from "lucide-react";

const services = [
  {
    title: "AC Repair & Maintenance",
    desc: "When your cold air stops flowing, our HVAC pros diagnose and repair all issues. We offer quick, reliable service to return your home to normal.",
    slug: "air-conditioning-contractor",
    accent: "cool" as const,
    icon: <Snowflake className="w-16 h-16" />,
    photo: "/Claytin_outside_unit.jpg",
  },
  {
    title: "Heating Repair & Maintenance",
    desc: "When the cold front comes in and the temps drop, you'll want your heating system to work flawlessly. From furnaces to heat pumps, we install, repair, and maintain all heating systems.",
    slug: "heating-contractor",
    accent: "warm" as const,
    icon: <Flame className="w-16 h-16" />,
    photo: "/attic_heater_services.jpg",
  },
  {
    title: "Maintenance Plans",
    desc: "Most system failures are preventable. A seasonal tune-up keeps your system running efficient, extends its life, and catches small problems before they become expensive ones. Ask about our annual maintenance plans.",
    slug: "maintenance",
    accent: "cool" as const,
    icon: <Wind className="w-16 h-16" />,
    photo: "/Claytin-outside-maintenance.jpg",
  },
  {
    title: "Ductwork & Indoor Air Quality",
    desc: "Complete mechanical contracting including ductwork installation, repair, cleaning, thermostat upgrades, and indoor air quality solutions.",
    slug: "mechanical-contractor",
    accent: "cool" as const,
    icon: <Wrench className="w-16 h-16" />,
    photo: "/Claytin_inside_ducts.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28">

      {/* Heading — centered, contained */}
      <div className="container mx-auto px-4 text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
          Our Services
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase">
          Help When You{" "}
          <span className="text-gradient-cool">Need It Most</span>
        </h2>
      </div>

      {/* Full-bleed alternating rows */}
      <div>
        {services.map((service, i) => {
          const imageOnLeft = i % 2 === 0;
          const isCool = service.accent === "cool";

          const imageBlock = (
            <div className="w-full lg:w-1/2 min-h-[380px] md:min-h-[460px] relative bg-surface border-border flex flex-col items-center justify-center gap-4 border-b lg:border-b-0 overflow-hidden">
              {service.photo ? (
                <img src={service.photo} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className={isCool ? "text-primary/25" : "text-secondary/25"}>
                    {service.icon}
                  </div>
                  <span className="text-xs text-muted-foreground/30 uppercase tracking-widest font-semibold">
                    Service Photo
                  </span>
                </>
              )}
            </div>
          );

          const textBlock = (
            <div className="w-full lg:w-1/2 flex items-center justify-center px-8 md:px-14 lg:px-16 py-16 bg-background">
              <div className="max-w-md w-full">
                <h3 className={`font-heading text-2xl md:text-3xl font-black uppercase tracking-wide mb-5 ${isCool ? "text-primary" : "text-secondary"}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className={`inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wide font-bold px-6 py-3 rounded-md border-2 transition-all ${
                    isCool
                      ? "border-primary text-primary hover:bg-primary hover:text-background"
                      : "bg-secondary border-secondary text-white hover:bg-secondary/90"
                  }`}
                >
                  Request Service Now →
                </Link>
              </div>
            </div>
          );

          return (
            <div
              key={i}
              className="flex flex-col lg:flex-row border-b border-border last:border-b-0"
            >
              {/* Image left on even rows, right on odd rows */}
              {imageOnLeft ? imageBlock : textBlock}
              {imageOnLeft ? textBlock : imageBlock}
            </div>
          );
        })}
      </div>

      {/* View all */}
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 border border-border hover:border-primary/50 hover:bg-surface text-foreground font-heading text-sm uppercase tracking-wide px-8 py-4 rounded-md transition-colors font-bold"
        >
          View All Services →
        </Link>
      </div>

    </section>
  );
};

export default ServicesSection;
