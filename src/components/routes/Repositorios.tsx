import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { Link } from "react-router-dom"

interface Repositorio {
  name: string,
  html_url: string,
  language: string,
  created_at: string,
  updated_at: string,
  homepage: string
}

export default function Repositorios() {
  const [ repos, setRepos ] = useState<Array<Repositorio>>([])

  useEffect(() => {
    api.get("/MarcusCaue/repos").then(response => setRepos(response.data))
  }, [])

  return (
    <section className="overflow-auto">
      {
        repos.map((repo, key) => {
          return (
            <section key={key} className="px-10 py-5">
              <h1 className="text-emphasis text-xl"> { repo.name } </h1>

              <div id="informacoes" className="flex justify-between">
                <div id="links" className="flex flex-col justify-center gap-5">
                  <span> Acesse os arquivos do repositório clicando <a href={ repo.html_url } target="_blank" className="text-emphasis destaque"> aqui </a> </span>
                  { 
                    repo.homepage !== "" && repo.homepage !== null ? 
                      <span> Site em Produção: <a href={ repo.homepage } target="_blank" className="text-blue-400 destaque"> { repo.homepage.substring(8) } </a> </span>
                    :
                      ''
                  }
                </div>

                <div id="outras_informacoes" className="flex flex-col gap-5">
                  <span> Data de criação: { repo.created_at } </span>
                  <span> Última atualização: { repo.updated_at } </span>
                  <span> Principal linguagem: { repo.language } </span>
                </div>
              </div>

              <hr className="mt-5" />
            </section>
          )
        })
      }
    </section>
  )
}