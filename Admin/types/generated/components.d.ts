import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAiFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_ai_features';
  info: {
    displayName: 'AI Feature';
    icon: 'cpu';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAiShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_ai_showcases';
  info: {
    displayName: 'AI Showcase';
    icon: 'cpu';
  };
  attributes: {
    chatInputPlaceholder: Schema.Attribute.String;
    chatMessages: Schema.Attribute.Component<'sections.chat-message', true>;
    chatTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'sections.ai-feature', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsBadge extends Struct.ComponentSchema {
  collectionName: 'components_sections_badges';
  info: {
    displayName: 'Badge';
    icon: 'shield';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['shield', 'clock']> &
      Schema.Attribute.DefaultTo<'shield'>;
    label: Schema.Attribute.String;
  };
}

export interface SectionsBarValue extends Struct.ComponentSchema {
  collectionName: 'components_sections_bar_values';
  info: {
    displayName: 'Bar Value';
    icon: 'chart-bar';
  };
  attributes: {
    percent: Schema.Attribute.Integer;
  };
}

export interface SectionsCaseItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_items';
  info: {
    displayName: 'Case Item';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    metric: Schema.Attribute.String;
  };
}

export interface SectionsChatMessage extends Struct.ComponentSchema {
  collectionName: 'components_sections_chat_messages';
  info: {
    displayName: 'Chat Message';
    icon: 'message';
  };
  attributes: {
    sender: Schema.Attribute.Enumeration<['user', 'ai']> &
      Schema.Attribute.DefaultTo<'user'>;
    text: Schema.Attribute.Text;
  };
}

export interface SectionsDemoCases extends Struct.ComponentSchema {
  collectionName: 'components_sections_demo_cases';
  info: {
    displayName: 'Demo Cases';
    icon: 'play';
  };
  attributes: {
    caseStudies: Schema.Attribute.Component<'sections.case-item', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    videoLabel: Schema.Attribute.String;
    videoThumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsEdition extends Struct.ComponentSchema {
  collectionName: 'components_sections_editions';
  info: {
    displayName: 'Edition';
    icon: 'layer';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SectionsFeatureLine extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_lines';
  info: {
    displayName: 'Feature Line';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_sections_footer_columns';
  info: {
    displayName: 'Footer Column';
    icon: 'layout';
  };
  attributes: {
    links: Schema.Attribute.Component<'sections.nav-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'rocket';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingEmphasis: Schema.Attribute.String;
    primaryCtaText: Schema.Attribute.String;
    primaryCtaUrl: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    secondaryCtaUrl: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
    trustLabel: Schema.Attribute.String;
    trustTags: Schema.Attribute.Component<'sections.tag', true>;
  };
}

export interface SectionsKpi extends Struct.ComponentSchema {
  collectionName: 'components_sections_kpis';
  info: {
    displayName: 'KPI';
    icon: 'chart-line';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsNavLink extends Struct.ComponentSchema {
  collectionName: 'components_sections_nav_links';
  info: {
    displayName: 'Nav Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'price-tag';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Component<'sections.pricing-product', true>;
  };
}

export interface SectionsPricingProduct extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_products';
  info: {
    displayName: 'Pricing Product';
    icon: 'box';
  };
  attributes: {
    comparisonRows: Schema.Attribute.Component<'sections.pricing-row', true>;
    productKey: Schema.Attribute.String;
    productLabel: Schema.Attribute.String;
    tiers: Schema.Attribute.Component<'sections.pricing-tier', true>;
  };
}

export interface SectionsPricingRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_rows';
  info: {
    displayName: 'Pricing Row';
    icon: 'list';
  };
  attributes: {
    label: Schema.Attribute.String;
    values: Schema.Attribute.JSON;
  };
}

export interface SectionsPricingTier extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricing_tiers';
  info: {
    displayName: 'Pricing Tier';
    icon: 'price-tag';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    period: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface SectionsProductCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_product_cards';
  info: {
    displayName: 'Product Card';
    icon: 'box';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    linkUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
    productKey: Schema.Attribute.String;
  };
}

export interface SectionsProductGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_product_grids';
  info: {
    displayName: 'Product Grid';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    filterChips: Schema.Attribute.Component<'sections.tag', true>;
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Component<'sections.product-card', true>;
    techTags: Schema.Attribute.Component<'sections.tag', true>;
  };
}

export interface SectionsResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_resource_cards';
  info: {
    displayName: 'Resource Card';
    icon: 'document';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['document', 'chart', 'calculator']> &
      Schema.Attribute.DefaultTo<'document'>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsResourcesLead extends Struct.ComponentSchema {
  collectionName: 'components_sections_resources_leads';
  info: {
    displayName: 'Resources Lead';
    icon: 'envelope';
  };
  attributes: {
    description: Schema.Attribute.Text;
    disclaimerText: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    leadFormHeading: Schema.Attribute.String;
    leadFormSubtext: Schema.Attribute.String;
    productOptions: Schema.Attribute.Component<'sections.tag', true>;
    resources: Schema.Attribute.Component<'sections.resource-card', true>;
    submitButtonText: Schema.Attribute.String;
    successHeading: Schema.Attribute.String;
    successText: Schema.Attribute.String;
  };
}

export interface SectionsSpotlight extends Struct.ComponentSchema {
  collectionName: 'components_sections_spotlights';
  info: {
    displayName: 'Spotlight';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    editions: Schema.Attribute.Component<'sections.edition', true>;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'sections.feature-line', true>;
    heading: Schema.Attribute.String;
    visualBadge: Schema.Attribute.String;
    visualBars: Schema.Attribute.Component<'sections.bar-value', true>;
    visualKpis: Schema.Attribute.Component<'sections.kpi', true>;
    visualProductName: Schema.Attribute.String;
  };
}

export interface SectionsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'chart-bar';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsStatsBand extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_bands';
  info: {
    displayName: 'Stats Band';
    icon: 'chart-bar';
  };
  attributes: {
    stats: Schema.Attribute.Component<'sections.stat-item', true>;
  };
}

export interface SectionsStory extends Struct.ComponentSchema {
  collectionName: 'components_sections_stories';
  info: {
    displayName: 'Story';
    icon: 'quote';
  };
  attributes: {
    metric: Schema.Attribute.String;
    personName: Schema.Attribute.String;
    personRole: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SectionsTag extends Struct.ComponentSchema {
  collectionName: 'components_sections_tags';
  info: {
    displayName: 'Tag';
    icon: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'quote';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    stories: Schema.Attribute.Component<'sections.story', true>;
  };
}

export interface SectionsTrustBadges extends Struct.ComponentSchema {
  collectionName: 'components_sections_trust_badges';
  info: {
    displayName: 'Trust Badges';
    icon: 'shield';
  };
  attributes: {
    badges: Schema.Attribute.Component<'sections.badge', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.ai-feature': SectionsAiFeature;
      'sections.ai-showcase': SectionsAiShowcase;
      'sections.badge': SectionsBadge;
      'sections.bar-value': SectionsBarValue;
      'sections.case-item': SectionsCaseItem;
      'sections.chat-message': SectionsChatMessage;
      'sections.demo-cases': SectionsDemoCases;
      'sections.edition': SectionsEdition;
      'sections.feature-line': SectionsFeatureLine;
      'sections.footer-column': SectionsFooterColumn;
      'sections.hero': SectionsHero;
      'sections.kpi': SectionsKpi;
      'sections.nav-link': SectionsNavLink;
      'sections.pricing': SectionsPricing;
      'sections.pricing-product': SectionsPricingProduct;
      'sections.pricing-row': SectionsPricingRow;
      'sections.pricing-tier': SectionsPricingTier;
      'sections.product-card': SectionsProductCard;
      'sections.product-grid': SectionsProductGrid;
      'sections.resource-card': SectionsResourceCard;
      'sections.resources-lead': SectionsResourcesLead;
      'sections.spotlight': SectionsSpotlight;
      'sections.stat-item': SectionsStatItem;
      'sections.stats-band': SectionsStatsBand;
      'sections.story': SectionsStory;
      'sections.tag': SectionsTag;
      'sections.testimonials': SectionsTestimonials;
      'sections.trust-badges': SectionsTrustBadges;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
