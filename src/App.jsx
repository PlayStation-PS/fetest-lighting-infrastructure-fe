import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import './App.css'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import Add from './pages/Add'
import Update from './pages/Update'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/add",
    element: <Add />
  },
  {
    path: "/update/:id",
    element: <Update />
  },
])

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
