const credentials = [
  { label: "Licensed HVAC Contractor", sub: "State of Oklahoma" },
  { label: "Fully Insured", sub: "Liability & Workers Comp" },
  { label: "Satisfaction Guaranteed", sub: "Done right or we fix it" },
  { label: "5.0 ★ Google Rating", sub: "252+ verified reviews" },
];

const CredibilityBar = () => {
  return (
    <section className="bg-surface-elevated border-y border-border py-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-8">
          Why Homeowners Trust OKIE HVAC
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((cred, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2 px-4">
              {/* Divider line accent */}
              <div className={`w-8 h-1 rounded-full mb-2 ${i % 2 === 0 ? "bg-primary" : "bg-secondary"}`} />
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-foreground leading-tight">
                {cred.label}
              </p>
              <p className="text-xs text-muted-foreground">{cred.sub}</p>
            </div>
          ))}
        </div>

        {/* Manufacturer logos placeholder */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Brands We Service & Install
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Trane", "Carrier", "Lennox", "Rheem", "Goodman", "York"].map((brand) => (
              <span
                key={brand}
                className="font-heading text-lg font-black uppercase tracking-widest text-muted-foreground"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
