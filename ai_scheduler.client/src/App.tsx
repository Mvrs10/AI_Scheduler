//import { useState } from 'react'

import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import { appTheme } from './constants/appConstants.ts'
import Header from './components/Header/Header.tsx'
import Home from './components/Home/Home.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {

  //const [signOut, setSignOut] = useState<boolean>(true)

  return (
    <>
      <div>
        <ThemeProvider theme={appTheme}>
          <Header />
          <Home />
          <Footer />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
