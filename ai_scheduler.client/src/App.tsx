//import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {

  //const [signOut, setSignOut] = useState<boolean>(true)
  
  return (
    <>
      <div>
        <Header />
        <h1>Hello World</h1>
        <Footer />
      </div>
    </>
  )
}

export default App
