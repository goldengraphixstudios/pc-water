import AppImage from '@/components/AppImage'

export interface MosaicImage {
  src: string
  alt: string
}

/**
 * A full-width photo band. The first frame runs tall across two columns and
 * the rest tile beside it, so a page picks up real imagery without the dead
 * space a uniform grid leaves behind.
 */
export default function PhotoMosaic({
  images,
  caption,
  className = '',
}: {
  images: MosaicImage[]
  caption?: string
  className?: string
}) {
  if (images.length === 0) return null

  const [first, ...rest] = images
  const tiles = rest.slice(0, 4)
  /* The hero frame only spans two rows when there are four tiles to stack
     beside it — otherwise it would leave a hole in the second row. */
  const full = tiles.length === 4

  return (
    <figure className={className}>
      <div className={`grid grid-cols-2 gap-2 sm:gap-3 ${full ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
        <div
          className={`relative col-span-2 aspect-[4/3] overflow-hidden bg-[#162538] lg:aspect-auto ${
            full ? 'row-span-2 lg:min-h-[340px]' : 'lg:min-h-[300px]'
          }`}
        >
          <AppImage
            src={first.src}
            alt={first.alt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {tiles.map((img) => (
          <div
            key={img.src}
            className={`relative aspect-[4/3] overflow-hidden bg-[#162538] lg:aspect-auto ${
              full ? 'lg:min-h-[164px]' : 'lg:min-h-[300px]'
            }`}
          >
            <AppImage
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
