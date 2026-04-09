import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS } from "@/data/services";

// ─────────────────────────────────────────────────────────────────────────────
// GHL FORM EMBED
// When ready: go to OKIE Plumbing GHL sub-account → Sites → Forms → your form
// Click "Integrate" → copy the embed code → paste the iframe src URL below
// ─────────────────────────────────────────────────────────────────────────────
const GHL_FORM_SRC = ""; // ← paste GHL form embed URL here (e.g. https://api.leadconnectorhq.com/widget/form/XXXXXXXX)

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — contact info */}
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

              <a href={EMAIL_HREF} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                  <p className="text-foreground font-medium">{EMAIL}</p>
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

          {/* Right — GHL form embed */}
          <div className="bg-background border border-border rounded-2xl p-8 min-h-[400px] flex flex-col">
            {GHL_FORM_SRC ? (
              <iframe
                src={GHL_FORM_SRC}
                style={{ border: "none", width: "100%" }}
                scrolling="no"
                id="ghl-contact-form"
                className="flex-1 min-h-[500px]"
                title="Contact OKIE HVAC Systems"
              />
            ) : (
              /* Placeholder shown until GHL form is connected */
              <div className="flex flex-col items-center justify-center flex-1 text-center py-12 gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground mb-2">
                    Ready to Help
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                    Give us a call or shoot us an email — we'll get you scheduled fast.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={PHONE_HREF}
                      className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-heading text-sm uppercase tracking-wide px-6 py-3 rounded-lg transition-colors font-bold"
                    >
                      <Phone className="w-4 h-4" /> {PHONE}
                    </a>
                    <a
                      href={EMAIL_HREF}
                      className="flex items-center justify-center gap-2 border border-border hover:border-primary/60 text-foreground font-heading text-sm uppercase tracking-wide px-6 py-3 rounded-lg transition-colors font-bold"
                    >
                      <Mail className="w-4 h-4" /> Email Us
                    </a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Online booking form coming soon
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
