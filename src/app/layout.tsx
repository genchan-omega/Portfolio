// /src/layout.tsx

import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

// Metaデータ
export const metadata: Metadata = {
  title: "genchan_omega's Site",
  description: "Let me introduce myself.",
  openGraph: {
    siteName: "genchan_omega's Site",
    type: "website",
    locale: "ja_JP",
    url: "https://genchan-omega.dev",
    images: [
      {
        url: "/default-ogp.jpg",
        width: 1200,
        height: 630,
        alt: "共通OGP画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@genchan_omega",
  },
  metadataBase: new URL("https://genchan-omega.dev"),
};

const notoserif = Noto_Serif_JP({weight: "400", subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        lang="ja"
        className={`${notoserif.className}`}
      >
        {children}
      </body>
    </html>
  );
}
