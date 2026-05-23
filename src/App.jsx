import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer/>
    </main>
  )
}

export default App
