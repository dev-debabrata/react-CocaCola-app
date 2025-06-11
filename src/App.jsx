import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'

const App = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Products />
    </main>
  )
}

export default App