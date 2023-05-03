import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-evenly border-b border-border">
      <Link to="/repositorios">Repositórios</Link>
      <div className="linha-vertical"></div>

      <Link to="/formacao">Formação</Link>
      <div className="linha-vertical"></div>

      <Link to="/perfil">Perfil</Link>
      <div className="linha-vertical"></div>

      <Link to="/experiencias">Experiências</Link>
      <div className="linha-vertical"></div>

      <Link to="/contatos">Contatos</Link>
    </nav>
  )
}