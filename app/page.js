import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
// import Work from "./components/Work"

const page = () => {
  return (
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">

      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      {/* <Work /> */}
      <Contact />
    </main>
  )
}

export default page
