import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'SOAR',
  description: 'A portfolio by Irfanda Sahid'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="w-full py-6 flex justify-center">
          <div className="flex space-x-8 items-center text-white">
            <Link href="/" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#2000FF] to-[#0596D5] transition">
              SOAR
            </Link>
            <Link href="/about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#2000FF] to-[#0596D5] transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#2000FF] to-[#0596D5] transition">
              Contact
            </Link>
          </div>
        </nav>
        <main>{children}

          <footer className="w-full mt-20 py-6 border-t border-gray-900 text-center">
            <p className="text-sm text-gray-600">Irfanda Sahid © 2025</p>
          </footer>
        </main>
      </body>
    </html>
  )
}
