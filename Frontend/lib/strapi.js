import qs from "qs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "");

export async function fetchFromStrapi(path, queryObj = {}) {
  if (!STRAPI_URL) {
    console.warn("NEXT_PUBLIC_STRAPI_URL is not configured. Skipping Strapi request.");
    return null;
  }

  const query = qs.stringify(queryObj, { encodeValuesOnly: true });
  const url = `${STRAPI_URL}/api${path}${query ? `?${query}` : ""}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN || ""}`,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const errorBody = await res.text().catch(() => "");
      console.error(`Strapi fetch failed for ${url}: ${res.status} ${errorBody}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(`Strapi fetch failed for ${url}:`, error);
    return null;
  }
}

// Builds the full media URL for an image field (e.g. page.banner.url)
export function strapiImage(media) {
  if (!media?.url) return null;
  if (media.url.startsWith("http")) return media.url;
  if (!STRAPI_URL) return media.url;
  return `${STRAPI_URL}${media.url}`;
}
