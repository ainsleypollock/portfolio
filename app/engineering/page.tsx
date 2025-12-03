export default function EngineeringPage() {
  const projects = [
    {
      title: "Coastal Erosion Mitigation System",
      description: "Designed and implemented a nature-based solution for coastal protection using bio-engineered reefs and native vegetation to reduce wave energy and prevent erosion.",
      technologies: ["Hydraulic Modeling", "GIS Analysis", "Environmental Impact Assessment"],
      year: "2024",
    },
    {
      title: "Marine Water Quality Monitoring Network",
      description: "Developed an integrated sensor network for real-time monitoring of ocean acidification, dissolved oxygen levels, and nutrient pollution in coastal waters.",
      technologies: ["IoT Sensors", "Data Analytics", "Marine Chemistry"],
      year: "2023",
    },
    {
      title: "Sustainable Aquaculture Design",
      description: "Created an integrated multi-trophic aquaculture system that minimizes environmental impact while maximizing production efficiency and ecosystem services.",
      technologies: ["System Design", "Water Treatment", "Ecological Engineering"],
      year: "2023",
    },
  ];

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">Engineering Projects</h2>
        <p className="text-lg text-ocean-700">
          Environmental engineering solutions focused on ocean conservation and coastal resilience.
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
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-sm bg-ocean-100 text-ocean-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
