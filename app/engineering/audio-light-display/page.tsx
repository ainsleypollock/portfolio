import Link from "next/link";

export default function AudioLightDisplayPage() {
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
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">Audio-Input Light Display</h2>
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
    </div>
  );
}
