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
  metadataBase: new URL("https://wedding-invitation-gamma-olive.vercel.app"),
  title: "강준석♡윤선영의 결혼식에 초대합니다",
  description: "2027년 01월 30일 PM 03시 10분",
  openGraph: {
    title: "강준석♡윤선영의 결혼식에 초대합니다",
    description: "2027년 01월 30일 PM 03시 10분",
    url: "https://wedding-invitation-gamma-olive.vercel.app",
    siteName: "Wedding Invitation",
    images: [
  {
    url: "https://wedding-invitation-gamma-olive.vercel.app/images/og-image.png",
    width: 1200,
    height: 630,
    alt: "강준석♡윤선영의 결혼식에 초대합니다",
  },
],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "강준석♡윤선영의 결혼식에 초대합니다",
    description: "2027년 01월 30일 PM 03시 10분",
    images: [
  "https://wedding-invitation-gamma-olive.vercel.app/images/og-image.png",
],
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
  <script
    src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
    async
  />
</body>
    </html>
  );
}