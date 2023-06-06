import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from "./routes/routes"
import { RouterProvider } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Roteador  */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
