export default function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in-page {
          animation: fadeIn 0.25s ease-in;
        }
      `}} />
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-auto fade-in-page"
        style={{ backgroundImage: 'url(/oceanbackground6.jpeg)' }}
      >
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6" style={{ fontWeight: 'bold', color: '#e8f4f8' }}>
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

        <div className="flex flex-col md:flex-row gap-6 pt-4 pb-12 justify-center">
          <div className="md:w-[43.75%]">
            <div className="p-4 shadow-md h-full" style={{ backgroundColor: '#e8f4f8', height: 'calc(80vh + 2.4rem + 2mm)' }}>
              <img
                src="https://goputney.com/wp-content/uploads/2025/07/Ainsley-CGERSW.jpg"
                alt="Ainsley Pollock"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-[43.75%] flex flex-col gap-6" style={{ height: 'calc(65.625vh + 2rem)' }}>
            <div className="shadow-md p-8 flex items-center" style={{ backgroundColor: '#e8f4f8', flex: '1.2' }}>
              <p className="text-ocean-700 leading-relaxed text-lg">
                Growing up on the coast of Maine, I've always felt most at home in nature, particularly on the water. This love for my environment has sparked a drive to work to protect it. I'm always looking for ways to leverage my technical mechanical engineering background to create climate solutions.
              </p>
            </div>
            <div className="shadow-md p-8 flex flex-col items-center justify-center" style={{ backgroundColor: '#e8f4f8', flex: '0.8' }}>
              <h3 className="text-2xl font-bold text-ocean-800 mb-4 text-center">Professional Experience</h3>
              <div className="grid grid-cols-2 gap-6 items-center justify-items-center">
                <img src="/EPAlogo.png" alt="EPA" className="h-24 object-contain" />
                <img src="/cbl-logo.png" alt="Casco Bay Lines" className="h-24 object-contain" />
                <img src="/GardensLogo.png" alt="Sarah P. Duke Gardens" className="h-20 object-contain" />
                <img src="/putney-student-travel.png" alt="Putney Student Travel" className="h-20 object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 text-center text-sm" style={{ color: '#e8f4f8' }}>
          <p>Ainsley Pollock - Engineering Portfolio</p>
        </div>
      </div>
      </div>
    </>
  );
}
