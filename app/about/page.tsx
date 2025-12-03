export default function AboutPage() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-ocean-900 mb-4">About Me</h2>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Background</h3>
          <p className="text-ocean-700 leading-relaxed mb-4">
            I am an environmental engineer specializing in coastal and marine systems. My work focuses on
            developing sustainable solutions for ocean conservation, coastal resilience, and marine ecosystem
            restoration.
          </p>
          <p className="text-ocean-700 leading-relaxed">
            With a passion for both engineering and education, I strive to bridge the gap between technical
            innovation and community engagement, creating solutions that are both scientifically sound and
            socially impactful.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-ocean-800 mb-2">Engineering</h4>
              <ul className="space-y-2 text-ocean-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Coastal Engineering & Erosion Control
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Marine Water Quality Management
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Sustainable Aquaculture Design
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Ecological Engineering
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-ocean-800 mb-2">Education & Outreach</h4>
              <ul className="space-y-2 text-ocean-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Curriculum Development
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Community Engagement
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  STEM Education
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Environmental Advocacy
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-ocean-800">M.S. Environmental Engineering</p>
              <p className="text-ocean-700">Specialization in Coastal and Marine Systems</p>
            </div>
            <div>
              <p className="font-semibold text-ocean-800">B.S. Civil Engineering</p>
              <p className="text-ocean-700">Minor in Environmental Science</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-ocean-800 mb-4">Mission</h3>
          <p className="text-ocean-700 leading-relaxed">
            My mission is to develop innovative engineering solutions that protect and restore marine
            ecosystems while empowering communities through education and engagement. I believe that
            sustainable environmental stewardship requires both technical excellence and broad public
            understanding of our ocean systems.
          </p>
        </div>
      </div>
    </div>
  );
}
