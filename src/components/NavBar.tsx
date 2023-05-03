import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/repositorios">Repositórios</Link>
      <Link to="/formacao">Formação</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/experiencias">Experiências</Link>
      <Link to="/contatos">Contatos</Link>
    </nav>
  )
}