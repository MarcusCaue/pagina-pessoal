import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Contatos from "../components/pages/Contatos"
import Experiencias from "../components/pages/Experiencias"
import Formacao from "../components/pages/Formacao"
import Perfil from "../components/pages/Perfil"
import Repositorios from "../components/pages/Repositorios"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Repositorios />,  },
      { path: "/perfil", element: <Perfil />, },
      { path: "/formacao", element: <Formacao />, },
      { path: "/contatos", element: <Contatos />, },
      { path: "/experiencias", element: <Experiencias />, },
    ]
  }
])