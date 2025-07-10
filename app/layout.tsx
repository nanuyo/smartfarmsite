import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ARTRITHM",
  description: "이미지 기반 스마트팜 솔루션",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/images/artrithm-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/artrithm-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/images/artrithm-logo.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/images/artrithm-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
