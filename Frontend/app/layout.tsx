import { fetchFromStrapi } from "@/lib/strapi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalData = await fetchFromStrapi("/global", {
    populate: {
      navLinks: true,
      footerColumns: { populate: "*" },
    },
  });
  const global = globalData?.data ?? null;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header global={global} />
        {children}
        <Footer global={global} />
      </body>
    </html>
  );
}