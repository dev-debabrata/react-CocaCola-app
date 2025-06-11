import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import Banner from './Components/Banner/Banner'
import BannerText from './Components/Banner/BannerText'
import Blogs from './Components/Blogs'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'


const App = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Products />
      <Banner />
      <BannerText />
      <Blogs />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App