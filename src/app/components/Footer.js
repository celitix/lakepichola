import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero2.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-cyan-600">Lake Pichola</div></Link>
          <p className="text-gray-300 text-base ">
            Enjoy serene boat rides, stunning palace views, and magical sunsets over the shimmering waters.Enjoy serene boat rides, stunning palace views, and magical sunsets over the shimmering waters.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/5-reasons-to-visit-lake-pichola" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
              5 Reasons to visit Lake Pichola
              </p>
            </Link>

            <Link href="/blog/best-tourist-attraction-in-udaipur-lake-pichola" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
            Best Tourist Attraction in Udaipur – Lake Pichola
              </p>
            </Link>

            <Link href="/blog/pichola-lake-udaipur-beauty-of-india" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog3.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
                Pichola Lake Udaipur – Beauty of India
              </p>
            </Link>

             <Link href="/blog/jagdish-temple-a-hindu-temple-in-udaipur" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog4.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
           Jagdish temple – A hindu Temple in Udaipur
              </p>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-cyan-500 transition">Home</Link></li>
            <li><Link href="/lake-pichola-history" className="hover:text-cyan-500 transition">History</Link></li>
            <li><Link href="/lake-pichola-hotels" className="hover:text-cyan-500 transition">Hotels</Link></li>
            <li><Link href="/lake-pichola-boat-rides" className="hover:text-cyan-500 transition">Boat Ride</Link></li>
            <li><Link href="/lake-pichola-timings" className="hover:text-cyan-500 transition">Timings</Link></li>
            <li><Link href="/reach-lake-pichola" className="hover:text-cyan-500 transition">How to reach</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58055.969817226556!2d73.679!3d24.572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56041553fe7%3A0xdfef96846886cdd0!2sLake%20Pichola!5e0!3m2!1sen!2sus!4v1762345944209!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
