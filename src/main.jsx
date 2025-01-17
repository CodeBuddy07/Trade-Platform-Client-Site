import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <div className='text-gray-700'>
   <RouterProvider router={Routes} />
   </div>
   
  </StrictMode>,
)
