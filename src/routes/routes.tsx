import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Contatos from "../components/pages/Contatos"
import Experiencias from "../components/pages/Experiencias"
import Perfil from "../components/pages/Perfil"
import Repositorios from "../components/pages/Repositorios"
import About from "../components/About"
import Documento from "../components/Documento"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Repositorios />,  },
      { path: "/perfil", element: <Perfil />, },
      { path: "/contatos", element: <Contatos />, },
      { path: "/experiencias", element: <Experiencias />, },
      { path: "/repo/:nameRepo/about", element: <About />, },
    ]
  },
  { 
    path: "/documento/:nameDocument", 
    element: <Documento /> 
  }
])