import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import App from './App.tsx'
import './index.css'
import { PermissionProvider } from './context/PermissionProvider.tsx'
import { appTheme } from './constants/appConstants.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <PermissionProvider>
          <App />
        </PermissionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
