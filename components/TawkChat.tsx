'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

export default function TawkChat() {
  const pathname = usePathname()

  if (pathname?.startsWith('/cms')) {
    return null
  }

  return (
    <Script id="tawk-to" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function() {
          var s1 = document.createElement("script");
          var s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/69fd33e94960f31c3616ee62/1jo2h5ibk";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  )
}
