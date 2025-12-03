export default function EducationPage() {
  const projects = [
    {
      title: "Ocean Literacy Curriculum Development",
      description: "Developed comprehensive K-12 curriculum modules on ocean conservation, marine ecosystems, and climate change impacts, reaching over 500 students across three school districts.",
      audience: "K-12 Students",
      impact: "500+ students",
      year: "2024",
    },
    {
      title: "Community Beach Restoration Workshop Series",
      description: "Organized and led hands-on educational workshops teaching community members about native coastal vegetation, dune restoration techniques, and the importance of beach ecosystems.",
      audience: "Community Members",
      impact: "200+ participants",
      year: "2023",
    },
    {
      title: "Marine STEM Outreach Program",
      description: "Created and facilitated interactive science demonstrations and field trips focused on marine biology, oceanography, and environmental engineering for underserved youth programs.",
      audience: "Youth Programs",
      impact: "150+ students",
      year: "2023",
    },
    {
      title: "Sustainable Fishing Practices Educational Initiative",
      description: "Developed educational materials and workshops for local fishing communities on sustainable practices, bycatch reduction, and marine resource management.",
      audience: "Fishing Communities",
      impact: "75+ participants",
      year: "2022",
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">Education Projects</h2>
        <p className="text-lg text-ocean-700">
          Community education and outreach initiatives promoting ocean conservation and environmental stewardship.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border-l-4 border-teal-500"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-ocean-800">{project.title}</h3>
              <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded">
                {project.year}
              </span>
            </div>
            <p className="text-ocean-700 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ocean-800">Audience:</span>
                <span className="bg-ocean-100 text-ocean-800 px-3 py-1 rounded-full">
                  {project.audience}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ocean-800">Impact:</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                  {project.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
