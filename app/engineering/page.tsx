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
    <div>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">Engineering Projects</h2>
        <p className="text-lg text-ocean-700">
          Click on any project to learn more about the design, development, and outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/engineering/${project.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-seafoam-500 hover:border-seafoam-600 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-ocean-800 mb-3">{project.title}</h3>
            <div className="mt-4 text-seafoam-600 font-semibold text-sm">
              View Project →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
