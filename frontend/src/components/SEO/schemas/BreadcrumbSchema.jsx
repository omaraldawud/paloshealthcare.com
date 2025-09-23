export default function BreadcrumbSchema({ items }) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      })}
    </script>
  );
}

// Default props (override when needed)
BreadcrumbSchema.defaultProps = {
  items: [{ name: "Home", url: "https://rushrash.com" }],
};
