import { Star } from "lucide-react";

const reviews = [
  {
    name: "[ First Name Last Initial ]",
    text: "[ Paste real Google review quote here ]",
    rating: 5,
    location: "Stillwater, OK",
  },
  {
    name: "[ First Name Last Initial ]",
    text: "[ Paste real Google review quote here ]",
    rating: 5,
    location: "Perkins, OK",
  },
  {
    name: "[ First Name Last Initial ]",
    text: "[ Paste real Google review quote here ]",
    rating: 5,
    location: "Stillwater, OK",
  },
];

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="pb-20 md:pb-28">
      {/* Photo strip {REPLACE: Stephen's trucks / team on a job / happy customer handshake} */}
      <div className="relative h-56 md:h-72 mb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80"
          alt="OKIE HVAC team"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70 font-semibold mb-3">
            Customer Reviews
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-white">
            Rated 5 Stars with{" "}
            <span className="text-secondary">252+ Google Reviews</span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-0">

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-xl p-8 flex flex-col hover:border-primary/30 transition-colors"
            >
              <Stars count={review.rating} />
              <p className="text-muted-foreground leading-relaxed my-5 flex-1 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-heading text-sm uppercase font-bold text-foreground tracking-wide">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{review.location}</p>
                </div>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 opacity-60"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Platform summary badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-surface border border-border rounded-full px-6 py-3">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-4 w-auto"
            />
            <Stars />
            <span className="font-heading text-sm font-bold text-foreground uppercase tracking-wide">
              252 Reviews
            </span>
          </div>
          <a
            href="https://www.google.com/maps/search/OKIE+HVAC+Systems+Stillwater+OK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
