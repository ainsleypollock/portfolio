import Link from "next/link";

export default function GiftsFunPage() {
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
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">Just for Fun</h2>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Waldron-opoly</h3>
          <p className="text-ocean-700 leading-relaxed">
            Content coming soon...
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Alice's House</h3>
          <p className="text-ocean-700 leading-relaxed">
            Content coming soon...
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Flour Water Salt Keychains</h3>
          <p className="text-ocean-700 leading-relaxed">
            Content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
