//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import { appTheme } from './constants/appConstants.ts'
import Header from './components/Header/Header.tsx'
import AppRouter from './AppRouter.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {

  //const [signOut, setSignOut] = useState<boolean>(true)

  return (
    <>
      <div>
        <BrowserRouter>
          <ThemeProvider theme={appTheme}>
            <Header />
              <AppRouter />
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
