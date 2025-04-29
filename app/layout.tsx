import './globals.css'

import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Next.js',
  description: 'Starter NextJS application that integrates with AWS S3 and DynamoDB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
