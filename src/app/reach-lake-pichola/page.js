import Image from "next/image";
import Link from "next/link";

export default function ReachLakePichola() {
  return (
    <section className="w-full flex justify-center bg-white py-16 px-4">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 mt-16">
          How To Reach Lake Pichola
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you are on for Udaipur tourism, Lake Pichola should top your check
          list. Udaipur is a well-connected city of Rajasthan. To reach{" "}
          <Link href="/" className="text-blue-600 cursor-pointer hover:text-blue-700 font-semibold transition-all">
            Lake Pichola
          </Link>{" "}
          one needs to reach Udaipur first. The Golden quadrilateral road
          network passes through the city of Udaipur. It also falls on the east
          west corridor starting for Porbandar (Guj) to Silchar (Assam). It is 6
          hours from the capital city of Rajasthan Jaipur. Buses are available
          for Udaipur tourism at regular intervals from the national capital New
          Delhi to Udaipur. These buses are run by Rajasthan Tourism Department.
          Trains are run by the Indian railways to the Udaipur city Railway
          station from all the major railway stations of the country. The
          capital of Gujarat Ahmedabad is merely 3.5 hours drive from Udaipur.
          Air routes are available too. The Maharana Pratap International
          Airport or the Dabok airport is 25 km from the lake. It is 22km east
          of Udaipur on the National Highway 76. Spread over 504 acres it is an
          International airport.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Once you reach Udaipur the Lake Pichola is right there to welcome you.
          The Lake spreads its arms wide enough to welcome you. There are
          thousands of hotels to stay by the lake side or you can opt for the
          heritage hotels. The lake is reachable by well-connected options of
          Local buses, Tongas, taxis or auto rickshaws. A conveyance that suits
          your budget and will can be chosen to reach the most alluring tourist
          place Lake Pichola. Local buses have their defined routes and
          dedicated stops to board and de-board.
        </p>

        {/* Image */}
        <div className="mt-8 flex justify-center">
             <div className="w-full md:w-3/4 lg:w-2/3 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/assets/howtoreach.jpg"
            alt="Lake Pichola Udaipur"
            fill
            priority
            className="object-cover rounded-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
            </div>

        {/* Bottom paragraph */}
        <p className="text-gray-700 mt-8 leading-relaxed">
          The Udaipur city bus station and railway station are fairly 3km away
          from the lake Pichola. This connectivity will make your stay and tours
          a hassle free experience and you can well absorb the essence of
          Rajasthan and understand the rich cultural history of the princely
          state of{" "}
          <Link href="https://en.wikipedia.org/wiki/Mewar" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer hover:text-blue-700 font-semibold transition-all">
            Mewar
          </Link>
          . Rajasthan tourism has enhanced the tourism experience through a
          number of dedicated programmes for the city of Udaipur. Lake Pichola
          being a world class attraction the services have developed a lot.
        </p>
      </div>
    </section>
  );
}
