import { Envelope, GithubLogo, GlobeHemisphereWest, GraduationCap, User } from "@phosphor-icons/react"
import { useEffect, useState }   from "react"
import { User as UserInterface } from "../interfaces/User"
import { api }                   from "../api/api"

export default function Card() {
  const [dataUser, setDataUser] = useState<UserInterface>()

  // Pegando alguns dados do perfil do usuário lá do Github
  useEffect(() => {
    api.get("/MarcusCaue").then(response => setDataUser(response.data))
  }, [])

  const sizeIcon = 22

  return (
    <aside className="borda flex flex-col gap-5 p-7 w-[28%] text-sm">
      <img src={dataUser?.avatar_url} alt="Foto de perfil de Marcus Cauê no Github" className="rounded-full m-auto w-[45%]" />

      <span className="informacao">
        <User size={sizeIcon} /> {dataUser?.name}
      </span>

      <span className="informacao">
        <Envelope size={sizeIcon} />
        <a className="hover:text-emphasis-page destaque" href="mailto:marcuscaue.dev@gmail.com" target="_blank"> marcuscaue.dev@gmail.com </a>
      </span>

      <span className="informacao">
        <GithubLogo size={sizeIcon} />
        <a className="hover:text-emphasis-page destaque" href={dataUser?.html_url} target="_blank"> 
          { dataUser?.html_url.substring(8)}
        </a>
      </span>

      <span className="informacao">
        <GraduationCap size={sizeIcon} /> Téc. em Informática - IFPB-CG
      </span>

      <span className="informacao">
        <GlobeHemisphereWest size={sizeIcon} /> {dataUser?.location}
      </span>
    </aside>
  )
}