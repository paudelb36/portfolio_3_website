"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Footer() {
  const ref = useRef(null)
  const tlRef = useRef(null)
  useEffect(() => {
    const chars = ref.current?.querySelectorAll('.footer-char') || []
    tlRef.current = gsap.timeline({ paused: true })
      .to(chars, { y: -12, duration: 0.3, ease: 'power2.out', stagger: 0.03 })
      .to(chars, { y: 0, duration: 0.3, ease: 'power2.in', stagger: 0.03 }, 0.05)
    return () => tlRef.current?.kill()
  }, [])
  return (
    <footer className="mt-6">
      <div className="mt-6 section-tight">
        <div className="uppercase text-sage-700 big-title font-display tracking-tight leading-none">
          <div className="hidden sm:block whitespace-nowrap text-[clamp(2.5rem,12vw,8rem)]" ref={ref} onMouseEnter={() => tlRef.current?.restart()} onMouseLeave={() => tlRef.current?.reverse()}>
            {"BIBEK PAUDEL".split('').map((ch, i) => (
              <span key={i} className="footer-char inline-block will-change-transform">{ch}</span>
            ))}
          </div>
          <div className="sm:hidden overflow-hidden">
            <div className="marquee whitespace-nowrap text-[2.5rem]">
              <span className="px-4">BIBEK PAUDEL</span>
              <span className="px-4">DEVELOPER</span>
              <span className="px-4">DESIGNER</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a href="#home" aria-label="Back to top" className="group inline-flex items-center gap-2 px-2 py-2 rounded-full bg-sage-600 text-white hover:bg-sage-700 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-90 group-hover:opacity-100"><path d="M12 4l-7 7h4v7h6v-7h4l-7-7z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
