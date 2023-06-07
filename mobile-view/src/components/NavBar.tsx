import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps { children: ReactNode }

function Link({ children } : LinkProps) {
  return <> { children } </>
}

export default function NavBar() {
  const links = [
    { name: "Repositórios", path: "/" }, 
    { name: "Perfil",       path: "/perfil" }, 
    { name: "Experiências", path: "/experiencias" }, 
    { name: "Contatos",     path: "contatos" }
  ]

  return (
    <nav className="flex justify-evenly border-b border-b-border-page">
      { 
        links.map((link, key) => {
          return (
            <Link key={key}>
              <NavLink className="link destaque p-2" to={link.path}> {link.name} </NavLink>
              { key !== links.length - 1 ? <div className="linha-vertical"></div> : ''}
            </Link>
          )
        }) 
      }
    </nav>
  )
}