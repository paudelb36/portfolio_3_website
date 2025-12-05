"use client"
import { useEffect, useRef, useState } from "react"
import { projects } from "@/data/data"
import { gsap } from "gsap"

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4)
  const [active, setActive] = useState(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  useEffect(() => {
    if (active) {
      gsap.set(overlayRef.current, { opacity: 0 })
      gsap.set(contentRef.current, { scale: 0.95, opacity: 0 })
      const tl = gsap.timeline()
      tl.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0)
        .to(contentRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, 0)
    }
  }, [active])
  const closeActive = () => {
    const tl = gsap.timeline({ onComplete: () => setActive(null) })
    tl.to(contentRef.current, { scale: 0.95, opacity: 0, duration: 0.35, ease: "power2.in" }, 0)
      .to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, 0)
  }
  return (
    <section id="projects" className="section">
      <div className="mb-4">
        <h3 className="text-lg font-semibold font-display">Projects</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0, visibleCount).map((p) => {
          const primaryHref = p.url ? p.url : p.github_url
          const primaryLabel = p.url ? "Live Demo →" : "GitHub →"
          return (
            <button
              key={p.id}
              className="card group relative overflow-hidden text-left transition-transform transition-shadow duration-[250ms] ease-out hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 hover:z-10 active:scale-[0.99] will-change-transform"
              onClick={() => setActive(p)}
            >
              <img src={p.image} alt="" className="w-full h-56 object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-out" />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{p.name}</div>
                  {primaryHref && (
                    <a href={primaryHref} target="_blank" rel="noreferrer" className="text-xs text-sage-600">{primaryLabel}</a>
                  )}
                </div>
                {Array.isArray(p.key_value) && p.key_value.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {p.key_value.map((k) => (
                      <span key={k} className="px-2 py-1 rounded bg-sage-100 text-sage-700 text-xs border border-sage-300">
                        {k}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
      {visibleCount < projects.length && (
        <div className="mt-4">
          <button className="px-4 py-2 rounded-md bg-sage-700 text-cream text-sm" onClick={() => setVisibleCount(projects.length)}>More</button>
        </div>
      )}
      {active && (
        <div className="fixed inset-0 z-50">
          <div ref={overlayRef} className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={closeActive} />
          <div ref={contentRef} className="absolute inset-0 p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="bg-black/20 flex items-center justify-center">
                <img src={active.image} alt="" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="bg-cream p-6 sm:p-10 overflow-auto">
                <div className="flex items-start justify-between">
                  <div className="text-2xl sm:text-3xl font-display font-semibold text-sage-700">{active.name}</div>
                  <button aria-label="Close" onClick={closeActive} className="text-sage-700 hover:text-sage-900 text-5xl">×</button>
                </div>
                {Array.isArray(active.key_value) && active.key_value.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.key_value.map((k) => (
                      <span key={k} className="px-2 py-1 rounded bg-sage-100 text-sage-700 text-xs border border-sage-300">
                        {k}
                      </span>
                    ))}
                  </div>
                )}
                {Array.isArray(active.features) && active.features.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm font-semibold text-sage-700">Features</div>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sage-700">
                      {active.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4 space-y-3 text-sage-700">
                  <p>Project details and technology stack shown above. Explore links below.</p>
                  <div className="flex gap-3">
                    {active.url && (
                      <a href={active.url} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-sage-100 hover:bg-sage-200 text-sage-700 text-sm">Live</a>
                    )}
                    {active.github_url && (
                      <a href={active.github_url} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-sage-100 hover:bg-sage-200 text-sage-700 text-sm">GitHub</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
