import Link from "next/link";
import { CreditCard } from "lucide-react";

const benefits = [
  "Low monthly payment options",
  "Fast credit decisions",
  "No prepayment penalties",
  "Available on new installs & major repairs",
];

const FinancingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                Financing Available
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-black uppercase leading-tight mb-5">
                Don't Let Cost Stop{" "}
                <span className="text-gradient-cool">Your Comfort</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A new system is a big investment. We offer flexible financing options so you can get the heating and cooling you need today — and pay over time on a schedule that works for you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-heading text-sm uppercase tracking-wide px-8 py-4 rounded-md transition-colors font-bold"
              >
                Ask Us About Financing →
              </Link>
            </div>

            {/* Right — Photo {REPLACE: tech walking customer through options at their home, tablet in hand} */}
            <div className="relative overflow-hidden rounded-2xl h-80 md:h-full min-h-[320px]">
              <img
                src="/ac-not-working-1.jpg"
                alt="Homeowner struggling with broken AC in the summer heat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10">
                <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Financing subject to credit approval</p>
                <p className="text-white text-sm font-medium leading-snug">Get the system you need today — pay over time on your schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
