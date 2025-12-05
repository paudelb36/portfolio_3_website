"use client"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function Contact() {
  useEffect(() => {
    const btns = document.querySelectorAll('.social-btn')
    btns.forEach((el) => {
      const tl = gsap.timeline({ paused: true })
        .to(el, { y: -4, scale: 1.05, duration: 0.2, ease: 'power2.out' })
      el.addEventListener('mouseenter', () => tl.restart())
      el.addEventListener('mouseleave', () => gsap.to(el, { y: 0, scale: 1, duration: 0.2 }))
    })
  }, [])
  return (
    <section id="contact" className="section">
      <div className="mb-4">
        <h3 className="text-lg font-semibold font-display">Contact & Social</h3>
        <p className="text-sm text-sage-600">Reach me via email or follow the links below.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card p-4">
          <div className="font-medium">Email</div>
          <a className="text-sage-700" href="mailto:paudelb11@gmail.com">paudelb11@gmail.com</a>
        </div>
        <div className="card p-4">
          <div className="font-medium">Social</div>
          <div className="mt-2 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/bibek-paudel-06b53821b/" target="blank" aria-label="LinkedIn" className="social-btn group inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sage-100 text-sage-700 hover:bg-sage-200 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-80 group-hover:opacity-100 text-sage-700 transition-colors group-hover:text-[#0A66C2]"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.15V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.44V23h-4V8z"/></svg>
            </a>
            <a href="https://github.com/paudelb36" target="blank" aria-label="GitHub" className="social-btn group inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sage-100 text-sage-700 hover:bg-sage-200 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-80 group-hover:opacity-100 text-sage-700 transition-colors group-hover:text-[#181717]"><path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.87 3.16 8.99 7.54 10.44.55.1.75-.24.75-.53v-1.87c-3.07.67-3.72-1.49-3.72-1.49-.5-1.27-1.23-1.61-1.23-1.61-.99-.67.07-.66.07-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.72.38-1.19.69-1.46-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.18 1.13-2.96-.11-.28-.49-1.43.11-2.97 0 0 .92-.3 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.43 3.02-1.13 3.02-1.13.6 1.54.22 2.69.11 2.97.7.78 1.12 1.76 1.12 2.96 0 4.23-2.58 5.16-5.04 5.43.39.33.74.98.74 1.98v2.94c0 .29.2.64.75.53 4.38-1.45 7.54-5.57 7.54-10.44C23.1 5.33 18.27.5 12 .5z"/></svg>
            </a>
            <a href="https://x.com/BebekPaudel" target="blank" aria-label="Twitter" className="social-btn group inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sage-100 text-sage-700 hover:bg-sage-200 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-80 group-hover:opacity-100 text-sage-700 transition-colors group-hover:text-[#1DA1F2]"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.4-4.11 11.633-11.633 11.633-2.313 0-4.464-.676-6.272-1.842.322.037.63.05.964.05 1.91 0 3.668-.65 5.073-1.742-1.786-.037-3.29-1.21-3.809-2.826.254.05.508.075.775.075.373 0 .747-.05 1.096-.138-1.868-.373-3.273-2.022-3.273-3.999v-.05c.548.304 1.18.49 1.85.515-1.106-.739-1.85-1.997-1.85-3.422 0-.76.203-1.458.56-2.068 2.03 2.5 5.064 4.135 8.47 4.31-.063-.304-.1-.622-.1-.94 0-2.3 1.868-4.168 4.168-4.168 1.2 0 2.286.49 3.048 1.28.95-.188 1.85-.53 2.658-1.01-.314.977-.977 1.8-1.85 2.313.85-.1 1.663-.326 2.424-.65-.563.85-1.27 1.6-2.09 2.2z"/></svg>
            </a>
            <a href="https://www.instagram.com/paudelb_/" target="blank" aria-label="Instagram" className="social-btn group inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sage-100 text-sage-700 hover:bg-sage-200 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-80 group-hover:opacity-100 text-sage-700 transition-colors group-hover:text-[#E1306C]"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.17.06 1.8.25 2.22 .42.56 .22 .96 .49 1.38 .91.42 .42 .69 .82 .91 1.38 .17 .42 .36 1.05 .42 2.22 .07 1.2 .07 1.6 .07 4.8s0 3.6-.07 4.8c-.06 1.17-.25 1.8-.42 2.22-.22 .56-.49 .96-.91 1.38-.42 .42-.82 .69-1.38 .91-.42 .17-1.05 .36-2.22 .42-1.2 .07-1.6 .07-4.8 .07s-3.6 0-4.8-.07c-1.17-.06-1.8-.25-2.22-.42-.56 .22-.96 .49-1.38 .91-.42 .42-.69 .82-.91 1.38-.17 .42-.36 1.05-.42 2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6 .07-4.8c.06-1.17 .25-1.8 .42-2.22 .22-.56 .49-.96 .91-1.38 .42-.42 .82-.69 1.38-.91 .42-.17 1.05-.36 2.22-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76 .07-1.02 .05-1.57 .22-1.94 .37-.49 .19-.83 .41-1.21 .79-.38 .38-.6 .72-.79 1.21-.15 .37-.32 .92-.37 1.94-.07 1.24-.07 1.61-.07 4.76s0 3.52 .07 4.76c.05 1.02 .22 1.57 .37 1.94 .19 .49 .41 .83 .79 1.21 .38 .38 .72 .6 1.21 .79 .37 .15 .92 .32 1.94 .37 1.24 .07 1.61 .07 4.76 .07s3.52 0 4.76-.07c1.02-.05 1.57-.22 1.94-.37 .49-.19 .83-.41 1.21-.79 .38-.38 .6-.72 .79-1.21 .15-.37 .32-.92 .37-1.94 .07-1.24 .07-1.61 .07-4.76s0-3.52-.07-4.76c-.05-1.02-.22-1.57-.37-1.94-.19-.49-.41-.83-.79-1.21-.38-.38-.72-.6-1.21-.79-.37-.15-.92-.32-1.94-.37-1.24-.07-1.61-.07-4.76-.07zm0 3.5a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.8-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
