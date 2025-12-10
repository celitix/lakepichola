import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
   <>
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 mt-16">
          Lake Pichola Timings
        </h2>

        {/* Description */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Every good thing comes with a time limit. Lake Pichola timings are
            similar in nature. Lake Pichola can be visited every day of the week
            and the timings generally range between{" "}
            <strong>9 am to 6 pm</strong>. The best of artificial manmade lake
            in the heart of Rajasthan, Lake Pichola offers{" "}
            <strong>boat rides</strong> to its visitors. The extended lake is
            the crowning glory of the city of lakes. And the city of lakes
            cannot be imagined without a boat ride. The rides here are
            amazingly classified into various classes. These rides have their
            timings for the best experiences. The famous poet{" "}
           <Link href="https://en.wikipedia.org/wiki/Rudyard_Kipling" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Rudyard Kipling</Link> has commented on Lake Pichola “see
            it and die”. The best time to visit the city of Udaipur is during
            the months of September and March. The weather is very pleasant at
            this point, and one can enjoy every bit of their stay during this
            period. The aim to visit Lake Pichola is basically to enjoy the
            picturesque beauty of the lake and the city by its side. But summers
            in Rajasthan are unbearable, and stepping out in the sun will be a
            tedious task. Lake Pichola timings are suggested to be best between
            September and March. A number of festivals and celebrations take
            place in the Indian subcontinent. Rajasthan is a land of
            celebrations and festivals. Speaking of Udaipur, the most
            significant ones are <Link href="https://en.wikipedia.org/wiki/Shilpgram,_Udaipur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Shilpgram</Link> Crafts Mela, which
            attracts thousands of tourists from all over the world.
          </p>
        </div>

        {/* Image */}
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/timings.jpg"
              alt="Lake Pichola Timings"
              fill
              priority
              className="object-cover rounded-lg transition-transform duration-500  hover:scale-105"
            />
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Sourced From Freepik
        </p>

        {/* Bottom Description */}
        <div className="text-gray-700 leading-relaxed space-y-4 mt-8">
          <p>
            Since the lake is ideal for the sunset view, the boat rides are
            planned accordingly before the sunset timings. Lake Pichola timings
            have to be adjusted according to the sunset timings for the most
            beautiful and contenting experience for visitors. Lake Pichola
            timings are significant to note down before planning a visit to the
            city of lakes. This will add to your quality experience in the city
            and also make you aware of the daily timings of various activities
            going on in the city.
          </p>
        </div>
      </div>
    </section>
   </>
  )
}

export default page