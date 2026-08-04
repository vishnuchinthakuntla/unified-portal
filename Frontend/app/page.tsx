import { fetchFromStrapi } from "@/lib/strapi";
import BlockRenderer from "@/components/BlockRenderer";

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

export default async function Home() {
  const data = await fetchFromStrapi("/pages", {
    filters: { slug: { $eq: "home" } },
    ...PAGE_QUERY,
  });

  const page = data?.data?.[0] ?? null;

  if (!page) {
    return (
      <main>
        <div className="wrap" style={{ padding: "2rem 0" }}>
          The homepage content is not available right now.
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
