
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './components/utils/AppRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './Footer';

const App = () => {
  const router = createBrowserRouter(AppRoutes)
  return (
    <><RouterProvider router={router} />
    <Footer/>
    </>
  )
}

export default App
