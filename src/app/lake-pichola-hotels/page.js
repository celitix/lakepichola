import Link from "next/link";
import Image from "next/image";

export default function LakePicholaHotels() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 mt-16">
          Lake Pichola Hotels
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Birds of a feather flock together. This means that people of same
          nature tend to associate with each other. Similarly, good hotels at
          Lake Pichola (Udaipur Hotels) tend to form great ambiance of
          hospitality. Rajasthan is embedded with the ‘padharo mahre des’
          welcome message — “welcome to my land”. This slogan is the reflection
          of hospitality to the entire world. Lake Pichola hotels are such an
          example of unforgettable stay experience.It is in human nature to stay in good company. Good hotels too have this attitude. Hotels of all kind, serving all classes of people are available. If you look for <Link href="https://en.wikipedia.org/wiki/Udaipur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Udaipur </Link>hot els you will have ample variety to choose from. Some of the best ranked hotels at Udaipur are –
        </p>

        {/* ====== 3 Images Section ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {/* Image 1 */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md group">
            <Image
              src="/assets/hotel1.jpg"
              alt="Hotel 1"
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md group">
            <Image
              src="/assets/hotel2.jpg"
              alt="Hotel 2"
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md group">
            <Image
              src="/assets/hotel3.jpg"
              alt="Hotel 3"
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
       

        {/* ====== Hotel Categories ====== */}
        <div className="mt-10 text-gray-700">
          <h3 className="text-xl font-semibold text-center text-blue-700 mb-2">
            Heritage Hotels
          </h3>
          <ul className="text-center space-y-1">
            <li>The Taj Lake Palace</li>
            <li>The Oberoi Udaivilas</li>
            <li>The Leela Palace</li>
            <li>Trident Udaipur</li>
            <li>Harasar Haveli Hotel</li>
            <li>Bhanwar Palace Hotel</li>
          </ul>

          <h3 className="text-xl font-semibold text-center text-blue-700 mt-8 mb-2">
            Best Udaipur Hotels
          </h3>
          <ul className="text-center space-y-1">
            <li>Amet Haveli</li>
            <li>Jaiwana Haveli</li>
            <li>The Udai Bagh</li>
            <li>Hotel Lakend</li>
            <li>Shiv Niwas Palace</li>
            <li>Heeralaal Hotel</li>
          </ul>

          <h3 className="text-xl font-semibold text-center text-blue-700 mt-8 mb-2">
            Udaipur Resorts
          </h3>
          <ul className="text-center space-y-1">
            <li>The Ananta Resort</li>
            <li>A Justa Resort</li>
            <li>Radisson Blu Udaipur</li>
            <li>The Aravalli Tent Resort</li>
            <li>The Royal Retreat Resort</li>
            <li>Shouryagarh Resort</li>
          </ul>
        </div>

        {/* ====== Description Section ====== */}
        <div className="text-gray-700 leading-relaxed space-y-4 mt-10">
          <p>
            All these Lake Pichola hotels have some similar characteristics.
            These characteristics are tightly sown in the soul of the
            hospitality industry. Let us take a look at the features of the
            hotels –
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Excellent interior and authentic Rajasthani architecture that
              won’t let you forget the stay experience.
            </li>
            <li>
              Services at an affordable price — prices that you would love to
              pay for the luxury experience.
            </li>
            <li>Proximity from the city centre.</li>
            <li>
              Easily reached from the Railway Station, Airport and Bus Station.
            </li>
            <li>
              Multi-cuisine specialised on the{" "}
              <Link href="https://en.wikipedia.org/wiki/Rajasthani_cuisine" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Rajasthani Cuisine</Link>{" "}
              food.
            </li>
          </ul>

          <p>
            Think no more and head to Udaipur for your upcoming vacations.
            Udaipur promises you a visit to remember.
          </p>
        </div>
      </div>
    </section>
  );
}
