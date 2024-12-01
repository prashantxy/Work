import './global.css'
import { Inter } from 'next/font/google'
import AnimatedBackground from './components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interactive Portfolio',
  description: 'A showcase of my skills in web development, Docker, Web3, and AI/ML',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}

