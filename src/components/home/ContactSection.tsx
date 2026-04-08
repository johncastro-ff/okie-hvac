import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_HREF, ADDRESS } from "@/data/services";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              Get In Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Ready to{" "}
              <span className="text-gradient-warm">Schedule Service?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Fill out the form and we'll get back to you fast. For emergencies, call us directly — we're available 24/7.
            </p>

            <div className="space-y-5">
              <a href={PHONE_HREF} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Call or Text</p>
                  <p className="font-heading text-xl font-bold text-foreground uppercase tracking-wide">{PHONE}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Address</p>
                  <p className="text-foreground font-medium">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Hours</p>
                  <p className="text-foreground font-medium">24/7 Emergency Service Available</p>
                  <p className="text-muted-foreground text-sm">Office: Mon–Fri 8am–5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground mb-6">
              Request Service
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="(405) 555-0100"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                  Service Needed
                </label>
                <select className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors text-sm">
                  <option value="">Select a service...</option>
                  <option>AC Repair</option>
                  <option>Heating Repair</option>
                  <option>AC Installation</option>
                  <option>Heating Installation</option>
                  <option>Maintenance / Tune-Up</option>
                  <option>Emergency Service</option>
                  <option>Ductwork</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">
                  Tell Us What's Going On
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the issue or what you need..."
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-heading text-sm uppercase tracking-wide py-4 rounded-lg transition-colors font-bold"
              >
                Send Request →
              </button>

              <p className="text-xs text-center text-muted-foreground">
                For emergencies, call{" "}
                <a href={PHONE_HREF} className="text-secondary font-semibold hover:underline">
                  {PHONE}
                </a>{" "}
                — we're available 24/7.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
