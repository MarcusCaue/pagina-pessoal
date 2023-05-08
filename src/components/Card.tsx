import { useEffect, useState } from "react"
import { api } from "../api/api"
import { Envelope, GithubLogo, GlobeHemisphereWest, GraduationCap, User } from "@phosphor-icons/react"

interface User {
  name: string,
  email: string,
  location: string
}

export default function Card() {
  const [ dataUser, setDataUser ] = useState<User>()

  useEffect(() => {
    api.get("/MarcusCaue").then(response => setDataUser(response.data))
  }, [])

  const sizeIcon = 22 
  
  return (
    <aside className="borda flex flex-col gap-5 p-7 w-28% text-sm">
      <img src="https://github.com/MarcusCaue.png" alt="Minha foto de perfil do GitHub" className="rounded-full m-auto w-45%" />
      <span className="informacao"> <User size={sizeIcon}/> { dataUser?.name } </span>
      <span className="informacao"> 
        <Envelope size={sizeIcon}/> 
        <a className="hover:text-emphasis destaque" href="mailto:marcuscaue.dev@gmail.com" target="_blank"> marcuscaue.dev@gmail.com </a> 
      </span>
      <span className="informacao"> 
        <GithubLogo size={sizeIcon}/>
        <a className="hover:text-emphasis destaque" href="https://github.com/MarcusCaue" target="_blank"> github.com/MarcusCaue </a> 
      </span>
      <span className="informacao"> <GraduationCap size={sizeIcon}/> Técnico em Informática - IFPB-CG</span>
      <span className="informacao"> <GlobeHemisphereWest size={sizeIcon}/> { dataUser?.location} </span>
    </aside>
  )
}