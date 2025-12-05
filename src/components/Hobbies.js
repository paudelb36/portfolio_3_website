"use client"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Hobbies() {
  const items = [
    {
      title: "Football",
      img: "https://unsplash.com/photos/OvZuM1_WOcQ/download?force=true&w=1200",
      alt: "Football on a pitch",
    },
    {
      title: "Anime",
      img: "https://i.pinimg.com/originals/58/67/51/5867515d7118e25b9a4edbe31ff4a4d8.jpg",
      alt: "Anime character",
    },
    {
      title: "F1",
      img: "https://unsplash.com/photos/DZKgdXbGnTU/download?force=true&w=1200",
      alt: "Formula 1 car with poster",
    },
    {
      title: "UFC",
      img: "https://media.gettyimages.com/id/1170056574/photo/mexico-city-mexico-a-general-view-of-the-octagon-prior-to-the-ufc-fight-night-event-on.jpg?s=612x612&w=0&k=20&c=l3J0mRC_sHtXzG7ROpOlkJTJlKS0walnHH0QNFFOtjc=",
      alt: "Mixed martial arts in a ring",
    },
  ]
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const cards = gsap.utils.toArray(".hobby-card")
    cards.forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" }
      })
    })
    return () => ScrollTrigger.getAll().forEach((st) => st.kill())
  }, [])
  return (
    <section className="section-tight" aria-labelledby="hobbies-heading">
      <div className="mb-4 flex items-end justify-between">
        <h3 id="hobbies-heading" className="text-lg font-semibold font-display">Hobbies & Interests</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <figure key={i} className="hobby-card card overflow-hidden group">
            <img
              src={it.img}
              alt={it.alt}
              className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-out"
            />
            <figcaption className="p-3 flex items-center justify-between">
              <span className="font-medium">{it.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

