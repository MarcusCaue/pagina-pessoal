import { InstagramLogo, LinkedinLogo, Envelope, GithubLogo } from "@phosphor-icons/react"

const sizeIcon = 32

const contacts = [
  {
    logo: <InstagramLogo size={sizeIcon} />,
    local: "Instagram",
    url: "https://instagram.com/marcus_caue",
    perfil: "@marcus_caue"
  },
  {
    logo: <GithubLogo size={sizeIcon} />,
    local: "Github",
    url: "https://github.com/MarcusCaue",
    perfil: "MarcusCaue"
  },
  {
    logo: <Envelope size={sizeIcon} />,
    local: "Email",
    url: "mailto:marcuscaue.dev@gmail.com",
    perfil: "marcuscaue.dev@gmail.com"
  },
  {
    logo: <LinkedinLogo size={sizeIcon} />,
    local: "Linkedin",
    url: "https://linkedin.com/in/marcuscaue",
    perfil: "Marcus Cauê de Farias Barbosa"
  },
]

export default function Contatos() {
  return (
    <section className="px-10 py-5 flex flex-col gap-3">
      <ul className="list-none flex flex-col gap-3">
        {
          contacts.map((contact, key) => {
            return (
              <li key={key} className="flex items-center">
                <span>{contact.logo}</span> 
                <span>
                  <span className="mx-2">-</span> 
                  <span>{contact.local}: </span> 
                  <a href={contact.url} target="_blank" className="destaque text-emphasis-page">{contact.perfil}</a>
                </span>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}