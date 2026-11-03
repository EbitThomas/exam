import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Calculation from './Pages/Calculation'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/Calculation' element={<Calculation/>} /> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
