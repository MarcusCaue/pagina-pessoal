import { NavLink } from "react-router-dom";

export default function NavBar() {
  const links = [
    { name: "Repositórios", path: "/" }, 
    { name: "Perfil", path: "/perfil" }, 
    { name: "Experiências", path: "/experiencias" }, 
    { name: "Contatos", path: "contatos" }
  ]

  return (
    <nav className="flex flex-row justify-evenly border-b border-b-border rounded-t-lg">
      { 
        links.map((link, key) => {
          return (
            <>
              <NavLink className="link destaque p-2" to={link.path}> {link.name} </NavLink>
              { key !== links.length - 1 ? <div className="linha-vertical"></div> : ''}
            </>
          )
        }) 
      }
    </nav>
  )
}