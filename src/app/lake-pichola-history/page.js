import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LakePicholaHistory = () => {
  return (
   <>
    <section className="w-full bg-white px-4 md:px-10 lg:px-20 py-12">
        <div className='max-w-5xl mx-auto'>
            
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 mt-16 ">
        Lake Pichola History
      </h2>

      {/* Description */}
      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Lake Pichola Udaipur was created in 1362 AD by Pichhu <Link href="https://en.wikipedia.org/wiki/Banjara" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Banjara</Link>, a
          tribesman. Later Maharaja <Link href="https://en.wikipedia.org/wiki/Udai_Singh_II" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold transition-all">Udai Singh Ji</Link> decided to found the city of
          Udaipur by the banks of the beautiful lake Pichola. The emperor must
          have gauged the beauty of the lake and in appreciation, gave the world
          the city of Udaipur. The literal meaning of{" "}
          <i>Pichola</i> is <i>“the backyard”</i> said to be named after a
          nearby village called “Picholi”.
        </p>

        <p>
          History says that the Maharana’s family has been cursed by a tightrope
          walker, Natini. Maharana Jawan Singh Ji, in an inebriated state,
          assured Natini that she would be given half the state of Mewar if she
          crossed Lake Pichola walking on a tightrope. Later, on the day of the
          event, the rope was cut deliberately before she could reach the
          finishing point. The talented Natini drowned in the lake and before
          her last breath, she cursed the Maharana’s family to be deprived of
          any direct descendants. The curse came true and the Ranas were further
          all adopted ones. To commemorate Natini, the lake has a raised
          platform called Natini Chabutra.
        </p>

        <p>
          Situated in the middle of the lake is the Jag Niwas Island on which
          stands the proud Lake Palace. It is a 250-year-old utterly romantic
          palace turned heritage hotel. The Lake Palace has the best of marble
          and mosaic architecture and is now under the flagship of the Taj Group
          of Hotels. Like the Jag Niwas, another island called the Jag Mandir
          and Mohan Mandir are also prevalent.
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 flex justify-center">
       <div className="w-full md:w-3/4 lg:w-2/3 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
    <Image
      src="/assets/history1.jpg"
      alt="Lake Pichola Udaipur"
      fill
      priority
      className="object-cover rounded-lg transition-transform duration-500 hover:scale-110"
    />
  </div>
      </div>

      {/* Last Paragraph */}
      <div className="text-gray-700 leading-relaxed space-y-4 mt-8">
        <p>
          <strong>Jag Mandir</strong> on Lake Pichola Udaipur has a palace on
          the same name. Mohan Mandir (north-east of the lake) is the island
          from where the King would watch the annual Gangaur festival. Maharana
          Udai Singh Ji further enlarged the lake by building a stone masonry
          dam called the <i>Badipol</i>. The City Palace of Udaipur and the Arsi
          Vilas Island are worth a mention here. The City Palace is known for
          the connectivity of boats to all other parts of the lake, and the Arsi
          Vilas is a well-known bird sanctuary. It was made to enjoy the sunset
          view on the lake.
        </p>
      </div>
 </div>
    </section>
   </>
  )
}

export default LakePicholaHistory