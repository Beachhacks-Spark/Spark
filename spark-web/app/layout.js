import './globals.css'
import Head from 'next/head'
import { AuthContextProvider } from "../util/context/AuthContext";

export const metadata = {
  title: 'SPARK',
  description: 'SocialApp for Students to host and attend events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
