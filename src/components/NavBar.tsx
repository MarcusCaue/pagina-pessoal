import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-evenly border-b border-border">
      <Link className="link" to="/repositorios">Repositórios</Link>
      <div className="linha-vertical"></div>

      <Link className="link" to="/formacao">Formação</Link>
      <div className="linha-vertical"></div>

      <Link className="link" to="/perfil">Perfil</Link>
      <div className="linha-vertical"></div>

      <Link className="link" to="/experiencias">Experiências</Link>
      <div className="linha-vertical"></div>

      <Link className="link" to="/contatos">Contatos</Link>
    </nav>
  )
}