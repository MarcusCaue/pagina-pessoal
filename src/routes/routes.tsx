import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Contatos from "../components/routes/Contatos"
import Experiencias from "../components/routes/Experiencias"
import Formacao from "../components/routes/Formacao"
import Perfil from "../components/routes/Perfil"
import Repositorios from "../components/routes/Repositorios"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Repositorios />, },
      { path: "/perfil", element: <Perfil />, },
      { path: "/formacao", element: <Formacao />, },
      { path: "/contatos", element: <Contatos />, },
      { path: "/experiencias", element: <Experiencias />, },
    ]
  }
])