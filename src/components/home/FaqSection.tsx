"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How fast can you respond to an emergency call?", a: "We aim to respond to emergency calls within the hour in Stillwater and surrounding areas. We're available 24/7, 365 days a year — including nights, weekends, and holidays. When your heat or AC goes out, call us directly at (405) 338-9194." },
  { q: "Do you charge extra for after-hours or weekend service?", a: "No. We never charge overtime fees. Our pricing is flat whether you call at 8am on Monday or 2am on Saturday. This is one of the things we hear most from customers — they expected a surcharge and were surprised when there wasn't one." },
  { q: "What areas do you serve?", a: "We serve Stillwater and 17 surrounding communities including Perkins, Glencoe, Yale, Ripley, Cushing, Drumright, Morrison, Perry, Pawnee, Cleveland, Langston, Coyle, Mulhall, Orlando, Red Rock, Marland, and Ralston." },
  { q: "What HVAC brands do you work on?", a: "We service and install all major brands — Trane, Carrier, Lennox, Rheem, Goodman, York, and more. Our trucks are stocked with common parts for the most popular systems, which means faster repairs and fewer second trips." },
  { q: "Do you offer maintenance plans or service agreements?", a: "Yes. We offer HVAC maintenance plans that include scheduled tune-ups, priority scheduling, and discounts on repairs and parts. Regular maintenance extends system life, keeps energy bills down, and catches problems before they become breakdowns." },
  { q: "Do you offer free estimates?", a: "Yes, we offer free estimates on new system installations and major repairs. For service calls and diagnostics, there is a trip fee — but that fee is applied toward the cost of any repair we complete." },
  { q: "Is OKIE HVAC licensed and insured?", a: "Yes. We are fully licensed as an HVAC contractor in the state of Oklahoma and carry full liability insurance and workers' compensation coverage. You can request our license number when you call." },
  { q: "Do you offer financing?", a: "Yes. We offer flexible financing options for new system installations and major repairs. Ask us about current financing programs when you call — approval is fast and we can usually get you an answer the same day." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Got Questions?</p>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase">
              Frequently Asked <span className="text-gradient-cool">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-surface border rounded-xl overflow-hidden transition-colors ${open === i ? "border-primary/40" : "border-border"}`}>
                <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="font-heading text-sm md:text-base uppercase tracking-wide font-bold text-foreground">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
