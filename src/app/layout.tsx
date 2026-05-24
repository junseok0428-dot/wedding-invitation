import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Gowun_Batang, Playfair_Display } from "next/font/google";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gowun-batang",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-invitation.vercel.app"),
  title: "강준석♡윤선영 모바일 청첩장",
  description: "소중한 날, 함께 축복해주시면 감사하겠습니다.",
  openGraph: {
    title: "강준석♡윤선영 모바일 청첩장",
    description: "소중한 날, 함께 축복해주시면 감사하겠습니다.",
    url: "https://wedding-invitation.vercel.app",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "/images/og-image.png",
        width: 2000,
        height: 630,
        alt: "강준석♡윤선영 모바일 청첩장",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "강준석♡윤선영 모바일 청첩장",
    description: "소중한 날, 함께 축복해주시면 감사하겠습니다.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${gowunBatang.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}