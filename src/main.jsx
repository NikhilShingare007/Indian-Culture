import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Heritage from './Pages/Heritage'
import Cuisine from './Pages/Cuisine'
import HealthCuisine from './Pages/HealthCuisine'
import FestFood from './Pages/FestFood'



let allRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Heritage",
    element: <Heritage />
  },
  {
    path: "/Cuisine",
    element: <Cuisine />
  },
  {
    path: "/healthCuisine",
    element: <HealthCuisine />
  },
  {
    path: "/festFood",
    element: <FestFood />
  }

]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
   <RouterProvider router = {allRoutes}/>
  </StrictMode>,
)
