import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/about/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/auth/register/'
import Login from './components/auth/login/index.jsx'
import Navbar from './components/navbar/index.jsx'
import Datakes from './components/datakes/fragment/index.jsx'
import Medsos from './medsos/component/medsos/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/navbar",
    element: <Navbar/>,
  },
  {
    path: "/data-kesehatan",
    element: <Datakes/>
  },
  {
    path: "/medsos",
    element: <Medsos/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
