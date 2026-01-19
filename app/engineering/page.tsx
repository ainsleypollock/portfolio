import Link from "next/link";

export default function EngineeringPage() {
  const projects = [
    {
      title: "Garmin Scuba Sensor",
      slug: "garmin-scuba-sensor",
    },
    {
      title: "EPA Floodwater Sampler",
      slug: "epa-floodwater-sampler",
    },
    {
      title: "Audio-Input Light Display",
      slug: "audio-light-display",
    },
    {
      title: "Duke Gardens Water Display",
      slug: "duke-gardens-display",
    },
    {
      title: "Just for Fun",
      slug: "gifts-fun",
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-auto"
        style={{ backgroundImage: 'url(/Acadia.JPG)' }}
      >
      <div className="container mx-auto px-6 py-8 min-h-screen flex flex-col">
        <div className="flex items-center justify-between mb-12" style={{ fontWeight: 'bold', color: '#1a3a4d' }}>
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

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3a4d' }}>Engineering Projects</h2>
          <p className="text-lg" style={{ color: '#1a3a4d' }}>
            Click on any project to learn more about the design process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/engineering/${project.slug}`}
            className="shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-seafoam-500 hover:border-seafoam-600 hover:scale-105 cursor-pointer"
            style={{backgroundColor: "#e8f4f8"}}
          >
            <h3 className="text-xl font-bold text-ocean-800 mb-3">{project.title}</h3>
            <div className="mt-4 text-seafoam-600 font-semibold text-sm">
              View Project →
            </div>
          </Link>
        ))}
        </div>

        <div className="py-6 text-center text-sm mt-auto" style={{ color: '#c8dce8' }}>
          <p>Ainsley Pollock - Engineering Portfolio</p>
        </div>
      </div>
      </div>
    </>
  );
}
