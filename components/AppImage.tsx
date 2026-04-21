import Image, { type ImageProps } from 'next/image'

import { withBasePath } from '@/lib/base-path'

export default function AppImage(props: ImageProps) {
  const src = typeof props.src === 'string' ? withBasePath(props.src) : props.src

  return <Image {...props} src={src} />
}
