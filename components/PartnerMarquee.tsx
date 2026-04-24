'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import Image from '@/components/AppImage'

const MARQUEE_DURATION = 32000

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

const authorities = [
  { src: '/authorities/albury-city-council.jpg', alt: 'Albury City Council' },
  { src: '/authorities/doomadgee-council.png', alt: 'Doomadgee Council' },
  { src: '/authorities/gold-coast-city-council.png', alt: 'Gold Coast City Council' },
  { src: '/authorities/melbourne-water.svg', alt: 'Melbourne Water' },
  { src: '/authorities/south-east-queensland-water.svg', alt: 'South East Queensland Water' },
  { src: '/authorities/sydney-water.png', alt: 'Sydney Water' },
]

type Direction = 'left' | 'right'

function TrackContent({
  items,
  itemClassName,
  copyIndex,
}: {
  items: { src: string; alt: string }[]
  itemClassName: string
  copyIndex: number
}) {
  return (
    <div className="flex items-center gap-12 w-max flex-shrink-0 px-6">
      {items.map((item, index) => (
        <div
          key={`${copyIndex}-${item.alt}-${index}`}
          className={`relative flex-shrink-0 bg-white ${itemClassName}`}
          title={item.alt}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
      ))}
    </div>
  )
}

function MarqueeRow({
  items,
  itemClassName,
  direction,
}: {
  items: { src: string; alt: string }[]
  itemClassName: string
  direction: Direction
}) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const measureRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<Animation | null>(null)

  const [setWidth, setSetWidth] = useState(0)
  const [repeatCount, setRepeatCount] = useState(2)

  useEffect(() => {
    const viewport = viewportRef.current
    const measure = measureRef.current

    if (!viewport || !measure) {
      return
    }

    const updateMetrics = () => {
      const nextViewportWidth = viewport.offsetWidth
      const nextSetWidth = measure.offsetWidth

      if (!nextViewportWidth || !nextSetWidth) {
        return
      }

      setSetWidth((current) => (current === nextSetWidth ? current : nextSetWidth))

      const minimumCopies = Math.max(2, Math.ceil((nextViewportWidth + nextSetWidth) / nextSetWidth) + 1)
      setRepeatCount((current) => (current === minimumCopies ? current : minimumCopies))
    }

    updateMetrics()

    const observer = new ResizeObserver(updateMetrics)
    observer.observe(viewport)
    observer.observe(measure)

    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    const track = trackRef.current

    if (!track || !setWidth || repeatCount < 2) {
      return
    }

    animationRef.current?.cancel()

    const keyframes =
      direction === 'left'
        ? [
            { transform: 'translate3d(0, 0, 0)' },
            { transform: `translate3d(-${setWidth}px, 0, 0)` },
          ]
        : [
            { transform: `translate3d(-${setWidth}px, 0, 0)` },
            { transform: 'translate3d(0, 0, 0)' },
          ]

    const animation = track.animate(keyframes, {
      duration: MARQUEE_DURATION,
      easing: 'linear',
      iterations: Infinity,
    })

    animationRef.current = animation

    return () => {
      animation.cancel()
      animationRef.current = null
    }
  }, [direction, repeatCount, setWidth])

  const repeatedCopies = useMemo(
    () => Array.from({ length: repeatCount }, (_, copyIndex) => copyIndex),
    [repeatCount],
  )

  return (
    <div className="relative">
      <div ref={measureRef} className="pointer-events-none absolute -z-10 w-max opacity-0">
        <TrackContent items={items} itemClassName={itemClassName} copyIndex={-1} />
      </div>

      <div
        ref={viewportRef}
        className="group relative overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div
          ref={trackRef}
          className="flex min-w-max will-change-transform"
          onMouseEnter={() => animationRef.current?.pause()}
          onMouseLeave={() => animationRef.current?.play()}
        >
          {repeatedCopies.map((copyIndex) => (
            <TrackContent
              key={copyIndex}
              items={items}
              itemClassName={itemClassName}
              copyIndex={copyIndex}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PartnerMarquee() {
  return (
    <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400">
          OUR PARTNERS &amp; SUPPLIERS
        </p>
      </div>

      <MarqueeRow items={partners} direction="left" itemClassName="h-10 w-28" />

      <div className="max-w-6xl mx-auto px-4 mt-8 mb-6">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400">
          COUNCILS &amp; WATER AUTHORITIES
        </p>
      </div>

      <MarqueeRow items={authorities} direction="right" itemClassName="h-12 w-40" />
    </section>
  )
}
