import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Packages />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
