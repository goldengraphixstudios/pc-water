'use client'

import Image from 'next/image'

const partners = [
  { src: '/partners/austek.png', alt: 'Austek' },
  { src: '/partners/centurion.png', alt: 'Centurion' },
  { src: '/partners/coz-reg.png', alt: 'Coz Reg' },
  { src: '/partners/cse.png', alt: 'CSE' },
  { src: '/partners/dekort.png', alt: 'Dekort' },
  { src: '/partners/eehaa.png', alt: 'Eehaa' },
  { src: '/partners/makwater.png', alt: 'MakWater' },
  { src: '/partners/mfe.png', alt: 'MFE' },
  { src: '/partners/parasyn.png', alt: 'Parasyn' },
  { src: '/partners/waters-marine.png', alt: 'Waters Marine' },
]

// Duplicate the list so the loop is seamless
const doubled = [...partners, ...partners]

export default function PartnerMarquee() {
  return (
    <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400">
          OUR PARTNERS &amp; SUPPLIERS
        </p>
      </div>

      {/* Marquee track */}
      <div
        className="relative flex overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-12 items-center min-w-max px-6">
          {doubled.map((p, i) => (
            <div
              key={`${p.alt}-${i}`}
              className="relative h-10 w-28 flex-shrink-0 bg-white"
              title={p.alt}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
