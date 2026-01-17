import Link from "next/link";

export default function EPAFloodwaterSamplerPage() {
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
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">EPA Floodwater Sampler</h2>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Problem</h3>
          <p className="text-ocean-700 leading-relaxed">
            EPA Researchers track biological and chemical contaminants in floodwater. However, existing water sampling methods required researchers to repeatedly check on their sampling bottles during dangerous flood events to see if the bottles had been filled, wasting time and resources. The EPA was looking for a device to alert researchers when their samples had been collected, so they could avoid unnecessary and potentially unsafe trips into the field.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Design Criteria</h3>
          <ul className="space-y-2 text-ocean-700">
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Accurate timestamp of when the sample was collected
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Waterproof electronics housing
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Durable mechanical components that can withstand flood conditions
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Researchers can remotely access the timestamp data
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Solution</h3>
          <p className="text-ocean-700 leading-relaxed">
            Photo coming soon…
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-6">Key Components</h3>
          <ul className="space-y-2 text-ocean-700">
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Mayfly Data Logger Microcontroller
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Real-Time Clock
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              C++ code to log timestamp
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Magnetic reed switch
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Sampling bottle and outer housing
            </li>
            <li className="flex items-start">
              <span className="text-seafoam-500 mr-2">•</span>
              Waterproof Pelican electronics case
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
