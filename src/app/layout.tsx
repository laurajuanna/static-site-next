import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CssBaseline } from "@nextui-org/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {CssBaseline.flush()}
        <title>Hola mundo!</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
