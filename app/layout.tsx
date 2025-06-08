import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "IMS",
  description: "이미지 기반 스마트팜 솔루션",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/images/ims-logo.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/images/ims-logo.jpg",
        sizes: "16x16",
        type: "image/jpeg",
      },
    ],
    apple: {
      url: "/images/ims-logo.jpg",
      sizes: "180x180",
      type: "image/jpeg",
    },
    shortcut: "/images/ims-logo.jpg",
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
