import Hero from "./blocks/Hero";
import ProductGrid from "./blocks/ProductGrid";
import StatsBand from "./blocks/StatsBand";
import Spotlight from "./blocks/Spotlight";
import Pricing from "./blocks/Pricing";
import DemoCases from "./blocks/DemoCases";
import AiShowcase from "./blocks/AiShowcase";
import Testimonials from "./blocks/Testimonials";
import TrustBadges from "./blocks/TrustBadges";
import ResourcesLead from "./blocks/ResourcesLead";

const componentMap = {
  "sections.hero": Hero,
  "sections.product-grid": ProductGrid,
  "sections.stats-band": StatsBand,
  "sections.spotlight": Spotlight,
  "sections.pricing": Pricing,
  "sections.demo-cases": DemoCases,
  "sections.ai-showcase": AiShowcase,
  "sections.testimonials": Testimonials,
  "sections.trust-badges": TrustBadges,
  "sections.resources-lead": ResourcesLead,
};

export default function BlockRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block) => {
    const Component = componentMap[block.__component];
    if (!Component) {
      console.warn(`No renderer registered for block: ${block.__component}`);
      return null;
    }
    return <Component key={`${block.__component}-${block.id}`} data={block} />;
  });
}
