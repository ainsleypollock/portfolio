import Link from "next/link";

export default function DukeGardensDisplayPage() {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/engineering"
          className="text-seafoam-600 hover:text-seafoam-700 font-semibold mb-4 inline-block"
        >
          ← Back to Engineering Projects
        </Link>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">Duke Gardens Water Display</h2>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Problem</h3>
          <p className="text-ocean-700 leading-relaxed">
            The education staff at the Duke Gardens teaches lessons on how water flows through different soil types (gravel, sand, silt, and clay). However, they were using small-scale demonstrations with cups of real soil and water. These demonstrations were messy and a hassle to bring to educational conferences and workshops. They were also hard for large groups of students due to their size.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Design Criteria</h3>
          <ul className="space-y-2 text-ocean-700">
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Clearly depicts differences between gravel, sand, silt, and clay particles
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Clearly depicts differences in how water moves through the 4 particle types
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Water/Soil interactions visible from 270 degrees, 20 feet away
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Size: under 8 cubic feet
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Portable: under 20 pounds, ergonomic when carrying
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Weather resistant for outdoor demonstrations
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Easy to conduct demonstration
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Solution</h3>
          <p className="text-ocean-700 leading-relaxed">
            An LED light display consisting of modular demonstrations to show how water flows through gravel, sand, silt, and clay. The display is still in use today and is one of the few educational materials that the Gardens kept during their renovations.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-6">Key Components</h3>
          <ul className="space-y-2 text-ocean-700">
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Lasercut wood and acrylic housing
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              3D printed soil particles
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Programmed LEDs
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Arduino-based electrical system
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Rechargeable battery
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Color-coded 3D printed handles for portability
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
