import { ShieldCheck, Clock, Banknote, MapPin } from "lucide-react";

const trustItems = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Licensed & Insured",
    desc: "Fully certified HVAC contractor",
  },
  {
    icon: <Clock className="w-8 h-8 text-secondary" />,
    title: "24/7 Emergency Service",
    desc: "We answer when others don't",
  },
  {
    icon: <Banknote className="w-8 h-8 text-primary" />,
    title: "No Overtime Charges",
    desc: "Same price day or night",
  },
  {
    icon: <MapPin className="w-8 h-8 text-secondary" />,
    title: "Locally Owned",
    desc: "Stillwater proud since day one",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="shrink-0 w-14 h-14 rounded-lg bg-surface-elevated border border-border flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="font-heading text-sm uppercase font-bold text-foreground tracking-wide leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
