import Image from "next/image";
import Link from "next/link";

export default function LakePicholaBoatRide() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* ===== Heading ===== */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 mt-16">
          Lake Pichola Boat Ride
        </h2>

        {/* ===== Paragraphs ===== */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            The artificial fresh water lake in the royal land of{" "}
            <Link href="https://en.wikipedia.org/wiki/Rajasthan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Rajasthan</Link> is
            famous for the Lake Pichola boat ride. A boat ride at the lake is a
            fun activity. If someone is visiting the city of Udaipur, a boat
            ride at the lake is a must. One cannot just afford to miss it.
          </p>
          <p>
            The Lake Pichola boat ride is a safe activity, where the visitors
            ride on a boat and get to sail on the historic lake and get home
            life-long memories of the mesmerizing views of the crystal clear
            water.
          </p>
          <p>
            It is in itself an amazing thing to build an artificial lake in the
            land of Rajasthan where rains are reported to be scanty. Rajasthan
            is the home to the largest desert, the{" "}
            <Link href="https://en.wikipedia.org/wiki/Thar_Desert" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Thar</Link>. Under
            such environmental conditions, building a lake artificially through
            rain water and dams is an achievement. People who have already
            visited the beautiful heaven and have experienced a Lake Pichola
            boat ride report it to be a special feeling.
          </p>
          <p>
            Sailing in the royal lake surrounded with beautiful palaces of
            historical importance, one is sure to get an overwhelming
            experience. The Rameshwar Ghat in the City Palace Garden provides{" "}
            <Link href="https://en.wikipedia.org/wiki/Lake_Pichola" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Lake Pichola</Link>{" "}
            boat rides at an affordable price. The prices are different for
            adults and children. However, the various kinds of boats available
            also determine the prices. Since Lake Pichola boat ride is a
            world-renowned boat ride, the facilities are simply great. A general
            view of the boat will be a wooden boat with 10–12 rows of seating
            arrangements with a canopy to shield from sun.
          </p>
        </div>

        {/* ===== Image Section ===== */}
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/BoatRide.jpg"
              alt="Lake Pichola Boat Ride"
              fill
              priority
              className="object-cover rounded-lg transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
        </div>

     

        {/* ===== Final Paragraphs ===== */}
        <div className="text-gray-700 leading-relaxed space-y-4 mt-6">
          <p>
            There are other varieties of boats available, and as per one’s
            requirement, one can choose the facilities. The boats row frequently
            at regular intervals, and hence the wait time is much less. The boat
            ride takes an entire round of the lake and includes all the
            important palaces.
          </p>
          <p>
            It is exciting to watch the lake side from the lake because we
            generally do the other way round. Boat cruises are also available.
            It is by far the best way to end your day in the city of Udaipur.
          </p>
        </div>
      </div>
    </section>
  );
}
