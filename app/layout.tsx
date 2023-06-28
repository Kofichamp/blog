import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navabar'
import MyProfilePic from './components/MyProfilePic'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kofi_Dev',
  description: 'Created by Kofi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800 ${inter.className}`}>
        <Navbar />
        <MyProfilePic />
          {children}
        </body>
    </html>
  )
}
