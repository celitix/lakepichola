
import HeroSection from "./components/home";
import Link from "next/link";

export default function Home() {
  return (
   <>
   {/*=== Hero section ===*/}
  <HeroSection />

  {/*=== Welcome section ===*/}
{/* Welcome Section */}
   <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Welcome To Lake Pichola
      </h2>
      <div className="border-t border-gray-300 my-4"></div>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
        Lake Pichola was created in 1362 AD by Pichhu Banjara a tribesman. Later Maharaja Udai singh Ji decided to found the city of Udaipur by the banks of the beautiful Pichola lake. The emperor must have gauged the beauty of the lake and in appreciation, gave the world the city of <Link href="https://en.wikipedia.org/wiki/Udaipur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-all">Udaipur</Link>. The literal meaning of Pichola is ‘the backyard’ said to be named after a nearby village called ‘Picholi’. Situated in the middle of the Lake is the Jag Niwas Island on which stands the proud Lake palace. It is a 250-year-old utterly romantic Palace- turned Heritage hotel. The lake palace has the best of marble and mosaic architecture. It is now under the flagship of the Taj Group of hotels. Like the Jag niwas another island called the Jag mandir and Mohan mandir are also prevalent. Jag mandir on Lake Pichola has a palace on the same name. Mohan mandir (north-east of the lake) is the island from where the King would watch the annual Gangaur festival. Maharana Udai singh ji further enlarged the lake by building a stone masonry dam called the ‘badipol’. The city palace of Udaipur and the Arsi vilas island are worth a mention here. 
        <Link
          href="/lake-pichola-history"
          className="text-blue-600 hover:underline font-semibold transition-all"
        >
          Read More..
        </Link>
      </p>

    </section>
   </>
  );
}
