"use client"
import { useEffect, useRef } from "react"

export default function Hero() {
  const wrapperRef = useRef(null)
  const colorRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const activeRef = useRef(false)
  const rafRef = useRef(null)
  const radius = 150

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    posRef.current = { x: rect.width / 2, y: rect.height / 2 }
    targetRef.current = { x: rect.width / 2, y: rect.height / 2 }
    const step = () => {
      const p = posRef.current
      const t = targetRef.current
      p.x += (t.x - p.x) * 0.15
      p.y += (t.y - p.y) * 0.15
      const r = activeRef.current ? radius : 0
      if (colorRef.current) {
        colorRef.current.style.clipPath = `circle(${r}px at ${p.x}px ${p.y}px)`
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    const onEnter = (e) => {
      activeRef.current = true
      const rect = el.getBoundingClientRect()
      targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { activeRef.current = false }
    el.addEventListener("pointerenter", onEnter)
    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)
    return () => {
      el.removeEventListener("pointerenter", onEnter)
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="home" className="section-tight overflow-hidden">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex items-center justify-between text-base md:text-4xl text-sage-700">
          <span>Developer</span>
          <span>Designer</span>
        </div>
        <div className="mt-4 text-sage-600 big-title font-display leading-[0.8] tracking-tight">
          <span className="block text-[3.5rem] sm:hidden text-left">BIBEK</span>
          <span className="block text-[3.5rem] sm:hidden text-right">PAUDEL</span>
          <div className="hidden sm:flex items-baseline justify-between">
            <span className="text-[4rem] md:text-[6rem] lg:text-[8rem]">BIBEK</span>
            <span className="text-[4rem] md:text-[6rem] lg:text-[8rem]">PAUDEL</span>
          </div>
        </div>
      </div>
      <div className="mt-0 grid grid-cols-12 gap-0 items-start">
        <div className="col-span-12">
          <div ref={wrapperRef} className="relative overflow-hidden rounded-none bg-sage-600 mx-auto max-w-[1000px] h-full">
            <img src="/myphoto-removebg-preview.png" alt="" className="w-full h-full md:h-[600px] object-contain grayscale" />
            <img ref={colorRef} src="/myphoto-removebg-preview.png" alt="" className="absolute inset-0 w-full h-full md:h-[600px] object-contain transition-[clip-path] duration-300 ease-out" style={{ filter: "grayscale(0) saturate(1) brightness(1)" }} />
            <div className="absolute inset-0 bg-sage-700/25 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
