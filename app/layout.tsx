import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <header className="bg-ocean-800 text-white shadow-lg">
            <div className="container mx-auto px-6 py-8">
              <h1 className="text-3xl font-bold mb-6">Ainsley Pollock</h1>
              <nav>
                <ul className="flex space-x-8 border-b border-ocean-600">
                  <li>
                    <Link
                      href="/engineering"
                      className="inline-block py-3 px-1 border-b-2 border-transparent hover:border-teal-300 transition-colors"
                    >
                      Engineering Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/education"
                      className="inline-block py-3 px-1 border-b-2 border-transparent hover:border-teal-300 transition-colors"
                    >
                      Education Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-block py-3 px-1 border-b-2 border-transparent hover:border-teal-300 transition-colors"
                    >
                      About Me
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
              <p>Ainsley Pollock - Environmental Engineering Portfolio</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
