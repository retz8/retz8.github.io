import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { redirectToPreferredLocale } from '@/lib/locale'

// Before the first render, so a Korean reader never sees the English page flash.
redirectToPreferredLocale()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
