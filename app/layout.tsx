import './globals.css'
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/react"
import AdBanner from './components/AdBanner'

export const metadata = {
  title: 'CS467 App Template',
  description: 'A starter NextJS application that integrates with AWS S3 and DynamoDB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9549547938638588"
          crossOrigin="anonymous"></script>
      </head>
      <body>
        {children}
        <AdBanner />
        <Analytics />
      </body>
    </html>
  )
}
