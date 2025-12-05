"use client"
import { useEffect } from "react"
import Image from "next/image"
import { highlights } from "@/data/data"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function TechStack() {
  const techs = highlights.flatMap((h) => h.tools)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const els = Array.from(document.querySelectorAll(".tech-card"))
    els.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])
  return (
    <section className="section" aria-labelledby="tech-stack-heading">
      <div className="mb-4">
        <h3 id="tech-stack-heading" className="text-lg font-semibold font-display">Tech Stack</h3>
        <p className="text-sm text-sage-600">Tools I use to build performant products</p>
      </div>
      <ul role="list" className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
        {techs.map((t, i) => (
          <li role="listitem" key={`${t.name}-${i}`} className="group">
            <article className="tech-card card p-2 sm:p-4 bg-transparent sm:bg-gradient-to-br sm:from-cream sm:to-sage-50 transition-colors transition-transform duration-300 ease-out group-hover:shadow-lg group-hover:scale-[1.02] will-change-transform">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="shrink-0 rounded-md bg-transparent sm:bg-white/70 p-1 sm:p-2 sm:shadow-sm transition-colors duration-300 group-hover:bg-sage-100">
                  <Image
                    src={t.icon}
                    alt={`${t.name} logo`}
                    width={48}
                    height={48}
                    className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-md active:scale-105"
                  />
                </div>
                <div className="flex-1 hidden sm:block">
                  <div className="font-medium transition-colors duration-300 group-hover:text-sage-800">{t.name}</div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
