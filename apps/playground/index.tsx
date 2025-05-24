import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../packages/ui/dist/styles/index.css'
import './index.css'
import { Playground } from './Playground'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>
)
