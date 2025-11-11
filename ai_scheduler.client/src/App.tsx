import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import { appTheme } from './constants/appConstants.ts'
import Header from './components/Header/Header.tsx'
import AppRouter from './AppRouter.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <div>
        <BrowserRouter>
          <ThemeProvider theme={appTheme}>
            <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
              <AppRouter isAdmin={isAdmin} />
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
