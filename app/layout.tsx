import type { Metadata } from "next";
import Link from "next/link";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ainsley Pollock - Engineering Portfolio",
  description: "Environmental Engineering Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="min-h-screen flex flex-col">
          <header className="shadow-lg" style={{ fontWeight: 'bold', color: '#1a3a52', backgroundColor: 'transparent' }}>
            <div className="container mx-auto px-6 py-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl">Ainsley Pollock</h1>
                <div className="flex items-center gap-8">
                  <nav>
                    <ul className="flex space-x-8">
                      <li>
                        <Link
                          href="/about"
                          className="hover:text-seafoam-300 transition-colors"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/engineering"
                          className="hover:text-seafoam-300 transition-colors"
                        >
                          Engineering Projects
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <a
                    href="https://www.linkedin.com/in/ainsley-pollock/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-seafoam-300 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 container mx-auto px-6 py-12">
            {children}
          </main>
          <footer className="py-6 mt-auto" style={{ backgroundColor: '#0a1f2e', color: '#e8f4f8' }}>
            <div className="container mx-auto px-6 text-center text-sm">
              <p>Ainsley Pollock - Engineering Portfolio</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
