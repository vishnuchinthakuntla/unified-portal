import { fetchFromStrapi } from "@/lib/strapi";
import BlockRenderer from "@/components/BlockRenderer";

// Deep-populate every Dynamic Zone component and any media/nested components inside them.
const PAGE_QUERY = {
  populate: {
    blocks: {
      on: {
        "sections.pricing": {
          populate: {
            products: {
              populate: ["tiers", "comparisonRows"],
            },
          },
        },
        "sections.hero": { populate: "*" },
        "sections.product-grid": { populate: "*" },
        "sections.stats-band": { populate: "*" },
        "sections.spotlight": { populate: "*" },
        "sections.demo-cases": { populate: "*" },
        "sections.ai-showcase": { populate: "*" },
        "sections.testimonials": { populate: "*" },
        "sections.trust-badges": { populate: "*" },
        "sections.resources-lead": { populate: "*" },
      },
    },
  },
};

export default async function DynamicPage({ params }) {
  const { slug } = await params;

  const data = await fetchFromStrapi("/pages", {
    filters: { slug: { $eq: slug } },
    ...PAGE_QUERY,
  });

  const page = data?.data?.[0] ?? null;
  if (!page) {
    return (
      <main>
        <div className="wrap" style={{ padding: "2rem 0" }}>
          Content is unavailable right now.
        </div>
      </main>
    );
  }

  return (
    <main>
      <BlockRenderer blocks={page.blocks ?? []} />
    </main>
  );
}

// Pre-generates known slugs at build time; new pages still work via ISR (revalidate: 60)
export async function generateStaticParams() {
  try {
    const data = await fetchFromStrapi("/pages", { fields: ["slug"] });
    return (data?.data || []).map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}
