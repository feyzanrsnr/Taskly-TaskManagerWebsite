import { createRoot } from 'react-dom/client'
import router from './routes/route.jsx'
import './index.css'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />  
)
