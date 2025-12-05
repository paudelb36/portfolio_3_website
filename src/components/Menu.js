"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Menu({ open, onClose }) {
  const overlayRef = useRef(null)
  const panelRef = useRef(null)
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#techstack", label: "Tech Stack" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#contact", label: "Contact" },
  ]
  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose })
    tl.to(panelRef.current, { scale: 0, transformOrigin: "100% 0%", duration: 0.5, ease: "power2.in" }, 0)
      .to(overlayRef.current, { opacity: 0, duration: 0.5, ease: "power2.in" }, 0)
  }
  useEffect(() => {
    gsap.set(panelRef.current, { scale: 0, transformOrigin: "100% 0%" })
    gsap.set(overlayRef.current, { opacity: 0 })
    if (open) {
      const tl = gsap.timeline()
      tl.to(panelRef.current, { scale: 1, transformOrigin: "100% 0%", duration: 0.7, ease: "power3.out" }, 0)
        .to(overlayRef.current, { opacity: 1, duration: 0.7, ease: "power3.out" }, 0)
    } else {
      const tl = gsap.timeline()
      tl.to(panelRef.current, { scale: 0, transformOrigin: "100% 0%", duration: 0.5, ease: "power2.in" }, 0)
        .to(overlayRef.current, { opacity: 0, duration: 0.5, ease: "power2.in" }, 0)
    }
  }, [open])
  function MenuLink({ href, label }) {
    const ref = useRef(null)
    const tlRef = useRef(null)
    useEffect(() => {
      const chars = ref.current?.querySelectorAll('.char') || []
      tlRef.current = gsap.timeline({ paused: true })
        .to(chars, { y: -16, duration: 0.35, ease: 'power2.out', stagger: 0.04 })
        .to(chars, { y: 0, duration: 0.35, ease: 'power2.in', stagger: 0.04 }, 0.05)
      return () => { tlRef.current?.kill() }
    }, [])
    return (
      <a
        href={href}
        ref={ref}
        onMouseEnter={() => tlRef.current?.restart()}
        onMouseLeave={() => tlRef.current?.reverse()}
        onClick={handleClose}
        className="group inline-block py-1 text-4xl sm:text-5xl md:text-6xl font-display text-sage-700 hover:text-sage-800"
      >
        {label.split('').map((ch, i) => (
          <span key={i} className="char inline-block will-change-transform">{ch}</span>
        ))}
      </a>
    )
  }
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div ref={overlayRef} className="menu-overlay absolute inset-0 bg-black/40" onClick={handleClose} />
      <nav ref={panelRef} className="menu-panel absolute inset-0 h-full w-full bg-cream p-10 sm:p-14 flex items-center justify-center">
        <button className="absolute top-6 right-6 md:right-16 text-sage-700 hover:text-sage-900 text-7xl font-semibold" onClick={handleClose}>×</button>
        <ul className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <MenuLink href={l.href} label={l.label} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
