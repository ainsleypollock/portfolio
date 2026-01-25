import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

export default function GarminScubaSensorPage() {
  return (
    <>
      <div
        className="fixed inset-0 overflow-auto"
        style={{ backgroundColor: '#1a3a52' }}
      >
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6" style={{ fontWeight: 'bold', color: '#e8f4f8' }}>
          <h1 className="text-3xl">
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              Ainsley Pollock
            </Link>
          </h1>
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

        <div className="mb-8">
          <Link
            href="/engineering"
            className="hover:opacity-70 transition-opacity font-semibold mb-4 inline-block"
            style={{ color: '#e8f4f8' }}
          >
            ← Back to Engineering Projects
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#e8f4f8' }}>Garmin Scuba Sensor</h2>
        </div>

      <div className="grid gap-8">
        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <div className="flex gap-6 justify-between">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-ocean-800 mb-4">Problem</h3>
              <p className="text-ocean-700 leading-relaxed max-w-md text-2xl">
                Scuba divers record how far they are able to see underwater after each dive. However, most divers estimate in 5-10 foot increments, leading to unreliable data. Garmin sought out a product to measure and collect data on the water visibility experienced by divers.
              </p>
            </div>
            <div className="flex justify-center flex-1 self-stretch overflow-hidden  shadow-md" style={{minHeight: '100%'}}>
              <img
                src="/Diver.png"
                alt="Scuba diver underwater"
                className="w-auto h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-3xl font-bold text-ocean-800 mb-4 text-center">Design Criteria</h3>
          <div className="grid grid-cols-3 gap-4 text-ocean-700">
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Waterproof to an IPX8 Rating
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Pressure resistant at 60 ft of depth
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Battery life of at least 1.5 hours
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Visibility data displayed to the user wirelessly
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Ease of use: 90% of users state that the device was easy to attach and the data was easy to interpret
            </div>
            <div className="border border-ocean-300 p-4 text-center" style={{backgroundColor: "#e8f4f8"}}>
              Wireless charging method
            </div>
          </div>
        </div>

        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-3xl font-bold text-ocean-800 mb-4">Solution</h3>
          <div className="flex gap-6 justify-center items-stretch">
            <img
              src="/FinalDesign.png"
              alt="Final Design of Garmin Scuba Sensor"
              className="w-1/2 h-auto  shadow-md"
            />
            <div className="w-1/2 overflow-hidden  shadow-md flex items-center">
              <img
                src="/GarminTeam.jpeg"
                alt="Garmin Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-2xl font-bold text-ocean-800 mb-4">How Does It Work?</h4>
            <ol className="space-y-2 text-ocean-700 list-decimal list-inside ml-6">
              <li>Diver attaches the sensor to their Buoyancy Control Device</li>
              <li>Diver presses the "On/Off" button to turn on the device</li>
              <li>Diver presses the "Data" button to start logging visibility data and begins their dive</li>
              <li>Diver concludes dive and presses the "Data" button again to stop data collection</li>
              <li>Diver presses the "Upload" button and views their data via a Google Sheet</li>
              <li>Diver presses the "On/Off" button to turn off the device</li>
              <li>Diver places device on the charging stand to recharge wirelessly</li>
            </ol>
          </div>
        </div>

        <div className="shadow-md p-8" style={{backgroundColor: "#e8f4f8"}}>
          <h3 className="text-3xl font-bold text-ocean-800 mb-6">Key Components</h3>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-ocean-800 mb-3">Nylon SLS Printed Housing</h4>
                <ul className="space-y-2 text-ocean-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Slots to hold induction charger and battery in place to promote durability
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Slots for the piezoelectric button switches and LED indicator
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Groove for gasket
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Holes for the M4 socket head screws
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Notches to lock the lid in place
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Covering for the turbidity sensor to limit exposure to ambient light
                  </li>
                </ul>
              </div>
              <img
                src="/GarminFinalHousing.png"
                alt="Nylon SLS Printed Housing"
                className="w-64 h-auto  shadow-md"
              />
            </div>

            <div className="flex gap-6 items-start -mb-6">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-ocean-800 mb-3">Piezoelectric Buttons for Underwater Use</h4>
                <ul className="space-y-2 text-ocean-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    On/Off power switch
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Data collection switch
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Data upload switch
                  </li>
                </ul>
              </div>
              <img
                src="/Piezo.png"
                alt="Piezoelectric Buttons"
                className="w-24 h-auto  shadow-md relative z-10 mr-12"
                style={{transform: 'rotate(90deg)'}}
              />
            </div>

            <div className="flex gap-6 items-start pt-6">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-ocean-800 mb-3">Gasket</h4>
                <ul className="space-y-2 text-ocean-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Flat silicone 50A gasket and V-ridge design
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Screws located outside the gasket to eliminate leak paths
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Tested underwater in Duke's Hyperbaric Chamber
                  </li>
                </ul>
              </div>
              <div className="w-64 h-48 overflow-hidden  shadow-md">
                <img
                  src="/Hyperbaric.png"
                  alt="Duke's Hyperbaric Chamber Testing"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-ocean-800 mb-3">Turbidity Sensor</h4>
                <ul className="space-y-2 text-ocean-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Detects cloudiness of water by emitting light from one prong and receiving light in the other
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    A lower amount of light detected by the receiver (which occurs in cloudier water) leads to a lower output voltage
                  </li>
                </ul>
              </div>
              <img
                src="/Turbidity.png"
                alt="Turbidity Sensor"
                className="w-64 h-auto  shadow-md"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-ocean-800 mb-3">Turbidity to Visibility Correlation</h4>
              <ul className="space-y-2 text-ocean-700 ml-4">
                <li className="flex items-start">
                  <span className="text-seafoam-500 mr-2">•</span>
                  <span>Correlates the cloudiness detected by the sensor to how far the diver can see underwater</span>
                </li>
                <li className="flex items-start">
                  <span className="text-seafoam-500 mr-2">•</span>
                  <span>Created by collecting visibility data and sensor voltage readings at multiple NC lakes and calculating the relationship</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-ocean-800 mb-3">ESP32 and SD Card</h4>
                <ul className="space-y-2 text-ocean-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Uploads data to a Google Sheet user interface via Bluetooth
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Logs data to SD card for redundancy
                  </li>
                </ul>
              </div>
              <img
                src="/ESP.png"
                alt="ESP32 and SD Card"
                className="w-48 h-auto  shadow-md"
              />
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-ocean-800 mb-3">Induction Charger and Charging Stand</h4>
                <ul className="space-y-2 text-ocean-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Wireless charging to minimize ports and potential leak paths
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Device locks into stand to maintain induction charger alignment in rough environments
                  </li>
                </ul>
              </div>
              <ImageCarousel
                images={[
                  { src: '/Induction.png', alt: 'Induction Charger' },
                  { src: '/ChargingStand.png', alt: 'Charging Stand' },
                  { src: '/ChargingStandwithlower.png', alt: 'Charging Stand with Lower Component' }
                ]}
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-ocean-800 mb-3">D-ring and Velcro Attachment</h4>
              <ul className="space-y-2 text-ocean-700 ml-4">
                <li className="flex items-start">
                  <span className="text-seafoam-500 mr-2">•</span>
                  Durable velcro that attaches the D-rings on the device to the D-rings on a diver's vest/Buoyancy Control Device
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-ocean-800 mb-3">Epoxy Coating</h4>
              <ul className="space-y-2 text-ocean-700 ml-4">
                <li className="flex items-start">
                  <span className="text-seafoam-500 mr-2">•</span>
                  Successfully watertight even at 1500 meters (Shoutout Dave Haas, PhD @ FaunaLabs for the recommendation!)
                </li>
              </ul>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-ocean-800 mb-3">Google Sheets UI</h4>
                <ul className="space-y-2 text-ocean-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Data uploaded wirelessly
                  </li>
                  <li className="flex items-start">
                    <span className="text-seafoam-500 mr-2">•</span>
                    Easy-to-use Google Sheet format with Time and Distance data
                  </li>
                </ul>
              </div>
              <img
                src="/UI2.png"
                alt="Google Sheets User Interface"
                className="w-64 h-auto  shadow-md"
              />
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
