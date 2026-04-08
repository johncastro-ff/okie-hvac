import {
  BUSINESS_NAME,
  PHONE,
  ADDRESS,
  STREET_ADDRESS,
  CITY,
  STATE,
  ZIP,
  SITE_URL,
  GEO_LAT,
  GEO_LNG,
  SERVICE_AREAS,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from "@/data/services";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Local Business / HVAC Business ──────────────────────────────
      {
        "@type": ["LocalBusiness", "HVACBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: BUSINESS_NAME,
        description:
          "Fast, reliable heating & cooling for homes and businesses in Stillwater, OK. 24/7 emergency service — no overtime charges, ever.",
        url: SITE_URL,
        telephone: PHONE,
        image: `${SITE_URL}/og-image.jpg`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/okie-logo-fire.png`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: STREET_ADDRESS,
          addressLocality: CITY,
          addressRegion: STATE,
          postalCode: ZIP,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO_LAT,
          longitude: GEO_LNG,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
            description: "24/7 Emergency Service Available",
          },
        ],
        areaServed: SERVICE_AREAS.map((area) => ({
          "@type": "City",
          name: area,
          containedInPlace: {
            "@type": "State",
            name: "Oklahoma",
          },
        })),
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_RATING.toString(),
          reviewCount: GOOGLE_REVIEW_COUNT.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "HVAC Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AC Repair",
                description:
                  "Fast, reliable air conditioning repair in Stillwater, OK. 24/7 emergency availability.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Furnace Repair",
                description:
                  "Expert furnace and heating system repair. Same-day service available.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HVAC Installation",
                description:
                  "Professional HVAC system installation sized and configured for your property.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HVAC Maintenance",
                description:
                  "Preventive HVAC maintenance plans to keep your system running efficiently year-round.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Emergency HVAC Repair",
                description:
                  "24/7 emergency HVAC repair with no overtime charges, no hidden fees.",
              },
            },
          ],
        },
        sameAs: [
          // Add social/directory URLs when available:
          // "https://www.facebook.com/okiehvac",
          // "https://www.google.com/maps?cid=...",
        ],
      },

      // ── WebSite ──────────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS_NAME,
        description:
          "Stillwater, Oklahoma's trusted HVAC contractor — heating, cooling, and emergency service.",
        inLanguage: "en-US",
      },

      // ── WebPage (Homepage) ───────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "OKIE HVAC Systems | Stillwater's #1 HVAC Contractor",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        description:
          "Fast, reliable HVAC & heating solutions for homes and businesses in Stillwater, OK. 24/7 emergency service — no overtime charges.",
        inLanguage: "en-US",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
