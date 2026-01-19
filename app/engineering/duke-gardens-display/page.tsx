import Link from "next/link";

export default function DukeGardensDisplayPage() {
  return (
    <>
      <div
        className="fixed inset-0 overflow-auto"
        style={{ backgroundColor: '#1a3a52' }}
      >
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6" style={{ fontWeight: 'bold', color: '#e8f4f8' }}>
          <h1 className="text-3xl">
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              Ainsley Pollock
            </Link>
          </h1>
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
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#e8f4f8' }}>Duke Gardens Water Display</h2>
        </div>

      <div className="grid gap-8">
        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Problem</h3>
          <p className="text-ocean-700 leading-relaxed mb-6">
            The education staff at the Duke Gardens teaches lessons on how water flows through different soil types (gravel, sand, silt, and clay). However, they were using small-scale demonstrations with cups of real soil and water. These demonstrations were messy and a hassle to bring to educational conferences and workshops. They were also hard for large groups of students due to their size.
          </p>
          <div className="flex flex-col items-center">
            <img
              src="/GardensOriginalSolution.png"
              alt="Original Gardens Demonstrations"
              className="w-96 h-auto object-contain"
            />
            <p className="text-ocean-700 text-center mt-2">Original Gardens Demonstration</p>
          </div>
        </div>

        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-2xl font-bold text-ocean-800 mb-4 text-center">Design Criteria</h3>
          <div className="grid grid-cols-3 gap-4 text-ocean-700">
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Clearly depicts differences between gravel, sand, silt, and clay particles
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Clearly depicts differences in how water moves through the 4 particle types
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Water/Soil interactions visible from 270 degrees, 20 feet away
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Size: under 8 cubic feet
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Portable: under 20 pounds, ergonomic when carrying
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Easy to conduct demonstration
            </div>
          </div>
        </div>

        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Solution</h3>
          <p className="text-ocean-700 leading-relaxed mb-6">
            An LED light display consisting of modular demonstrations to show how water flows through gravel, sand, silt, and clay. The display is still in use today and is one of the few educational materials that the Gardens kept during their renovations.
          </p>
          <div className="flex justify-center">
            <img
              src="/GardensMetrics.png"
              alt="Gardens Metrics"
              className="h-auto object-contain"
              style={{ width: '768px' }}
            />
          </div>
        </div>

        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-2xl font-bold text-ocean-800 mb-6 text-center">Key Components</h3>
          <div className="grid grid-cols-3 gap-4 text-ocean-700">
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Lasercut wood and acrylic housing
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              3D printed soil particles
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Programmed LEDs
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Arduino-based electrical system
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Rechargeable battery
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Color-coded 3D printed handles for portability
            </div>
          </div>
        </div>

        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Watch Display in Action</h3>
          <video controls className="w-full shadow-md">
            <source src="/LEDsinAction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
