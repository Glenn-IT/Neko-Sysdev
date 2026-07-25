/**
 * Renders JSON-LD into the page. Next strips nothing from <script type="application/ld+json">,
 * so the structured data is present in the server-rendered HTML that crawlers fetch.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];

  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          // Schema objects are built from local content, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
