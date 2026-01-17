import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={dmSans.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-ocean-800 text-white shadow-lg">
            <div className="container mx-auto px-6 py-8">
              <h1 className="text-3xl font-bold mb-6">Ainsley Pollock</h1>
              <nav>
                <ul className="flex space-x-8 border-b border-ocean-600">
                  <li>
                    <Link
                      href="/about"
                      className="inline-block py-3 px-1 border-b-2 border-transparent hover:border-seafoam-300 transition-colors"
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/engineering"
                      className="inline-block py-3 px-1 border-b-2 border-transparent hover:border-seafoam-300 transition-colors"
                    >
                      Engineering Projects
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-1 container mx-auto px-6 py-12">
            {children}
          </main>
          <footer className="bg-ocean-900 text-ocean-100 py-6 mt-auto">
            <div className="container mx-auto px-6 text-center text-sm">
              <p className="mb-3">Ainsley Pollock - Engineering Portfolio</p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/ainsley-pollock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-seafoam-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
