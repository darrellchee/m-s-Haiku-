import type { Metadata } from "next";
import "./globals.css";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${businessConfig.name} | Premium Cleaning Services Sydney`,
  description: `${businessConfig.tagline} Professional end-of-lease, house, and commercial cleaning across Sydney's inner west.`,
  openGraph: {
    title: `${businessConfig.name} | Premium Cleaning Services Sydney`,
    description: `${businessConfig.tagline} Professional cleaning services across Sydney.`,
    type: "website",
    locale: "en_AU",
    siteName: businessConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: businessConfig.name,
              description: businessConfig.tagline,
              telephone: businessConfig.phone,
              areaServed: {
                "@type": "Place",
                name: businessConfig.serviceArea,
                geo: {
                  "@type": "Circle",
                  address: "Marrickville, Sydney, NSW, Australia",
                  radius: "20km",
                },
              },
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="font-sans text-navy bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
