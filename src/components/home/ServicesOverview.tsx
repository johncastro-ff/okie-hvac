import Link from "next/link";
import { Snowflake, Flame, Wrench, Fan } from "lucide-react";

const serviceCategories = [
  {
    icon: <Snowflake className="w-10 h-10" />,
    title: "Cooling Services",
    description: "Whether the heat goes out or a cool air stops flowing, our HVAC pros diagnose and repair all issues. We offer quick, reliable service to return your home to normal.",
    link: "/services/air-conditioning-contractor",
    accent: "cool" as const,
    cta: "Request Service Now",
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: "Heating Services",
    description: "When the temperature drops, you want your heating system to work flawlessly. From furnaces to heat pumps, we install, repair, and maintain all heating systems.",
    link: "/services/heating-contractor",
    accent: "warm" as const,
    cta: "Request Service Now",
  },
  {
    icon: <Fan className="w-10 h-10" />,
    title: "AC Repair & Maintenance",
    description: "Is your AC running but not cooling? We diagnose and repair all causes of poor cooling including low refrigerant, dirty coils, compressor issues, and airflow problems.",
    link: "/services/air-conditioning-repair-service",
    accent: "cool" as const,
    cta: "Request Service Now",
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "Ductwork & Indoor Air Quality",
    description: "Complete mechanical contracting services including duct installation, repair, cleaning, thermostat upgrades, and indoor air quality solutions.",
    link: "/services/mechanical-contractor",
    accent: "cool" as const,
    cta: "Request Service Now",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase">
            Help When You <span className="text-gradient-cool">Need It Most</span>
          </h2>
        </div>

        <div className="mt-12 space-y-0">
          {serviceCategories.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-stretch border-b border-border ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image placeholder */}
              <div className="md:w-5/12 bg-surface-elevated flex items-center justify-center p-12 min-h-[280px]">
                <div className={service.accent === "cool" ? "text-cool/40" : "text-warm/40"}>
                  {/* Replace with real photos */}
                  <div className="text-center">
                    <div className="mx-auto mb-3 opacity-60">{service.icon}</div>
                    <p className="text-xs text-muted-foreground">Service Photo</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-4">
                  <span className={service.accent === "cool" ? "text-gradient-cool" : "text-gradient-warm"}>
                    {service.title}
                  </span>
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wide px-6 py-3 rounded-md transition-colors font-bold ${
                      service.accent === "cool"
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                  >
                    {service.cta} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
