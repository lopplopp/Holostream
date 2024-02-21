import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/home/Home.jsx'
import Content from './routes/content/Content.jsx'
import Stream from './routes/stream/Stream.jsx'
import './index.css'

const router = createBrowserRouter([
  {path:'/', 
  element:<Home/>, 
  children:[
    {index: true, element:<Content/>},
    {path:'stream', element:<Content/>},
    {path:'stream/:id', element: <Stream/>}
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
