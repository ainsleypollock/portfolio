import Link from "next/link";

export default function AudioLightDisplayPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in-page {
          animation: fadeIn 0.25s ease-in;
        }
      `}} />
      <div
        className="fixed inset-0 overflow-auto fade-in-page"
        style={{ backgroundColor: '#1a3a52' }}
      >
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6" style={{ fontWeight: 'bold', color: '#e8f4f8' }}>
          <h1 className="text-3xl">Ainsley Pollock</h1>
          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a href="/about" className="hover:opacity-70 transition-opacity">
                    About
                  </a>
                </li>
                <li>
                  <a href="/engineering" className="hover:opacity-70 transition-opacity">
                    Engineering Projects
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="https://www.linkedin.com/in/ainsley-pollock/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
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

        <div className="mb-8">
          <Link
            href="/engineering"
            className="hover:opacity-70 transition-opacity font-semibold mb-4 inline-block"
            style={{ color: '#e8f4f8' }}
          >
            ← Back to Engineering Projects
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#e8f4f8' }}>Audio-Input Light Display</h2>
        </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-ocean-700 leading-relaxed mb-4">
            This project was the culmination of a semester investigating analog electronics components. The result was a device that converted audio output, in this case music from my laptop, to an LED light show. The lights corresponded to the lower frequencies (often the bassline) in the song.
          </p>
          <p className="text-ocean-700 leading-relaxed">
            The project was an exploration of the following components:
          </p>
          <ul className="space-y-2 text-ocean-700 mt-4 ml-4">
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Op Amps
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Filters
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              MOSFETs
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Voltage regulators
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Watch the Circuit in Action</h3>
          <p className="text-ocean-700 leading-relaxed">
            Video coming soon...
          </p>
        </div>
      </div>

        <div className="py-6 text-center text-sm" style={{ color: '#e8f4f8' }}>
          <p>Ainsley Pollock - Engineering Portfolio</p>
        </div>
      </div>
      </div>
    </>
  );
}
