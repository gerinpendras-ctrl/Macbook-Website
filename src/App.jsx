import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <h1 className="text-2xl font-bold font-regular">Hello!</h1>
    </main>
  )
}

export default App
