import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

function LinkWrapper({ children } : { children: ReactNode }) {
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
            <LinkWrapper key={key}>
              <NavLink className="link destaque p-2" to={link.path}> {link.name} </NavLink>
              { key !== links.length - 1 && <div className="linha-vertical"></div> }
            </LinkWrapper>
          )
        }) 
      }
    </nav>
  )
}