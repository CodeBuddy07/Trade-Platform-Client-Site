import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <div
   style={{
    // backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
   
    // backgroundImage: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}}
   className='  relative '>
   <RouterProvider router={Routes} />
   </div>
   
  </StrictMode>,
)
