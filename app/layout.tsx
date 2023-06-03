import { Inter } from 'next/font/google'
import '../styles/global.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Game of Life',
  description: 'Game of Life representation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>
          <Header />
          {children}
      </body>
    </html>
  )
}
