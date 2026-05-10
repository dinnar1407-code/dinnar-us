export function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dinnar Automatic Intelligence Inc.",
    url: "https://dinnar.us",
    logo: "https://dinnar.us/images/logo.png",
    description:
      "Dinnar engineers vision, motion, and AI into a single platform for lights-out manufacturing.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1735 Technology Drive, Suite 720",
      addressLocality: "San Jose",
      addressRegion: "CA",
      postalCode: "95110",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@dinnar.us",
      contactType: "sales",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
