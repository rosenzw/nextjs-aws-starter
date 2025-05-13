import './globals.css'
import { Analytics } from "@vercel/analytics/react"

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
