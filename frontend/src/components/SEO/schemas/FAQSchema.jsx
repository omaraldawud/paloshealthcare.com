/**
 * Reusable FAQ schema for pages with common questions
 * @param {Object[]} questions - Array of Q&A pairs
 * @param {string} questions[].question - FAQ question text
 * @param {string} questions[].answer - FAQ answer text
 */
export default function FAQSchema({ questions = [] }) {
  if (questions.length === 0) return null;

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((q, index) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
          // Optional: Add unique IDs for complex pages
          "@id": `#faq-${index + 1}`,
        })),
      })}
    </script>
  );
}
