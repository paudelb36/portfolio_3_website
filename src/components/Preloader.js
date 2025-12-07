"use client"
import { useEffect, useRef, useState } from "react"

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const rootRef = useRef(null)
  const svgRef = useRef(null)
  const svgElRef = useRef(null)
  const loadedRef = useRef(false)
  const animDoneRef = useRef(false)
  const reduceRef = useRef(false)
  const blinkingRef = useRef(false)
  const blinkDoneRef = useRef(false)
  const startRef = useRef(performance.now())
  const MIN_MS = 0
  const BLINK_MS = 180
  const BLINK_REPEAT = 2
  const maybeHide = () => {
    const elapsed = performance.now() - startRef.current
    if (loadedRef.current && animDoneRef.current && elapsed >= MIN_MS) {
      if (reduceRef.current) { setHidden(true); return }
      if (blinkDoneRef.current) { setHidden(true); return }
    }
  }
  useEffect(() => {
    const finish = () => { loadedRef.current = true; console.log('[Preloader] window load'); maybeHide() }
    const domReady = () => { loadedRef.current = true; console.log('[Preloader] DOMContentLoaded'); maybeHide() }
    if (document.readyState === "complete") finish()
    else {
      window.addEventListener("load", finish, { once: true })
      document.addEventListener("DOMContentLoaded", domReady, { once: true })
    }
    const loadFallback = setTimeout(() => { if (!loadedRef.current) { loadedRef.current = true; console.warn('[Preloader] load fallback'); maybeHide() } }, 5000)
    return () => {
      window.removeEventListener("load", finish)
      document.removeEventListener("DOMContentLoaded", domReady)
      clearTimeout(loadFallback)
    }
  }, [])
  useEffect(() => {
    let cancelled = false
    fetch('/BP.svg')
      .then((res) => res.text())
      .then((markup) => {
        if (cancelled || !svgRef.current) return
        svgRef.current.innerHTML = markup
        const svgEl = svgRef.current.querySelector('svg')
        if (svgEl) {
          svgEl.setAttribute('class', 'relative z-10 w-[55vw] max-w-[360px] h-auto')
          svgElRef.current = svgEl
        }
        const allPaths = Array.from(svgRef.current.querySelectorAll('path'))
        const originalParent = allPaths[0]?.parentNode || svgEl
        const idOf = (el) => (el.getAttribute('id') || '').toLowerCase()
        let bPaths = allPaths.filter((p) => {
          const id = idOf(p)
          return id.startsWith('bp-b') || id.includes('-b-') || id.includes('b-')
        })
        let pPaths = allPaths.filter((p) => {
          const id = idOf(p)
          return id.startsWith('bp-p') || id.includes('-p-') || id.includes('p-')
        })
        if (bPaths.length + pPaths.length !== allPaths.length) {
          bPaths = allPaths.slice(0, Math.ceil(allPaths.length / 2))
          pPaths = allPaths.slice(Math.ceil(allPaths.length / 2))
        }
        bPaths.forEach((p, i) => p.setAttribute('id', `bp-b-${i + 1}`))
        pPaths.forEach((p, i) => p.setAttribute('id', `bp-p-${i + 1}`))
        const makeGroup = (id, paths) => {
          const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
          g.setAttribute('id', id)
          paths.forEach((p) => g.appendChild(p))
          return g
        }
        const bGroup = makeGroup('bp-b-group', bPaths)
        const pGroup = makeGroup('bp-p-group', pPaths)
        originalParent.appendChild(bGroup)
        originalParent.appendChild(pGroup)
        const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
        reduceRef.current = reduce
        if (reduce) {
          allPaths.forEach((p) => {
            p.setAttribute('vector-effect', 'non-scaling-stroke')
            p.setAttribute('pathLength', '1')
            p.style.stroke = 'none'
            p.style.fill = '#fff'
            p.style.strokeDasharray = '1'
            p.style.strokeDashoffset = '0'
            p.style.strokeOpacity = '1'
            p.style.animation = 'none'
          })
          setTimeout(() => { animDoneRef.current = true; console.log('[Preloader] reduced motion'); maybeHide() }, 800)
          return
        }
        const allToFill = [...bPaths, ...pPaths]
        allToFill.forEach((p) => { p.style.stroke = 'none'; p.style.fill = '#fff' })
        const defs = svgEl.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs')
        if (!defs.parentNode) svgEl.appendChild(defs)
        const makeClip = (id, className, delay, dur) => {
          const cp = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')
          cp.setAttribute('id', id)
          cp.setAttribute('clipPathUnits', 'objectBoundingBox')
          const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
          rect.setAttribute('x', '0')
          rect.setAttribute('y', '0')
          rect.setAttribute('width', '1')
          rect.setAttribute('height', '1')
          rect.setAttribute('class', `bp-clip ${className}`)
          rect.setAttribute('style', `animation: bp-reveal ${dur}s ease-out forwards ${delay}s`)
          cp.appendChild(rect)
          defs.appendChild(cp)
          return cp
        }
        const revealDur = 1.3
        const cpB = makeClip('clip-b', 'bp-clip-b', 0, revealDur)
        const bTotal = revealDur + 0.2
        const cpP = makeClip('clip-p', 'bp-clip-p', bTotal, revealDur)
        bGroup.setAttribute('clip-path', 'url(#clip-b)')
        pGroup.setAttribute('clip-path', 'url(#clip-p)')
        const totalEnd = bTotal + revealDur
        console.log('[Preloader] filled groups:', { b: bPaths.length, p: pPaths.length }, 'totalEnd(s):', totalEnd)
        setTimeout(() => {
          animDoneRef.current = true
          console.log('[Preloader] animation complete')
          if (!reduceRef.current && !blinkingRef.current) {
            blinkingRef.current = true
            svgElRef.current?.classList.add('preloader-blink-twice')
            setTimeout(() => { blinkDoneRef.current = true; maybeHide() }, BLINK_MS * BLINK_REPEAT + 120)
          }
          maybeHide()
        }, (totalEnd) * 1000)
      })
      .catch((err) => { console.error('[Preloader] SVG load failed', err); animDoneRef.current = true; maybeHide() })
    return () => { cancelled = true }
  }, [])
  useEffect(() => {
    const hardStop = setTimeout(() => {
      if (!hidden) {
        loadedRef.current = true
        animDoneRef.current = true
        maybeHide()
      }
    }, 8000)
    return () => clearTimeout(hardStop)
  }, [hidden])
  return (
    <div ref={rootRef} className={`fixed inset-0 z-[10000] grid place-items-center transition-opacity duration-500 ${hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-hidden={hidden} aria-label="Preloader">
      <div className="absolute inset-0 bg-sage-700 z-0" />
      <div ref={svgRef} />
      <noscript>
        <style>{`.nojs-preloader{position:fixed;inset:0;z-index:9999;background:#5c7057;display:grid;place-items:center}`}</style>
        <div className="nojs-preloader">
          <img src="/BP.svg" alt="BP" className="w-[55vw] max-w-[360px] h-auto" />
        </div>
      </noscript>
    </div>
  )
}
