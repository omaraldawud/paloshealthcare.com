/**
 * Schema for individual services (to be used alongside GlobalBusinessSchema)
 * @param {Object[]} services - Array of service objects
 * @param {string} services[].name - Service name
 * @param {string} services[].description - Service description
 * @param {string} [serviceType="Service"] - Schema.org service type
 */
export default function ServiceSchema({
  services = [],
  serviceType = "Service",
}) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@graph": services.map((service) => ({
          "@type": serviceType,
          name: service.name,
          description: service.description,
          provider: {
            "@type": "LocalBusiness",
            "@id": "https://rushrash.com/#business", // Links to GlobalBusinessSchema
          },
          ...(service.areaServed && {
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: service.areaServed.geoMidpoint,
              geoRadius: service.areaServed.geoRadius,
            },
          }),
          ...(service.offers && {
            offers: {
              "@type": "Offer",
              price: service.offers.price,
              priceCurrency: service.offers.priceCurrency || "USD",
            },
          }),
        })),
      })}
    </script>
  );
}
