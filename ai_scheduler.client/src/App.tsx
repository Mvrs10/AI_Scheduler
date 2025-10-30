import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header.tsx'

function App() {

  const [signOut, setSignOut] = useState<boolean>(true)
  
  return (
    <>
      <div>
        <Header signOut={signOut} setSignOut={setSignOut} />
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
