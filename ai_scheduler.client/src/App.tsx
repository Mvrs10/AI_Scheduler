//import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header.tsx'
import Home from './components/Home/Home.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {

  //const [signOut, setSignOut] = useState<boolean>(true)
  
  return (
    <>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
