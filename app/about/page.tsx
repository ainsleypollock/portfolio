export default function AboutPage() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">About Me</h2>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <img
                src="https://goputney.com/wp-content/uploads/2025/07/Ainsley-CGERSW.jpg"
                alt="Ainsley Pollock"
                className="w-48 h-48 rounded-lg object-cover shadow-md"
              />
            </div>
            <div className="flex-1">
              <p className="text-ocean-700 leading-relaxed text-lg">
                Growing up on the coast of Maine, I've always felt most at home in nature, particularly on the water. This love for my environment has sparked a drive to work to protect it. I'm always looking for ways to leverage my technical mechanical engineering background to create climate solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
