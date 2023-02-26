import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Spark',
  description: 'SocialApp for Students to host and attend events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel = "icon" href = "/spark-icon.png"/>
      </Head>
      <body>{children}</body>
    </html>
  )
}
