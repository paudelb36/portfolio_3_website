import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Projects from "@/components/Projects"
import TechStack from "@/components/TechStack"
import Hobbies from "@/components/Hobbies"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="space-y-4">
      <Header />
      <Hero />
      <section id="about" className="section">
        <AboutMe />
      </section>
      <Projects />
      <section id="techstack" className="space-y-4">
        <TechStack />
      </section>
      
      <section id="hobbies" className="space-y-4">
        <Hobbies />
      </section>
      
      <Contact />
      <Footer />
    </main>
  )
}
