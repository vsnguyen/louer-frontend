import './globals.css'

export const metadata = {
  title: 'Louer',
  description: 'A Real Estate Platform For Brokers, Agents, Investors, Homeowners, and Buyers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
